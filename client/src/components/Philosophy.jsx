import "./Philosophy.css";

function Philosophy() {
  return (
    <section className="philosophy-section">
      <div className="container philosophy-grid">
        <div className="philosophy-visuals">
          <div className="vis-card vis-card-team">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              alt="NGO Team Volunteers"
            />
          </div>
          <div className="vis-card vis-card-dark">
            <span className="heart-icon">♡</span>
            <span className="impact-num">4.8M+ Lives Impacted</span>
          </div>
          <div className="vis-card vis-card-blue">
            <span className="efficiency-num">98%</span>
            <span className="efficiency-label">Efficiency Rate</span>
          </div>
          <div className="vis-card vis-card-solar">
            <img
              src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80"
              alt="Field solar deployment"
            />
          </div>
        </div>

        <div className="philosophy-content">
          <h2 className="philosophy-title">
            Driven by <span className="highlight-blue">Velocity</span> and Compassion
          </h2>
          <p className="philosophy-desc">
            Our philosophy, "Wings That Never Rest", isn't just a tagline—it's an
            operational mandate. We believe that agility is the most critical factor in
            humanitarian work. While others debate, we deploy.
          </p>

          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon-badge">⚡</div>
              <div className="feature-text">
                <h4>Rapid Response</h4>
                <p>Deploying resources within 34 hours of a crisis declaration.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-badge">🔗</div>
              <div className="feature-text">
                <h4>Total Transparency</h4>
                <p>Blockchain-verified donation tracking for every single cent.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
