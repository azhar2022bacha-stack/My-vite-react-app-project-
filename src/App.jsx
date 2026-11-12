import "./App.css";

const projects = [
  {
    number: "01",
    name: "Studio Folio",
    type: "Personal project · Web design",
    description:
      "A quiet, editorial home for a creative studio, designed to let the work do the talking.",
    className: "project-art--folio",
    preview: (
      <div className="folio-preview">
        <div className="folio-top"><span>FORM / FIELD</span><span>MENU&nbsp; +</span></div>
        <div className="folio-title">Make room<br />for <i>good ideas.</i></div>
        <div className="folio-shape" />
        <span className="folio-caption">INDEPENDENT CREATIVE STUDIO · EST. 2024</span>
      </div>
    ),
  },
  {
    number: "02",
    name: "Everyday Finance",
    type: "Concept project · Dashboard",
    description:
      "A friendly finance dashboard concept that makes everyday money feel a little simpler.",
    className: "project-art--finance",
    preview: (
      <div className="finance-preview">
        <div className="finance-top"><span className="finance-mark">day<span>.</span></span><span className="finance-avatar">A</span></div>
        <span className="finance-eyebrow">TOTAL BALANCE</span>
        <div className="finance-total">$12,480<span>.50</span></div>
        <div className="finance-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="finance-bottom"><span>Income <b>$4,200</b></span><span>Spent <b>$1,860</b></span></div>
      </div>
    ),
  },
  {
    number: "03",
    name: "Plant Notes",
    type: "Personal project · Mobile concept",
    description:
      "A small companion for plant lovers to keep care notes and help every little thing thrive.",
    className: "project-art--plant",
    preview: (
      <div className="plant-preview">
        <div className="plant-nav"><span>little leaf</span><span>✳</span></div>
        <div className="plant-copy">A little<br />care goes<br /><i>a long way.</i></div>
        <div className="plant-pot"><div className="plant-leaf leaf-one" /><div className="plant-leaf leaf-two" /><div className="plant-leaf leaf-three" /><div className="pot" /></div>
        <span className="plant-note">YOUR GROWING JOURNAL</span>
      </div>
    ),
  },
];

const skills = ["React", "JavaScript", "HTML & CSS", "Responsive design", "Figma", "Git"];

function ArrowUpRight({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Azhar Uddin Khan, home">
          azhar<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">Let's talk <ArrowUpRight /></a>
        </nav>
      </header>

      <main>
        <section className="hero page-width" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</p>
            <h1>Building for<br />the <span>curious.</span></h1>
            <p className="hero-intro">
              Hey, I’m Azhar — a frontend developer who loves turning thoughtful ideas into clear, useful experiences on the web.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowUpRight /></a>
              <a className="text-link" href="#about">A little about me <span>↓</span></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration of a browser window and colorful shapes" role="img">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="sun-shape" />
            <div className="hero-window">
              <div className="window-bar"><span /><span /><span /><i>azhar.design</i></div>
              <div className="window-body">
                <span className="window-label">A LITTLE BIT OF</span>
                <span className="window-heading">good<br /><em>energy.</em></span>
                <div className="window-blob" />
                <span className="window-foot">DESIGNED WITH INTENTION ↗</span>
              </div>
            </div>
            <div className="art-sticker">✳</div>
            <div className="art-note">ideas<br />into pixels</div>
          </div>
          <a className="scroll-cue" href="#work"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow">A FEW THINGS I’VE MADE</p>
                <h2>Selected work<span>.</span></h2>
              </div>
              <p className="section-aside">A mix of interface explorations<br />and ideas brought to life.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className={`project-art ${project.className}`}>{project.preview}</div>
                  <div className="project-meta">
                    <div className="project-title"><span>{project.number}</span><h3>{project.name}</h3></div>
                    <span className="project-type">{project.type}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="page-width about-grid">
            <div className="about-heading">
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <h2>Good work<br />starts with<br /><span>curiosity.</span></h2>
              <div className="about-spark">✳</div>
            </div>
            <div className="about-copy">
              <p className="about-lead">I care about the details — the smooth interactions, the thoughtful spacing, the moment a page just feels right.</p>
              <p>I’m a frontend developer focused on building approachable, responsive web experiences. I enjoy working across design and code, learning as I go, and making the internet feel a little more human.</p>
              <div className="skills-wrap">
                <p className="eyebrow">THINGS I WORK WITH</p>
                <div className="skill-list">{skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="page-width contact-inner">
            <p className="eyebrow"><span className="status-dot" /> HAVE A GOOD ONE IN MIND?</p>
            <h2>Let’s make<br /><span>something matter.</span></h2>
            <p className="contact-copy">Have a project, an opportunity, or just want to say hello? My inbox is open.</p>
            <a className="button button-light" href="mailto:hello@example.com">Get in touch <ArrowUpRight /></a>
            <div className="contact-decoration" aria-hidden="true">✳</div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="wordmark" href="#home">azhar<span>.</span></a>
        <p>Designed & built with care <span>© 2026</span></p>
        <a className="back-top" href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
