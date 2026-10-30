function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <div className="contact-card">
          <div className="contact-content">
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>

            <h2>
              Let's build something
              <span>meaningful.</span>
            </h2>

            <p>
              I’m open to software development and full stack development
              opportunities. Feel free to reach out and connect with me.
            </p>

            <a
              href="mailto:krutivashmohanty@gmail.com"
              className="primary-button"
            >
              Start a Conversation
              <span>↗</span>
            </a>
          </div>

          <div className="contact-details">
            <div className="contact-detail">
              <span>Email</span>
              <a href="mailto:krutivashmohanty@gmail.com">
                krutivashmohanty@gmail.com
              </a>
            </div>

            <div className="contact-detail">
              <span>Phone</span>
              <a href="tel:+918333897436">+91 83338 97436</a>
            </div>

            <div className="contact-detail">
              <span>Location</span>
              <p>Hyderabad, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;