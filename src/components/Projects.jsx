import SectionHeading from "./SectionHeading";

const projects = [
  {
  number: "01",
  title: "E-Commerce Website",
  category: "Web Development",
  description:
    "A responsive e-commerce website that allows users to browse products, search and filter items, view product details, add products to the shopping cart, and manage their shopping experience.",
  technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
},
  {
    number: "02",
    title: "Secure Data Protection System",
    category: "Cybersecurity",
    description:
      "A secure data protection system integrating AES and RSA hybrid encryption with steganography to protect sensitive information and support secure data transmission.",
    technologies: ["Python", "AES", "RSA", "Steganography"],
  },
  {
    number: "03",
    title: "PathMentor AI",
    category: "Artificial Intelligence",
    description:
      "An AI-based career guidance platform designed to analyze user skills and provide personalized career, learning, and job recommendations.",
    technologies: ["Python", "AI", "Web Development"],
  },
  {
    number: "04",
    title: "Personal Portfolio",
    category: "Web Development",
    description:
      "A responsive personal portfolio website designed to showcase technical skills, projects, experience, education, and contact information.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <div className="section-heading project-heading">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>
              Featured <span>Projects</span>
            </h2>
          </div>

          <p className="heading-description">
            A selection of projects representing my interests in development,
            AI, and secure computing.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>

              <div className="project-main">
                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className="project-action">
                <span>Featured</span>
                <div>↗</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;