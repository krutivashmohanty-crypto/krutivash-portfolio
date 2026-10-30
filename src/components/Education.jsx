import SectionHeading from "./SectionHeading";

const education = [
  {
    year: "2022 — 2026",
    title: "Bachelor of Engineering and Technology",
    place:
      "Sri Venkateswara College of Engineering and Technology, Srikakulam",
    result: "CGPA: 7.53",
  },
  {
    year: "2020 — 2022",
    title: "Higher Secondary Education",
    place: "Government Junior Boys College, Ichapuram",
    result: "Percentage: 73%",
  },
  {
    year: "2019 — 2020",
    title: "Secondary School Education",
    place: "Z.P. High School, Koligam",
    result: "Percentage: 100%",
  },
];

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-container">
        <SectionHeading
          number="05"
          eyebrow="MY JOURNEY"
          title="Education"
          accent="Timeline"
        />

        <div className="education-timeline">
          {education.map((item, index) => (
            <div className="education-item" key={item.year}>
              <div className="timeline-marker">
                <span>{index + 1}</span>
              </div>

              <div className="education-content">
                <p className="education-year">{item.year}</p>
                <h3>{item.title}</h3>
                <p>{item.place}</p>
                <strong>{item.result}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;