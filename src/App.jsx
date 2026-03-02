import "./styles.css";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import {FaUser, 
FaCode, 
FaProjectDiagram, 
FaBriefcase, 
FaGraduationCap, 
FaTrophy, 
FaEnvelopeOpenText, FaPhone, FaEnvelope, FaLinkedin, FaFileDownload, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";


const LINKS = {
  email: "ramana268311@gmail.com",
  phone: "+1 (901) 515-0503",
  location: "Pittsburgh, PA",
  github: "https://github.com/Venky268311",      // <- update
  linkedin: "https://www.linkedin.com/in/venkat-ramana-mankena/", // <- update
  resumeUrl: "/VENKAT_RAMANA_MANKENA_SE_1.pdf",  // place PDF in /public
};

const SKILLS = [
  "Java", "Spring Boot", "Spring Security", "Microservices", "Hibernate/JPA",
  "REST APIs", "React.js", "React Native", "JavaScript", "HTML5/CSS3","Bootstrap",
  "AWS (S3, EC2, IAM, Lambda)", "MySQL", "Oracle", "Jenkins", "Maven",
  "Git/Bitbucket", "JUnit/TestNG", "Grafana", "Elasticsearch","AdobeXD", "Figma"
];

const EXPERIENCE = [
  {
    company: "Comcast",
    title: "Java Full Stack Developer",
    time: "Jul 2025 – Present",
    bullets: [
      "Built scalable web apps using Java, Spring Boot, and React.js with clean client–server integration.",
      "Designed RESTful APIs across microservices, improving data retrieval and response time (reported ~25%).",
      "Optimized Hibernate + SQL for MySQL/Oracle and improved server response time via refactoring/caching (reported ~20%).",
      "Improved reliability with JUnit, Maven builds, and CI via Jenkins; supported code reviews and Git/Bitbucket workflows."
    ],
  },
  {
    company: "Infosys (Client: Comcast)",
    title: "Java Full Stack Developer",
    time: "Sep 2024 – Jul 2025",
    bullets: [
      "Built broadband management features using Spring Boot (backend) and React.js (frontend).",
      "Created REST APIs for test scheduling/execution/reporting to reduce manual work and boost automation.",
      "Built a React dashboard for results/log visualization and integrated with execution engine workflows.",
      "Enabled real-time monitoring via Grafana/Elasticsearch dashboards and faster troubleshooting."
    ],
  },
  {
    company: "Prodapt Solutions Pvt. Ltd.",
    title: "Senior Software Engineer",
    time: "Sep 2021 – Dec 2022",
    bullets: [
      "Designed microservices architecture for chatbot applications using Spring Boot/Spring Cloud.",
      "Developed React/React Native components and optimized API calls for reduced latency.",
      "Integrated AWS IAM (access control) and S3 (media storage) for secure cloud operations.",
      "Added automated testing with TestNG and improved collaboration with Git best practices."
    ],
  },
  {
company: "Prodigy Group India Pvt. Ltd.",
title: "UI Developer",
time: "Aug 2018 – Sep 2021",
bullets: [
"Developed full stack web and mobile applications using Java Spring Boot and React.",
"Built RESTful APIs and microservices for enterprise applications.",
"Designed responsive UI using HTML5, CSS3, Bootstrap and React.",
"Developed React Native mobile apps improving user engagement by 25%.",
"Optimized application performance and implemented JUnit testing."
],
},

{
company: "R.S Solutions",
title: "Software Engineer",
time: "Jun 2017 – Aug 2018",
bullets: [
"Designed and developed responsive user interfaces using HTML5, CSS3, Bootstrap, and JavaScript.",
"Built dynamic single-page applications (SPA) using React.js and implemented React Router for smooth navigation.",
"Implemented Redux for efficient state management and improved application workflow consistency.",
"Collaborated with UI/UX designers to translate wireframes into pixel-perfect web interfaces.",
"Optimized frontend performance by reducing page reloads using AJAX and asynchronous API calls.",
"Ensured cross-browser compatibility and mobile responsiveness across multiple devices.",
"Worked closely with backend teams to integrate REST APIs and improve client–server interaction."
],
}
];

const PROJECTS = [
  {
    name: "Automation Results Dashboard",
    stack: ["React", "Redux", "Spring Boot", "REST APIs"],
    highlights: [
     "Developed reusable React components and implemented Redux for efficient state management.",
"Integrated backend REST APIs using Spring Boot for real-time automation data processing.",
"Implemented role-based access and authentication for secure dashboard usage.",
"Improved debugging efficiency by centralizing logs and execution reports in a single dashboard.",
"Collaborated with QA and DevOps teams to enhance automation visibility and reporting accuracy."
    ],
  },
  {
    name: "Broadband Metrics & Alerting",
    stack: ["Elasticsearch", "Grafana", "Spring Boot"],
    highlights: [
      "Designed and implemented log ingestion pipelines using Elasticsearch for large-scale data analysis.",
"Created interactive Grafana dashboards to monitor latency, packet loss, and uptime metrics.",
"Configured real-time alerting mechanisms to detect network performance issues proactively.",
"Optimized backend data processing to handle high-volume device metrics efficiently.",
"Worked with network and DevOps teams to improve monitoring and system reliability."
    ],
  },
  {
    name: "Chatbot Microservices Platform",
    stack: ["Spring Boot", "Spring Cloud", "React", "AWS S3/IAM"],
    highlights: [
      "Designed scalable microservices architecture using Spring Boot and Spring Cloud.",
"Developed REST APIs to integrate chatbot services with web and mobile applications.",
"Implemented secure authentication and authorization using Spring Security and JWT.",
"Integrated AWS S3 for media storage and IAM for secure access control.",
"Enhanced application performance and reliability through modular service design and caching."
    ],
  },
  {
    name: "Toolbelt Mobile Application",
    stack: ["React Native" , "React",  "REST APIs", "Android", "iOS"],
    highlights: [
      "Designed and developed a cross-platform mobile application using React Native for Android and iOS platforms.",
      "Integrated secure RESTful APIs with Spring Boot backend for real-time data communication.",
      "Implemented features like task tracking, notifications, checklist management, and file sharing.",
      "Optimized mobile UI performance and ensured responsive design across multiple devices.",
      "Collaborated with backend and UI teams to deliver scalable and user-friendly mobile solutions."
    ],
  },
  {
      name: "Fiber to Optical Migration System",
      stack: ["React.js", "Spring Boot", "Microservices", "MySQL"],
      highlights: [
      "Developed a full stack migration system using React.js frontend and Spring Boot microservices backend.",
      "Built RESTful APIs to manage broadband customer migration from legacy fiber to optical networks.",
      "Designed dashboards to track migration status, service activation, and performance metrics.",
      "Optimized backend performance using Hibernate and SQL tuning for faster data processing.",
      "Implemented secure and scalable architecture following microservices and CI/CD practices."
      ]
}
];

const MEDIUM_TAGS = ["java", "reactjs", "react-native", "technology"];

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="sectionHead">
        <h2>{title}</h2>
        {subtitle ? <p className="muted">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function Card({ title, meta, children }) {
  return (
    <div className="card">
      <div className="cardTop">
        <div>
          <h3 className="cardTitle">{title}</h3>
          {meta ? <p className="muted">{meta}</p> : null}
        </div>
      </div>
      <div className="cardBody">{children}</div>
    </div>
  );
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mediumPosts, setMediumPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(true);
  const [postsError, setPostsError] = useState("");

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    let isMounted = true;

    const parseMediumXml = (xmlText, tag) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(xmlText, "application/xml");

      return Array.from(doc.querySelectorAll("item")).map((item) => ({
        title: item.querySelector("title")?.textContent || "Untitled",
        link: item.querySelector("link")?.textContent || "",
        pubDate: item.querySelector("pubDate")?.textContent || "",
        tag,
      }));
    };

    const fetchViaPublicFeeds = async () => {
      const feeds = MEDIUM_TAGS.map((tag) =>
        `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
          `https://medium.com/feed/tag/${tag}`
        )}&count=4`
      );

      const responses = await Promise.all(feeds.map((url) => fetch(url)));
      const jsonList = await Promise.all(
        responses.map(async (response) => {
          if (!response.ok) {
            throw new Error("rss2json request failed");
          }
          return response.json();
        })
      );

      let merged = jsonList.flatMap((feed, index) => {
        const tag = MEDIUM_TAGS[index];
        return (feed.items || []).map((item) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          tag,
        }));
      });

      if (merged.length === 0) {
        const fallbackFeeds = await Promise.all(
          MEDIUM_TAGS.map(async (tag) => {
            const mediumRssUrl = `https://medium.com/feed/tag/${tag}`;
            const fallbackUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(mediumRssUrl)}`;
            const response = await fetch(fallbackUrl);
            if (!response.ok) {
              throw new Error("fallback feed request failed");
            }
            const xmlText = await response.text();
            return parseMediumXml(xmlText, tag);
          })
        );
        merged = fallbackFeeds.flat();
      }

      return merged;
    };

    const fetchMediumPosts = async () => {
      setPostsLoading(true);
      setPostsError("");

      try {
        let merged = [];
        try {
          const apiResponse = await fetch("/api/medium-posts");
          if (apiResponse.ok) {
            const apiData = await apiResponse.json();
            merged = apiData.posts || [];
          } else {
            merged = await fetchViaPublicFeeds();
          }
        } catch (apiError) {
          merged = await fetchViaPublicFeeds();
        }

        const deduped = [];
        const seen = new Set();
        for (const item of merged) {
          if (item.link && !seen.has(item.link)) {
            seen.add(item.link);
            deduped.push(item);
          }
        }

        deduped.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

        if (isMounted) {
          setMediumPosts(deduped.slice(0, 8));
          if (deduped.length === 0) {
            setPostsError("No Medium posts found for selected topics right now.");
          }
        }
      } catch (error) {
        if (isMounted) {
          setPostsError("Could not load Medium posts right now.");
        }
      } finally {
        if (isMounted) {
          setPostsLoading(false);
        }
      }
    };

    fetchMediumPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="page">
      {/* NAV */}
      <header className="nav">
        <div className="navInner">
          <div className="brand">
            <div className="logo">VR</div>
            <div>
              <div className="brandName">VenkatRamana Mankena</div>
              <div className="muted small">Java Full Stack Developer</div>
            </div>
          </div>

          <button
            className="menuToggle"
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation"
          >
            {isMobileMenuOpen ? <FaTimes style={{fontSize:"15px",color:"red"}} /> : <FaBars />}
          </button>

          <nav id="primary-navigation" className={`navLinks ${isMobileMenuOpen ? "open" : ""}`}>
            <a href="#about" onClick={closeMobileMenu}>About</a>
            <a href="#skills" onClick={closeMobileMenu}>Skills</a>
            <a href="#education" onClick={closeMobileMenu}>Education</a>
            <a href="#projects" onClick={closeMobileMenu}>Projects</a>
            <a href="#experience" onClick={closeMobileMenu}>Experience</a>
            <a href="#posts" onClick={closeMobileMenu}>Posts</a>
            <a href="#awards" onClick={closeMobileMenu}>Awards</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          </nav>

          <div className="navCtas">
            <a className="btn ghost" href={LINKS.linkedin} target="_blank" rel="noreferrer"><FaLinkedin style={{marginRight:"5px", color:"#0A66C2"}}/> LinkedIn</a>
            <a className="btn" href={`mailto:${LINKS.email}`}><FaEnvelope style={{marginRight:"5px",verticalAlign: "text-bottom",color:"#3b82f6",fontSize:"15px"}}/> Email</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main className="main">
        <section className="hero">
          <div className="heroLeft">
            <p className="pill">Spring Boot • React • AWS • Microservices</p>
            <h1>
              I build scalable, reliable <span className="accent">full-stack</span> products.
            </h1>
            <p className="heroText">
              7+ years building web & mobile apps with Java, Spring Boot, React.js, and cloud tooling.
              Strong on APIs, performance, and clean engineering practices.
            </p>

            <div className="heroButtons">
              <a className="btn" href={LINKS.resumeUrl} target="_blank" rel="noreferrer">View Resume</a>
              <a className="btn ghost" href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>

            <div className="heroMeta">
              <span className="muted"><FaMapMarkerAlt style={{verticalAlign: "middle",verticalAlign: "middle",color:"#22c55e"}}/> {LINKS.location}</span>
              <span className="muted"><FaEnvelope style={{verticalAlign: "middle",color:"#3b82f6"}}/> {LINKS.email}</span>
              <span className="muted"><FaPhone style={{verticalAlign: "middle",color:"#f59e0b"}}/> {LINKS.phone}</span>
            </div>
          </div>

          <div className="heroRight">
            <div className="statGrid">
              <div className="statCard">
                <div className="statNum">7+</div>
                <div className="muted">Years Experience</div>
              </div>
              <div className="statCard">
                <div className="statNum">Java</div>
                <div className="muted">Backend Focus</div>
              </div>
              <div className="statCard">
                <div className="statNum">React</div>
                <div className="muted">Modern UI</div>
              </div>
               <div className="statCard">
                <div className="statNum">React Native</div>
                <div className="muted">Mobile Dev</div>
              </div>
              <div className="statCard">
                <div className="statNum">AWS</div>
                <div className="muted">Cloud Delivery</div>
              </div>
            </div>

          </div>
        </section>

        {/* ABOUT */}
        <Section
          id="about"
          title={<><FaUser style={{marginRight:"5px", color:"#38bdf8"}}/> About</>}
        >
          <div className="">
            <div>
              <p>
                I’m a Java Full Stack Developer with 7+ years of experience designing and delivering scalable web and mobile applications using Java, Spring Boot, Hibernate/JPA, and modern frontend technologies like React.js and React Native. I specialize in building end-to-end full stack solutions, developing microservices-based architectures, and creating responsive web and mobile applications that provide seamless user experiences.
<br></br><br></br>
On the backend, I focus on designing secure and scalable RESTful APIs, optimizing database performance, and building reliable microservices using Spring Boot and cloud technologies. On the frontend, I develop dynamic and high-performance user interfaces using React.js and build cross-platform mobile applications using React Native to ensure consistent experiences across web, Android, and iOS platforms.
<br></br><br></br>
I also have hands-on experience with AWS cloud services, CI/CD pipelines, and DevOps tools to support efficient deployments and system reliability. Recently, I’ve worked on broadband/network management and automation platforms, developing dashboards and real-time metrics visualization tools that improved monitoring, troubleshooting, and operational efficiency. I enjoy solving complex technical challenges, collaborating with cross-functional teams, and building high-quality applications that deliver real business value.</p>
              <p className="muted">
                Recently, I’ve worked on broadband/network management and automation platforms, dashboards, and real-time metrics
                visualization for faster troubleshooting and better operations.
              </p>
            </div>
          </div>
        </Section>

        {/* SKILLS */}
        <Section
          id="skills"
          title={<><FaCode style={{marginRight:"5px", color:"#22c55e"}}/> Skills</>}
          subtitle="Core technologies I use to ship production systems."
        >
          <div className="badgeGrid">
            {SKILLS.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </Section>

        {/* Education */}
<Section
  id="education"
 title={<><FaGraduationCap style={{marginRight:"5px", color:"#3b82f6"}}/> Education</>}
  subtitle="Academic background and qualifications"
>
  <div className="grid">

    <div className="card">
      <h3 className="cardTitle">Master of Science in Information System Management</h3>
      <p className="muted">Robert Morris University, Pennsylvania, USA</p>
      <p className="muted">Jan 2023 – May 2024</p>
      <ul className="bullets">
        <li>Focused on software engineering, cloud computing, and information systems.</li>
        <li>Worked on full stack and cloud-based academic projects.</li>
      </ul>
    </div>

    <div className="card">
      <h3 className="cardTitle">Bachelor of Technology – Electronics & Communication Engineering</h3>
      <p className="muted">JNTUH, Hyderabad, India</p>
      <p className="muted">Aug 2013 – May 2016</p>
      <ul className="bullets">
        <li>Built strong foundation in programming, networking, and system design.</li>
        <li>Developed interest in full stack and software development.</li>
      </ul>
    </div>

  </div>
</Section>
        {/* PROJECTS */}
        <Section
          id="projects"
         title={<><FaProjectDiagram style={{marginRight:"5px", color:"#a855f7"}}/> Projects</>}
        >
          <div className="grid">
            {PROJECTS.map((p) => (
              <Card key={p.name} title={p.name} meta={p.stack.join(" • ")}>
                <ul className="bullets">
                  {p.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>

                
              </Card>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section
          id="experience"
          title={<><FaBriefcase style={{marginRight:"5px", color:"#f59e0b"}}/> Experience</>}
        >
          <div className="stack">
            {EXPERIENCE.map((e) => (
              <Card
                key={e.company + e.time}
                title={`${e.title} — ${e.company}`}
                meta={e.time}
              >
                <ul className="bullets">
                  {e.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </Section>
{/* {Awards} */}
        <Section
  id="awards"
 title={<><FaTrophy style={{marginRight:"5px", color:"#eab308"}}/> Awards</>}
  subtitle="Recognition for performance, delivery, and teamwork."
>
  <div className="grid">
    
    <div className="card">
      <h3 className="cardTitle">🏆 Super Star Team Award</h3>
      <p className="muted">Prodapt Solutions</p>
      <ul className="bullets">
        <li>Recognized for outstanding contribution to project delivery and team collaboration.</li>
        <li>Appreciated for improving system performance and delivering high-quality solutions.</li>
      </ul>
    </div>

    <div className="card">
      <h3 className="cardTitle">⭐ Spotlight Award</h3>
      <p className="muted">Prodapt Solutions</p>
      <ul className="bullets">
        <li>Awarded for exceptional technical contribution and commitment to project success.</li>
        <li>Recognized for proactive problem solving and innovation.</li>
      </ul>
    </div>

  </div>
</Section>

        <Section
          id="posts"
          title={<><FaCode style={{marginRight:"5px", color:"#38bdf8"}}/> Latest Tech Posts</>}
          subtitle="Live Medium feed for Java Full Stack, React, React Native, and technology topics."
        >
          <div className="card">
            <h3 className="cardTitle">Medium (Live)</h3>
            {postsLoading ? <p className="muted">Loading Medium posts...</p> : null}
            {postsError ? <p className="muted">{postsError}</p> : null}
            {!postsLoading && !postsError ? (
              <ul className="bullets">
                {mediumPosts.map((post) => (
                  <li key={post.link}>
                    <a href={post.link} target="_blank" rel="noreferrer">{post.title}</a>
                    <span className="postMeta"> ({post.tag})</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {!postsLoading && !postsError && mediumPosts.length === 0 ? (
              <p className="muted">No recent Medium posts available at the moment.</p>
            ) : null}
          </div>
        </Section>

        {/* CONTACT */}
        <Section
          id="contact"
          title={<><FaEnvelopeOpenText style={{marginRight:"5px", color:"#ef4444"}}/> Contact</>}
        >
          <div className="contactGrid">
            <div className="contactCard">
              <div className="muted small"><FaEnvelope style={{verticalAlign: "text-bottom",color:"#3b82f6",fontSize:"15px"}}/> Email</div>
              <a className="contactValue" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
            </div>
            <div className="contactCard">
              <div className="muted small"><FaPhone style={{verticalAlign: "text-bottom",color:"#f59e0b",fontSize:"15px"}}/> Phone</div>
              <a className="contactValue" href={`tel:${LINKS.phone}`}>{LINKS.phone}</a>
            </div>
            <div className="contactCard">
              <div className="muted small"><FaLinkedin style={{verticalAlign: "text-bottom",color:"#0A66C2",fontSize:"15px"}}/> LinkedIn</div>
              <a className="contactValue" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                Open profile
              </a>
            </div>
            <div className="contactCard">
              <div className="muted small"><FaFileDownload style={{verticalAlign: "text-bottom",color:"#a855f7",fontSize:"15px"}}/> Resume</div>
              <a className="contactValue" href={LINKS.resumeUrl} target="_blank" rel="noreferrer">View PDF</a>
            </div>
          </div>
        </Section>

        <footer className="footer">
          <span className="muted small">© {new Date().getFullYear()} Venkat Ramana</span>
        </footer>
        <Analytics />
      </main>
    </div>
  );
}
