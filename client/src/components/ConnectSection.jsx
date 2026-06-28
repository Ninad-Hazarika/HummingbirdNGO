import { useState } from "react";
import "./ConnectSection.css";

function ConnectSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="connect-section" id="contact-form">
      <div className="container" style={{ display: "flex", justifyContent: "center" }}>
        <div className="connect-card">
          <h2 className="connect-title">Connect With Us</h2>
          <p className="connect-subtitle">
            Whether you have questions, partnership ideas, or just want to say hi.
          </p>

          {submitted ? (
            <div style={{ padding: "20px", color: "#0284c7", fontWeight: "700" }}>
              ✨ Thank you! Your message has been transmitted successfully.
            </div>
          ) : (
            <form className="connect-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  placeholder="How can we fly together?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                ></textarea>
              </div>

              <div>
                <button type="submit" className="btn-send-message">
                  Send Message ➔
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default ConnectSection;
