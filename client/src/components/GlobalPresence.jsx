import "./GlobalPresence.css";

function GlobalPresence() {
  return (
    <section className="global-presence-section">
      <div className="container">
        <h2 className="global-presence-title">Global Presence</h2>

        <div className="gp-grid">
          <div className="gp-card gp-card-white">
            <div>
              <h3 className="gp-card-title">Meet The Guardians</h3>
              <p className="gp-card-desc">
                A global team of experts, dreamers, and doers working 24/7 across 12
                time zones.
              </p>
            </div>
            <div className="avatars-group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt="Guardian"
                className="avatar-img"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                alt="Guardian"
                className="avatar-img"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                alt="Guardian"
                className="avatar-img"
              />
              <span className="avatar-count">+48</span>
            </div>
          </div>

          <div className="gp-card gp-card-darknavy">
            <span className="event-badge">📅 Upcoming Event</span>
            <div>
              <p className="event-date">Nov 04, 2026</p>
              <h3 className="event-title">Gala of Light</h3>
              <p className="event-loc">Annual Fundraiser in New York</p>
            </div>
          </div>

          <div className="gp-card gp-card-map">
            <div className="map-tag">
              <span>📍 Live Operations:</span>
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          <div className="gp-card gp-card-cta">
            <div className="cta-text-side">
              <h3>Ready to take flight?</h3>
              <p>
                Join our volunteer portal and start making a difference today.
              </p>
            </div>
            <div className="cta-btn-icon">👤</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalPresence;
