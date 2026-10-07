import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Smooth scroll handler for navigation
  const scrollToSection = (id) => {
    setMobileNavOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Vibrant Palette (Warm Coral & Amber theme)
  const colors = {
    vibrantPrimary: '#ffb300', // Deep coral orange
    vibrantHover: '#FFD6C9',
    vibrantAccent: '#ffb300',
    vibrantSecondary: '#ffb300', // Amber highlight
    bgWarmLight: '#EEF7FF', // Light coral wash background
    bgAmberLight: '#FFF1F4', // Light amber wash background
    textMain: '#9B8AFB',
    textMuted: '#9B8AFB',
    border: '#ffe0b2',
    vibrant: '#FFF0B8'
  };

  return (
    <div style={{ ...styles.appContainer, color: colors.textMain }}>
      {/* Dynamic Embedded CSS for Animations & Media Queries */}
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html {
          scroll-behavior: smooth;
        }
        button:focus-visible {
          outline: 2px solid ${colors.vibrantPrimary};
          outline-offset: 2px;
        }
        @media (max-width: 768px) {
          .grid-2 {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .grid-reverse {
            display: flex !important;
            flex-direction: column-reverse !important;
          }
          .nav-links-desktop {
            display: none !important;
          }
          .nav-toggle-btn {
            display: block !important;
          }
          .hero-title {
            font-size: 2.1rem !important;
          }
        }
      `}</style>

      {/* Navigation Bar */}
      <header style={{ ...styles.navbar, borderBottomColor: colors.border }}>
        <div style={styles.navContainer}>
          <a 
            href="#hero" 
            style={{ ...styles.logo, color: colors.textMain }} 
            onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          >
            Saloni<span style={{ color: colors.vibrantPrimary }}></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-links-desktop" style={styles.desktopNav}>
            <button style={{ ...styles.navLink, color: colors.textMuted }} onClick={() => scrollToSection('about')}>Who I Am</button>
            <button style={{ ...styles.navLink, color: colors.textMuted }} onClick={() => scrollToSection('skills')}>My Skills</button>
            <button style={{ ...styles.navLink, color: colors.textMuted }} onClick={() => scrollToSection('goal')}>My Future Goal</button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="nav-toggle-btn"
            style={{ ...styles.mobileNavToggle, color: colors.textMain }} 
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileNavOpen && (
          <div style={{ ...styles.mobileNavDropdown, borderBottomColor: colors.border }}>
            <button style={{ ...styles.mobileNavLink, color: colors.textMain }} onClick={() => scrollToSection('about')}>Who I Am</button>
            <button style={{ ...styles.mobileNavLink, color: colors.textMain }} onClick={() => scrollToSection('skills')}>My Skills</button>
            <button style={{ ...styles.mobileNavLink, color: colors.textMain }} onClick={() => scrollToSection('goal')}>My Future Goal</button>
          </div>
        )}
      </header>

      {/* Hero Header */}
      <section id="hero" style={styles.heroSection}>
        <div style={{ ...styles.heroBadge, backgroundColor: colors.bgAmberLight, color: colors.vibrantAccent, borderColor: colors.vibrantSecondary }}>
          2nd Year CSE Student
        </div>
        <h1 className="hero-title" style={styles.heroTitle}>
          Hi, I'm <span style={{ color: colors.vibrantPrimary }}>Saloni</span>
        </h1>
        <p style={{ ...styles.heroSubtitle, color: colors.textMuted }}>
          A curious, hardworking, and consistent student developer learning web technologies and building modern applications through hands-on practice.
        </p>
        <div style={styles.heroBtnGroup}>
          <button style={{ ...styles.primaryBtn, backgroundColor: colors.vibrantPrimary }} onClick={() => scrollToSection('about')}>
            Learn About Me
          </button>
          <button style={{ ...styles.secondaryBtn, borderColor: colors.vibrantPrimary, color: colors.vibrantPrimary }} onClick={() => scrollToSection('skills')}>
            View My Skills
          </button>
        </div>
      </section>

      {/* Section 1: Who I Am */}
      <section id="about" style={{ ...styles.section, backgroundColor: colors.bgWarmLight }}>
        <div className="grid-2" style={styles.grid2}>
          <div style={styles.imageContainer}>
          <img 
              src="who-i-am.jpeg" 
              alt="Saloni - Who I Am" 
              style={{ ...styles.sectionImage, borderColor: colors.border }} 
            />
          </div>
          <div style={styles.textContent}>
            <h2 style={{ ...styles.sectionHeading, color: colors.textMain }}>01. Who I Am</h2>
            <p style={{ ...styles.leadParagraph, color: colors.textMain }}>
              I am a second-year BTech student pursuing <strong>Computer Science and Engineering</strong> at <strong>IET Agra</strong>.
            </p>
            <p style={{ ...styles.bodyParagraph, color: colors.textMuted }}>
              I believe in learning by doing. Rather than focusing solely on theoretical concepts, I thrive on building practical web projects, solving coding problems, and gaining real hands-on experience. I am creative, disciplined, and willing to learn from my mistakes to continuously grow as a developer.
            </p>
            <div style={styles.tagContainer}>
              <span style={{ ...styles.tag, backgroundColor: '#fff', borderColor: colors.border, color: colors.vibrantAccent }}>Curious Learner</span>
              <span style={{ ...styles.tag, backgroundColor: '#fff', borderColor: colors.border, color: colors.vibrantAccent }}>Hardworking</span>
              <span style={{ ...styles.tag, backgroundColor: '#fff', borderColor: colors.border, color: colors.vibrantAccent }}>Consistent</span>
              <span style={{ ...styles.tag, backgroundColor: '#fff', borderColor: colors.border, color: colors.vibrantAccent }}>Practical Mindset</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: My Skills */}
      <section id="skills" style={{ ...styles.section, backgroundColor: colors.bgAmberLight }}>
        <div className="grid-2 grid-reverse" style={styles.grid2}>
          <div style={styles.textContent}>
            <h2 style={{ ...styles.sectionHeading, color: colors.textMain }}>02. My Skills</h2>
            <p style={{ ...styles.leadParagraph, color: colors.textMain }}>
              I am actively building a solid foundation in core web development technologies.
            </p>

            <div style={styles.skillsList}>
               <div style={{ ...styles.skillCard, ...styles.learningSkillCard, borderColor: colors.vibrantPrimary, backgroundColor: '#fff' }}>
                <div style={styles.skillCardHeader}>
                  <span style={{ ...styles.skillTitle, color: colors.textMain }}>HTML5</span>
                  <span style={styles.coreBadge}>Core</span>
                </div>
                <p style={{ ...styles.skillDesc, color: colors.textMuted }}>Structuring clear, accessible, and semantic web content.</p>
              </div>

               <div style={{ ...styles.skillCard, ...styles.learningSkillCard, borderColor: colors.vibrantPrimary, backgroundColor: '#fff' }}>
                <div style={styles.skillCardHeader}>
                  <span style={{ ...styles.skillTitle, color: colors.textMain }}>CSS3</span>
                  <span style={styles.coreBadge}>Core</span>
                </div>
                <p style={{ ...styles.skillDesc, color: colors.textMuted }}>Designing responsive layouts using modern styling, Flexbox, and CSS Grid.</p>
              </div>

               <div style={{ ...styles.skillCard, ...styles.learningSkillCard, borderColor: colors.vibrantPrimary, backgroundColor: '#fff' }}>
                <div style={styles.skillCardHeader}>
                  <span style={{ ...styles.skillTitle, color: colors.textMain }}>JavaScript</span>
                  <span style={styles.coreBadge}>Core</span>
                </div>
                <p style={{ ...styles.skillDesc, color: colors.textMuted }}>Adding dynamic interactivity, user logic, and functionality to web pages.</p>
              </div>

              <div style={{ ...styles.skillCard, ...styles.learningSkillCard, borderColor: colors.vibrantPrimary, backgroundColor: '#fff' }}>
                <div style={styles.skillCardHeader}>
                  <span style={{ ...styles.skillTitle, color: colors.textMain }}>React.js</span>
                  <span style={styles.coreBadge}>Core</span>
                </div>
                <p style={{ ...styles.skillDesc, color: colors.textMuted }}>Building interactive, component-based user interfaces and single-page apps.</p>
              </div>
            </div>
          </div>

          <div style={styles.imageContainer}>
            <img 
              src="my-skill.jpeg" 
              alt="Saloni - My Skills Progress" 
              style={{ ...styles.sectionImage, borderColor: colors.vibrantPrimary }} 
            />
          </div>
        </div>
      </section>

      {/* Section 3: My Future Goal */}
       <section id="goal" style={{ ...styles.section, background: '#F5F0FF' }}>
        <div className="grid-2" style={styles.grid2}>
          <div style={styles.imageContainer}>
           <img src="future-goal.jpeg"
            alt="Saloni - My Future Goal" 
            style={{ ...styles.sectionImage, borderColor: colors.border }} 
           />
          </div>
          <div style={styles.textContent}>
            <h2 style={{ ...styles.sectionHeading, color: colors.primary }}>03. My Future Goal</h2>
            <p style={{ ...styles.leadParagraph, color: colors.textDark }}>
              My long-term aspiration is to become a skilled <strong>Full-Stack Developer</strong>.
            </p>
            <p style={{ ...styles.bodyParagraph, color: colors.textMuted }}>
              As I progress through my Computer Science degree, my goal is to systematically expand my skill set from dynamic frontend design to back-end technologies, databases, and server logic. I want to spend my college years building useful, modern, and user-friendly web applications that solve real-world problems.
            </p>

            <div style={styles.roadmapBox}>
              <div style={{ ...styles.roadmapItem, backgroundColor: '#fff', borderColor: colors.border }}>
                <span style={{ ...styles.stepNum, backgroundColor: colors.vibrantPrimary }}>1</span>
                <div style={{ color: colors.textMuted }}>
                  <strong style={{ color: colors.vibrantAccent }}>Frontend Mastery:</strong> Deepen React.js expertise and component architecture.
                </div>
              </div>
              <div style={{ ...styles.roadmapItem, backgroundColor: '#fff', borderColor: colors.border }}>
                <span style={{ ...styles.stepNum, backgroundColor: colors.vibrantPrimary }}>2</span>
                <div style={{ color: colors.textMuted }}>
                  <strong style={{ color: colors.vibrantAccent }}>Backend Fundamentals:</strong> Learn server-side logic, API design, and databases.
                </div>
              </div>
              <div style={{ ...styles.roadmapItem, backgroundColor: '#fff', borderColor: colors.border }}>
                <span style={{ ...styles.stepNum, backgroundColor: colors.vibrantPrimary }}>3</span>
                <div style={{ color: colors.textMuted }}>
                  <strong style={{ color: colors.vibrantAccent }}>Full-Stack Applications:</strong> Build and deploy complete web applications.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ ...styles.footer, borderTopColor: colors.border }}>
        <div style={styles.footerContent}>
          <p style={{ ...styles.footerText, color: colors.textMuted }}>&copy; 2026 Saloni. Second-Year CSE Student at IET Agra.</p>
        </div>
      </footer>
    </div>
  );
}

// Inline Styles Object
const styles = {
  appContainer: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
    lineHeight: 1.6,
  },
  navbar: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#ffb300',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid',
    zIndex: 1000,
    padding: '1rem 0',
  },
  navContainer: {
    maxWidth: '1120px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.25rem',
    fontWeight: '700',
    textDecoration: 'none',
  },
  desktopNav: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    background: 'none',
    border: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  mobileNavToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  mobileNavDropdown: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem 1.5rem',
    backgroundColor: '#9B8AFB',
    borderBottom: '1px solid',
  },
  mobileNavLink: {
    background: 'none',
    border: 'none',
    textAlign: 'left',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
  },
  heroSection: {
    padding: '5rem 1.5rem 4rem 1.5rem',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroBadge: {
    display: 'inline-block',
    fontSize: '0.85rem',
    fontWeight: '600',
    padding: '0.35rem 1rem',
    borderRadius: '50px',
    marginBottom: '1.25rem',
    border: '1px solid',
  },
  heroTitle: {
    fontSize: '2.75rem',
    fontWeight: '800',
    lineHeight: 1.2,
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
  },
  heroSubtitle: {
    fontSize: '1.125rem',
    marginBottom: '2rem',
  },
  heroBtnGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    color: '#9B8AFB',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    border: '2px solid',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  section: {
    padding: '4.5rem 0',
  },
  grid2: {
    maxWidth: '1120px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    alignItems: 'center',
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  sectionHeading: {
    fontSize: '1.75rem',
    fontWeight: '700',
    marginBottom: '1rem',
  },
  leadParagraph: {
    fontSize: '1.1rem',
    fontWeight: '500',
    marginBottom: '0.75rem',
  },
  bodyParagraph: {
    marginBottom: '1.25rem',
  },
  imageContainer: {
    width: '100%',
  },
  sectionImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    border: '1px solid',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '0.5rem',
  },
  tag: {
    border: '1px solid',
    fontSize: '0.85rem',
    fontWeight: '500',
    padding: '0.35rem 0.75rem',
    borderRadius: '6px',
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
    marginTop: '1rem',
  },
  skillCard: {
    border: '1px solid',
    padding: '1rem 1.25rem',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
  },
  learningSkillCard: {
    borderWidth: '2px',
  },
  skillCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.25rem',
  },
  skillTitle: {
    fontWeight: '600',
    fontSize: '1rem',
  },
  skillDesc: {
    fontSize: '0.875rem',
  },
  coreBadge: {
    fontSize: '0.75rem',
    fontWeight: '600',
    backgroundColor: '#ffb300',
    color: '#475569',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
  },
  learningBadge: {
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
  },
  roadmapBox: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  roadmapItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
    border: '1px solid',
    padding: '0.85rem 1rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
  },
  stepNum: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '28px',
    height: '28px',
    color: '#ffffff',
    borderRadius: '50%',
    fontWeight: '700',
    fontSize: '0.85rem',
    flexShrink: 0,
  },
  footer: {
    borderTop: '1px solid',
    backgroundColor: '#ffb300',
    padding: '2.5rem 1.5rem',
    textAlign: 'center',
  },
  footerContent: {
    maxWidth: '1120px',
    margin: '0 auto',
  },
  footerText: {
    fontSize: '0.9rem',
  },
  footerSubText: {
    fontSize: '0.75rem',
    marginTop: '0.25rem',
  },

};            