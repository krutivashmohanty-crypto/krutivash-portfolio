import SectionHeading from "./SectionHeading";

const skills = [
  { name: "Python", level: "Advanced", icon: "PY" },
  { name: "React", level: "Intermediate", icon: "RE" },
  { name: "JavaScript", level: "Intermediate", icon: "JS" },
  { name: "HTML5", level: "Advanced", icon: "HT" },
  { name: "CSS3", level: "Advanced", icon: "CS" },
  { name: "MySQL", level: "Intermediate", icon: "DB" },
  { name: "Git & GitHub", level: "Intermediate", icon: "GH" },
  { name: "DSA", level: "Core", icon: "DS" },
  { name: "OOP", level: "Core", icon: "OO" },
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <SectionHeading
          number="02"
          eyebrow="MY TOOLKIT"
          title="Skills &"
          accent="Technologies"
        />

        <div className="skills-intro">
          <p>
            Technologies and concepts I use to build, understand, and improve
            software applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>

              <div className="skill-info">
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
              </div>

              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;