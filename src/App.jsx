import { useState } from "react";
import "./App.css";
import saloni from './assets/saloni.png';

const skills = [
  {
    name: "HTML5",
    symbol: "5",
    className: "html",
    description: "Building the structure of web pages.",
  },
  {
    name: "CSS3",
    symbol: "3",
    className: "css",
    description: "Creating beautiful and responsive layouts.",
  },
  {
    name: "JavaScript",
    symbol: "JS",
    className: "js",
    description: "Adding logic and interactivity to websites.",
  },
  {
    name: "React.js",
    symbol: "⚛",
    className: "react",
    description: "Building reusable, component-based interfaces.",
  },
];

const qualities = [
  "Curious learner",
  "Hardworking",
  "Consistent",
  "Creative thinker",
  "Always ready to learn",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          SALONI<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#goal" onClick={closeMenu}>Goal</a>
        </nav>

        <a
          href="mailto:your-email@example.com"
          className="nav-contact"
        >
          Let's Connect <span>↗</span>
        </a>
      </header>

      <main>
        {/* Hero section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">HELLO, WORLD! I'M</p>

            <h1 className="saloni">Saloni<span>.</span></h1>

            <p className="hero-tagline">
              A CURIOUS LEARNER &amp;
              <br />
              FUTURE FULL-STACK DEVELOPER
            </p>

            <p className="hero-description">
              I'm a second-year BTech Computer Science student at
              IET Agra, passionate about web development, building
              projects, and learning new technologies.
            </p>

            <a href="#about" className="primary-button">
              Discover My Story <span>↓</span>
            </a>

            <div className="hero-note">
              <span className="note-line"></span>
              Learning by doing, growing every day.
            </div>
          </div>

          {/* Personal photo */}
          <div className="hero-visual">
            <div className="photo-backdrop"></div>

            <div className="photo-frame">
             <img
               src={saloni.png}
               alt="Saloni"
               loading="eager"
               decoding="async"
               onError={(event) => {
               event.currentTarget.style.display = "none";
               event.currentTarget.nextElementSibling.style.display = "grid";
               }}
             />

              <div className="photo-placeholder">
                <span className="photo-placeholder-icon">✳</span>
                <h3>Your photo goes here</h3>
                <p>Add your picture to public/saloni.jpg</p>
              </div>
            </div>

            <div className="photo-caption">
              <span className="caption-dot"></span>
              LEARNING · BUILDING · GROWING
            </div>

            <div className="floating-note">
              Build.
              <br />
              Learn.
              <br />
              Grow. ♡
            </div>
          </div>
        </section>

        {/* 01 — Who I Am */}
        <section className="section about-section" id="about">
          <div className="section-heading">
            <span className="section-number">01</span>

            <div>
              <p className="section-kicker">A LITTLE ABOUT ME</p>
              <h2>Who I Am</h2>
              <span className="heading-underline"></span>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                Hey, I'm Saloni! I'm a second-year BTech student
                in Computer Science and Engineering at IET Agra.
                I'm curious about how technology works and love
                turning ideas into something real.
              </p>

              <p>
                Web development is where I'm exploring my
                creativity and technical skills. I enjoy learning
                by building projects, solving coding problems,
                and experimenting with new ideas.
              </p>

              <p>
                I'm still learning, and that's the part I enjoy.
                Every challenge teaches me something new, and
                every mistake gives me another chance to improve.
              </p>
            </div>

            <div className="qualities-card">
              <div className="qualities-top">
                <span>WHAT MAKES ME, ME</span>
                <span className="qualities-star">✳</span>
              </div>

              {qualities.map((quality, index) => (
                <div className="quality-item" key={quality}>
                  <span className="quality-number">
                    0{index + 1}
                  </span>

                  <span>{quality}</span>

                  <span className="quality-arrow">↗</span>
                </div>
              ))}

              <p className="qualities-footer">
                Small steps. Real progress.
              </p>
            </div>
          </div>
        </section>

        {/* 02 — My Skills */}
        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <span className="section-number">02</span>

            <div>
              <p className="section-kicker">MY CURRENT TOOLKIT</p>
              <h2>My Skills</h2>
              <span className="heading-underline"></span>
            </div>
          </div>

          <div className="skills-intro">
            <p>
              I'm currently focusing on frontend development
              and strengthening my foundations through projects.
              These are the technologies I'm learning and working with.
            </p>

            <span className="learning-status">
              <span className="status-dot"></span>
              ALWAYS LEARNING
            </span>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article className="skill-card" key={skill.name}>
                <div className={`skill-icon ${skill.className}`}>
                  {skill.symbol}
                </div>

                <span className="skill-index">
                  TECHNOLOGY 0{index + 1}
                </span>

                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>

          <div className="skills-bottom">
            <span>HTML</span>
            <span className="bottom-dot">✳</span>
            <span>CSS</span>
            <span className="bottom-dot">✳</span>
            <span>JAVASCRIPT</span>
            <span className="bottom-dot">✳</span>
            <span>REACT</span>
          </div>
        </section>

        {/* 03 — My Future Goal */}
        <section className="section goal-section" id="goal">
          <div className="goal-content">
            <div className="section-heading">
              <span className="section-number">03</span>

              <div>
                <p className="section-kicker">WHERE I'M HEADED</p>
                <h2>My Future Goal</h2>
                <span className="heading-underline"></span>
              </div>
            </div>

            <div className="goal-copy">
              <p>
                My long-term goal is to become a skilled full-stack
                developer. I want to understand both frontend and
                backend development so I can turn ideas into complete,
                useful web applications.
              </p>

              <p>
                For now, I'm concentrating on improving my frontend
                skills, building practical projects, and developing
                a stronger programming foundation. Step by step,
                I want to explore backend technologies and databases too.
              </p>

              <p>
                I don't expect to know everything overnight. I want
                to keep learning, stay consistent, and create digital
                experiences that are modern, accessible, and genuinely
                helpful to people.
              </p>
            </div>

            <div className="goal-signature">
              <span className="signature-line"></span>
              <span>My journey, my pace, my progress.</span>
              <span className="signature-heart">♡</span>
            </div>
          </div>

          <div className="goal-visual">
            <div className="goal-circle circle-one"></div>
            <div className="goal-circle circle-two"></div>

            <div className="goal-quote">
              <span className="quote-mark">“</span>

              <p>
                The goal isn't to be perfect.
                <br />
                It's to be better than yesterday.
              </p>

              <span className="quote-star">✳</span>
            </div>

            <span className="goal-side-label">
              DREAM · LEARN · CREATE
            </span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="logo footer-logo">
          SALONI<span>.</span>
        </a>

        <p>Made with curiosity, creativity &amp; a little bit of code.</p>

        <a href="#home" className="back-to-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </div>
  );
}

export default App;