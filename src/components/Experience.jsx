import SectionHeading from "./SectionHeading";

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">
        <SectionHeading
          number="03"
          eyebrow="MY EXPERIENCE"
          title="Internship"
          accent="Experience"
        />

        <div className="experience-card">
          <div className="experience-date">
            <span>05</span>
            <small>2024</small>
            <i></i>
            <span>07</span>
            <small>2024</small>
          </div>

          <div className="experience-content">
            <div className="experience-header">
              <div>
                <p className="company-label">TALENT SHINE • APSCHE</p>
                <h3>Python Development Intern</h3>
                <p className="location">Visakhapatnam</p>
              </div>

              <div className="experience-badge">Internship</div>
            </div>

            <p>
              Developed Python programs using data types, loops, functions,
              and Object-Oriented Programming concepts. Worked with file
              handling operations for data storage and retrieval.
            </p>

            <p>
              Built mini-projects to strengthen problem-solving and debugging
              skills while following clean coding and modular programming
              practices.
            </p>

            <div className="experience-tags">
              <span>Python</span>
              <span>OOP</span>
              <span>File Handling</span>
              <span>Debugging</span>
              <span>Clean Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;