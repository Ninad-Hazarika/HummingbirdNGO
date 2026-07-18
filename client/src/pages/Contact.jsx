import { useEffect, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [scrollAmount, setScrollAmount] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    subject: "General enquiry",
    message: "",
  });

  useEffect(() => {
    const updateScroll = () => {
      const animationLength = window.innerHeight * 0.65;
      const progress = window.scrollY / animationLength;

      setScrollAmount(Math.min(Math.max(progress, 0), 1));
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form data:", formData);
  };

  const heroStyles = {
    opacity: 1 - scrollAmount,
    transform: `translateY(${-scrollAmount * 90}px) scale(${
      1 - scrollAmount * 0.05
    })`,
  };

  const formStyles = {
    opacity: 0.25 + scrollAmount * 0.75,
    transform: `translateY(${60 - scrollAmount * 60}px)`,
  };

  return (
    <main className="contact-page">
      <section className="contact-intro">
        <div className="contact-shape contact-shape-left" />
        <div className="contact-shape contact-shape-right" />

        <div className="contact-heading" style={heroStyles}>
          <p className="contact-label">Contact us</p>

          <h1>
            Let&apos;s start
            <span> a conversation.</span>
          </h1>

          <p className="contact-description">
            Have a question, an idea, or want to get involved? Send us a
            message and we&apos;ll get back to you.
          </p>
        </div>

        <div
          className="scroll-hint"
          style={{ opacity: 1 - scrollAmount * 2 }}
        >
          <span>Scroll to continue</span>
          <div className="scroll-line" />
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-wrapper" style={formStyles}>
          <div className="form-heading">
            <div>
              <p className="form-label">Send a message</p>
              <h2>Write to us</h2>
            </div>

            <p className="required-text">
              Fields marked with <span>*</span> are required.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">
                  Full name <span>*</span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">
                  Email address <span>*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="organisation">
                Organisation or college
                <small>Optional</small>
              </label>

              <input
                id="organisation"
                name="organisation"
                type="text"
                placeholder="Where are you writing from?"
                value={formData.organisation}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="subject">
                Subject <span>*</span>
              </label>

              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="General enquiry">General enquiry</option>
                <option value="Volunteering">Volunteering</option>
                <option value="Partnership">Partnership</option>
                <option value="Donation">Donation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message">
                Message <span>*</span>
              </label>

              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Tell us what you would like to discuss."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-bottom">
              <button type="submit" className="send-button">
                Send message
                <span aria-hidden="true">↗</span>
              </button>

              <p>We usually reply within 2–3 working days.</p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;