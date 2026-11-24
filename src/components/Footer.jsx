
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Food<span className="hii">Aura.</span></h2>
          <p>
            Fresh food, wonderful flavours and
            unforgettable dining experiences.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#offers">Offers</a>
        </div>

        <div className="footer-links">
          <h3>Services</h3>
          <a href="#reservation">Reservations</a>
          <a href="#contact">Contact Us</a>
          <a href="#menu">Order Food</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Nandyal, Andhra Pradesh</p>
          <p>+91 98765 43210</p>
          <p>hello@foodora.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Food<span className="hii">Aura.</span> All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
