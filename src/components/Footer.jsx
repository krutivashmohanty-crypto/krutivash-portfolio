function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <a href="#home" className="logo">
            K<span>.</span>M
          </a>

          <p>Software Developer • Python • React • Web</p>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Krutivash Mohanty. All rights reserved.
        </p>

        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;