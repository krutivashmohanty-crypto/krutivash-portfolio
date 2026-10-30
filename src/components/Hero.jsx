function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot"></span>
            Open to opportunities
          </div>

          <p className="hero-intro">Hello, I'm</p>

          <h1>
            Krutivash
            <span>Mohanty</span>
          </h1>

          <div className="hero-role">
            <span className="role-line"></span>
            Software Developer
          </div>

          <p className="hero-description">
            Computer Science and Engineering graduate passionate about
            building modern web applications, solving problems with
            technology, and continuously improving as a developer.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work
              <span>↗</span>
            </a>

            <a
              href="/resume.pdf"
              className="secondary-button"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
              <span>↓</span>
            </a>
          </div>

          <div className="social-links">
            <a
              href="mailto:krutivashmohanty@gmail.com"
              className="social-button"
              aria-label="Email"
            >
              @
            </a>

            <a
              href="https://www.linkedin.com/in/krutivash-mohanty-751b5a355/"
              className="social-button"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="https://github.com/krutivashmohanty-crypto"
              className="social-button"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-decoration decoration-one"></div>
          <div className="image-decoration decoration-two"></div>

          <div className="hero-image-card">
            <div className="image-top-label">
              <span>01</span>
              DEVELOPER
            </div>

            <img
              src="/profile.jpg"
              alt="Krutivash Mohanty"
              className="profile-image"
            />

            <div className="image-bottom-label">
              <span>Python</span>
              <span>React</span>
              <span>Web</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span></span>
        Scroll to explore
      </div>
    </section>
  );
}

export default Hero;
