import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="page-wrapper contact-page">
      <div className="container">
        {/* Hero Header */}
        <div className="contact-hero">
          <div className="contact-badge">
            <span className="pulse-dot"></span> LIVE SUPPORT ACTIVE
          </div>
          <h1 className="contact-page-title">Connect With Us</h1>
          <p className="contact-page-desc">
            We're here to bridge the gap between global intent and local impact. Reach out
            for inquiries, partnerships, or support.
          </p>
        </div>

        {/* Main Grid */}
        <div className="contact-main-grid">
          {/* Inquiry Form Card */}
          <div className="inquiry-card">
            <h2 className="inquiry-title">Send an Inquiry</h2>

            {submitted ? (
              <div style={{ padding: "30px 0", color: "#0284c7", fontWeight: "700", textAlign: "center" }}>
                ✨ Message sent! Our deployment team will respond within 24 hours.
              </div>
            ) : (
              <form className="connect-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="c-fullName">Full Name</label>
                    <input
                      type="text"
                      id="c-fullName"
                      placeholder="Elena Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-email">Email Address</label>
                    <input
                      type="email"
                      id="c-email"
                      placeholder="elena@impact.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="c-subject">Subject of Interest</label>
                  <input
                    type="text"
                    id="c-subject"
                    placeholder="General Inquiry / Partnership"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="c-message">Message</label>
                  <textarea
                    id="c-message"
                    placeholder="How can we help you change the world today?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <div>
                  <button type="submit" className="btn-send-message" style={{ background: "#091e2a" }}>
                    Submit Message ➔
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column */}
          <div className="contact-right-col">
            {/* Global HQs Card */}
            <div className="hq-card">
              <div className="hq-header">
                <span>🌐</span> Global HQs
              </div>

              <div className="hq-group">
                <div className="hq-region">NORTH AMERICA</div>
                <div className="hq-city">New York City, NY</div>
                <div className="hq-address">450 Lexington Ave, Suite 1200<br />NY 10017, USA</div>
              </div>

              <div className="hq-group">
                <div className="hq-region">EUROPE & AFRICA HUB</div>
                <div className="hq-city">Nairobi, Kenya</div>
                <div className="hq-address">Lavington Heights, James Gichuru Rd<br />Nairobi, Kenya</div>
              </div>

              <div className="hq-group">
                <div className="hq-region">ASIA PACIFIC</div>
                <div className="hq-city">Singapore</div>
                <div className="hq-address">Marina One West Tower, 7 Straits View<br />018936, Singapore</div>
              </div>
            </div>

            {/* Volunteer Card */}
            <div className="vol-card">
              <div className="vol-header">
                <span>👥</span> Volunteer
              </div>
              <p className="vol-desc">
                Ready to offer your skills? We're looking for tech specialists, field workers,
                and creative storytellers.
              </p>
              <a href="/team" className="vol-link">
                Visit Volunteer Portal ➔
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Feature Banners */}
        <div className="contact-bottom-grid">
          <div className="feat-banner">
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
              alt="Our Reach"
            />
            <div className="banner-overlay">
              <h3>Our Reach</h3>
              <p>140+ Active Projects Globally</p>
            </div>
          </div>

          <div className="feat-banner">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
              alt="Join The Flight"
            />
            <div className="banner-overlay">
              <h3>Join The Flight</h3>
              <p>Work with us to protect biodiversity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
