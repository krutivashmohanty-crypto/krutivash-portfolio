import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <SectionHeading
          number="01"
          eyebrow="GET TO KNOW ME"
          title="About"
          accent="Me"
        />

        <div className="about-grid">
          <div className="about-main">
            <p className="large-text">
              I’m a Computer Science and Engineering graduate who enjoys
              turning ideas into practical software solutions.
            </p>

            <p>
              My development journey includes Python programming, web
              development, databases, Git, and modern frontend development
              with React. I enjoy learning new technologies and applying them
              through projects.
            </p>

            <p>
              I’m focused on growing as a Software Developer and Full Stack
              Developer while strengthening my programming, problem-solving,
              and communication skills.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <strong>7.53</strong>
              <span>CGPA</span>
            </div>

            <div className="stat-card">
              <strong>3+</strong>
              <span>Projects</span>
            </div>

            <div className="stat-card">
              <strong>9+</strong>
              <span>Core Skills</span>
            </div>

            <div className="stat-card">
              <strong>2026</strong>
              <span>Graduate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;