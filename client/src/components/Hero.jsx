import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-left">
          <div className="hero-pill">
            <span>💧 Global Impact Overview</span>
          </div>

          <h1 className="hero-title">
            Wings That <span className="highlight-italic">Never Rest</span>
          </h1>

          <p className="hero-description">
            In the delicate flutter of a hummingbird's wings lies the strength of a
            thousand movements. We see a global NGO dedicated to rapid,
            transparent, and high-impact interventions where the world needs them
            most.
          </p>

          <div className="hero-cta-group">
            <button className="btn-primary-flight">
              Start a Flight <span className="arrow">➔</span>
            </button>
            <button className="btn-secondary-report">View Report</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <div className="hero-card-image-wrapper">
              <img
                src="/hummingbird-hero.jpg"
                alt="Hummingbird in flight"
                className="hero-card-image"
              />
            </div>
            <div className="hero-card-stats">
              <div className="stat-item">
                <span className="stat-label">Global Reach</span>
                <span className="stat-value">24+ Countries</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Active Missions</span>
                <span className="stat-value">152 Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
