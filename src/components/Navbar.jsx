import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 78;

      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionPosition - navbarHeight,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <button
          className="logo"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
        >
          KM<span>.</span>
        </button>

        {/* Navigation */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("skills")}>
            Skills
          </button>

          <button onClick={() => scrollToSection("experience")}>
            Experience
          </button>

          <button onClick={() => scrollToSection("projects")}>
            Projects
          </button>

          <button onClick={() => scrollToSection("education")}>
            Education
          </button>

          <button onClick={() => scrollToSection("certifications")}>
            Certifications
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>

        </div>

        {/* Resume */}
        <a
          className="nav-resume"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME
        </a>

        {/* Mobile Menu */}
        <button
          className={`menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;