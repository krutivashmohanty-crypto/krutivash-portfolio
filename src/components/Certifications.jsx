import SectionHeading from "./SectionHeading";

const credentials = [
  {
  number: "01",
  type: "CERTIFICATION",
  title: "Python Full Stack Development",
  detail: "Python, Django, React, HTML, CSS, JavaScript & MySQL",
},
  {
    number: "02",
    type: "CERTIFICATION",
    title: "TCS iON Career Edge",
    detail: "Young Professional",
  },
  {
    number: "03",
    type: "CERTIFICATION",
    title: "Python Development Internship",
    detail: "Talent Shine",
  },
  {
    number: "04",
    type: "ACHIEVEMENT",
    title: "Technical Webinars",
    detail: "Web Development & Artificial Intelligence",
  },
  {
    number: "05",
    type: "ACHIEVEMENT",
    title: "Hackathon Participation",
    detail: "Technology & Problem Solving",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="section-container">
        <SectionHeading
          number="06"
          eyebrow="CREDENTIALS"
          title="Certifications &"
          accent="Achievements"
        />

        <div className="credentials-grid">
          {credentials.map((item) => (
            <div className="credential-card" key={item.number}>
              <div className="credential-icon">{item.number}</div>

              <div>
                <p>{item.type}</p>
                <h3>{item.title}</h3>
                <span>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;