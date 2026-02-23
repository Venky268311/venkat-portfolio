import "./styles.css";

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
  "REST APIs", "React.js", "React Native", "JavaScript", "HTML5/CSS3",
  "AWS (S3, EC2, IAM, Lambda)", "MySQL", "Oracle", "Jenkins", "Maven",
  "Git/Bitbucket", "JUnit/TestNG", "Grafana", "Elasticsearch"
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
    title: "Java Full Stack Developer",
    time: "Sep 2021 – Dec 2022",
    bullets: [
      "Designed microservices architecture for chatbot applications using Spring Boot/Spring Cloud.",
      "Developed React/React Native components and optimized API calls for reduced latency.",
      "Integrated AWS IAM (access control) and S3 (media storage) for secure cloud operations.",
      "Added automated testing with TestNG and improved collaboration with Git best practices."
    ],
  },
];

const PROJECTS = [
  {
    name: "Automation Results Dashboard",
    stack: ["React", "Redux", "Spring Boot", "REST APIs"],
    highlights: [
      "Visualized test execution results/logs to speed up debugging and improve visibility.",
      "Integrated APIs with execution workflows for smoother scheduling + reporting."
    ],
  },
  {
    name: "Broadband Metrics & Alerting",
    stack: ["Elasticsearch", "Grafana", "Spring Boot"],
    highlights: [
      "Ingested device metrics/logs and enabled real-time dashboards for latency/DHCP/uptime trends.",
      "Improved troubleshooting speed by centralizing observability."
    ],
  },
  {
    name: "Chatbot Microservices Platform",
    stack: ["Spring Boot", "Spring Cloud", "React", "AWS S3/IAM"],
    highlights: [
      "Built scalable microservices and front-end modules for consistent UX across platforms.",
      "Improved security and media handling with IAM policies and S3 storage."
    ],
  },
];

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
  return (
    <div className="page">
      {/* NAV */}
      <header className="nav">
        <div className="navInner">
          <div className="brand">
            <div className="logo">VR</div>
            <div>
              <div className="brandName">Venkat Ramana</div>
              <div className="muted small">Java Full Stack Developer</div>
            </div>
          </div>

          <nav className="navLinks">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="navCtas">
            <a className="btn ghost" href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href={`mailto:${LINKS.email}`}>Email</a>
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
              <span className="muted">📍 {LINKS.location}</span>
              <span className="muted">✉️ {LINKS.email}</span>
              <span className="muted">📞 {LINKS.phone}</span>
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
                <div className="statNum">AWS</div>
                <div className="muted">Cloud Delivery</div>
              </div>
            </div>

            <div className="note">
              <div className="noteTitle">What I’m best at</div>
              <ul className="bullets">
                <li>Designing REST APIs & microservices</li>
                <li>Improving performance (queries, caching, refactoring)</li>
                <li>CI/CD + observability (Jenkins, Grafana, Elasticsearch)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section
          id="about"
          title="About"
          subtitle="A short snapshot recruiters actually care about."
        >
          <div className="twoCol">
            <div>
              <p>
                I’m a Java Full Stack Developer with 7+ years of experience designing and delivering scalable web and mobile
                applications using Java, Spring Boot, Hibernate/JPA, and React/React Native. I focus on building clean APIs,
                reliable services, and fast UIs — and I enjoy improving performance and maintainability.
              </p>
              <p className="muted">
                Recently, I’ve worked on broadband/network management and automation platforms, dashboards, and real-time metrics
                visualization for faster troubleshooting and better operations.
              </p>
            </div>
            <div className="callout">
              <div className="calloutTitle">Quick strengths</div>
              <div className="calloutBadges">
                <Badge>API Design</Badge>
                <Badge>Microservices</Badge>
                <Badge>SQL + ORM Optimization</Badge>
                <Badge>CI/CD</Badge>
                <Badge>Monitoring & Dashboards</Badge>
              </div>
            </div>
          </div>
        </Section>

        {/* SKILLS */}
        <Section
          id="skills"
          title="Skills"
          subtitle="Core technologies I use to ship production systems."
        >
          <div className="badgeGrid">
            {SKILLS.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section
          id="projects"
          title="Projects"
          subtitle="3 recruiter-friendly projects you can attach GitHub/demo links to."
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
          title="Experience"
          subtitle="Impact-focused bullets (good for recruiters)."
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

        {/* CONTACT */}
        <Section
          id="contact"
          title="Contact"
          subtitle="Make it easy for recruiters."
        >
          <div className="contactGrid">
            <div className="contactCard">
              <div className="muted small">Email</div>
              <a className="contactValue" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
            </div>
            <div className="contactCard">
              <div className="muted small">Phone</div>
              <a className="contactValue" href={`tel:${LINKS.phone}`}>{LINKS.phone}</a>
            </div>
            <div className="contactCard">
              <div className="muted small">LinkedIn</div>
              <a className="contactValue" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                Open profile
              </a>
            </div>
            <div className="contactCard">
              <div className="muted small">Resume</div>
              <a className="contactValue" href={LINKS.resumeUrl} target="_blank" rel="noreferrer">View PDF</a>
            </div>
          </div>
        </Section>

        <footer className="footer">
          <span className="muted small">© {new Date().getFullYear()} Venkat Ramana</span>
        </footer>
      </main>
    </div>
  );
}