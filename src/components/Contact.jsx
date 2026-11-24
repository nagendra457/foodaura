

import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [messageDetails, setMessageDetails] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    setMessageDetails({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
    });

    setSubmitted(true);
    e.target.reset();
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <span className="section-tag">GET IN TOUCH</span>
        <h2>
          Contact Food<span className="hii">Aura.</span>
        </h2>
        <p>We would love to hear from you.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Talk</h3>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h4>Our Location</h4>
              <p>
                Food<span className="hii">Aura.</span> Restaurant,
                Nandyal, Andhra Pradesh
              </p>
            </div>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <div>
              <h4>Phone Number</h4>
              <p>+91 123456789</p>
            </div>
          </div>

          <div className="contact-item">
            <span>✉️</span>
            <div>
              <h4>Email Address</h4>
              <p>hello@foodora.com</p>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="contact-success">
            <div className="contact-success-icon">✓</div>

            <h2>Message Sent Successfully!</h2>

            <p>
              Thank you, {messageDetails.name}!
              Your message has been received.
              We appreciate you contacting Foodora.
            </p>

            <button
              className="contact-button"
              onClick={() => {
                setSubmitted(false);
                setMessageDetails(null);
              }}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
              />
            </div>

            <button type="submit" className="contact-button">
              Send Message →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
