const MEDIUM_TAGS = ["java", "reactjs", "react-native", "technology"];
const POSTS_PER_TAG = 4;
const MAX_TOTAL_POSTS = 8;

function decodeXmlEntities(value) {
  if (!value) return "";

  return value
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function extractTagValue(block, tagName) {
  const regex = new RegExp(`<${tagName}>([\\s\\S]*?)<\\/${tagName}>`, "i");
  const match = block.match(regex);
  return decodeXmlEntities(match?.[1]?.trim() || "");
}

function parseMediumXml(xmlText, tag) {
  const itemBlocks = xmlText.match(/<item>[\s\S]*?<\/item>/gi) || [];

  return itemBlocks.map((block) => ({
    title: extractTagValue(block, "title") || "Untitled",
    link: extractTagValue(block, "link"),
    pubDate: extractTagValue(block, "pubDate"),
    tag,
  }));
}

async function fetchTagPosts(tag) {
  const rssUrl = `https://medium.com/feed/tag/${tag}`;
  const response = await fetch(rssUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; PortfolioFeedBot/1.0)",
      Accept: "application/rss+xml, application/xml, text/xml",
    },
  });

  if (!response.ok) {
    throw new Error(`Medium feed request failed for tag: ${tag}`);
  }

  const xmlText = await response.text();
  return parseMediumXml(xmlText, tag).slice(0, POSTS_PER_TAG);
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const tagPosts = await Promise.all(MEDIUM_TAGS.map((tag) => fetchTagPosts(tag)));
    const merged = tagPosts.flat();

    const deduped = [];
    const seen = new Set();
    for (const item of merged) {
      if (item.link && !seen.has(item.link)) {
        seen.add(item.link);
        deduped.push(item);
      }
    }

    deduped.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    res.status(200).json({ posts: deduped.slice(0, MAX_TOTAL_POSTS) });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Medium posts." });
  }
}
