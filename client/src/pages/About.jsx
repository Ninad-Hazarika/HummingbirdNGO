import "./About.css";

function About() {
  return (
    <div className="page-wrapper about-page">
      <div className="container">
        {/* Hero Header */}
        <div className="about-hero">
          <div className="about-badge">💧 OUR PHILOSOPHY</div>
          <h1 className="about-title">Wings That Never Rest</h1>
          <p className="about-desc">
            Like the hummingbird, our mission is one of perpetual motion. We exist in the
            spaces between traditional aid and urgent necessity, moving with agility and
            precision to deliver life-sustaining support exactly where the pulse is
            weakest.
          </p>
        </div>

        {/* Agility Block */}
        <div className="agility-block">
          <div className="agility-img-card">
            <img src="/hummingbird-hero.jpg" alt="Hummingbird philosophy" />
          </div>
          <div className="agility-content">
            <div className="events-badge" style={{ margin: 0 }}>
              <span className="pulse-dot"></span> Live Activity Pulse
            </div>
            <h2 className="agility-sec-title">The Science of Agility</h2>
            <p className="agility-text">
              Conventional NGOs move like heavy ships; we move like wings. By leveraging
              local networks and real-time data, we bypass bureaucratic bottlenecks to
              provide aid in hours, not weeks. Our philosophy is rooted in the belief that
              speed is the ultimate determinant of survival.
            </p>

            <div className="agility-progress-box">
              <div className="ap-header">
                <span>Response Efficiency</span>
                <span>99.4%</span>
              </div>
              <div className="progress-container">
                <div className="progress-bar-fill" style={{ width: "99.4%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Reach Block */}
        <div className="reach-block">
          <div>
            <h2 className="agility-sec-title">Global Reach</h2>
            <p className="agility-text" style={{ marginTop: "12px" }}>
              Our footprint spans continents, mapped through a topographic lens of human
              need rather than political borders. From the highest peaks to the most remote
              islands, the hummingbird finds its way.
            </p>
            <div className="reach-stats-wrapper">
              <div className="reach-stat-card">
                <div className="reach-num">42</div>
                <div className="reach-lbl">Countries Served</div>
              </div>
              <div className="reach-stat-card">
                <div className="reach-num">12M+</div>
                <div className="reach-lbl">Lives Impacted</div>
              </div>
            </div>
          </div>

          <div className="reach-wave-card">
            <div className="wave-tag">LEDGER UNTAMPERED</div>
            <svg className="wave-graphic" viewBox="0 0 400 100" fill="none">
              <path
                d="M0 60 Q 100 20, 200 70 T 400 30"
                stroke="#38bdf8"
                strokeWidth="3"
                fill="none"
              />
              <circle cx="100" cy="35" r="4" fill="#0284c7" />
              <circle cx="200" cy="70" r="4" fill="#0284c7" />
              <circle cx="300" cy="45" r="4" fill="#0284c7" />
            </svg>
          </div>
        </div>

        {/* Real-time Agility Section */}
        <div className="rt-section">
          <div className="rt-header">
            <h2 className="rt-title">Real-time Agility</h2>
            <p className="rt-subtitle">
              Every second counts. Monitor our live operational metrics as we respond to
              evolving needs globally.
            </p>
          </div>

          <div className="rt-grid">
            <div className="rt-card rt-card-launch">
              <div>
                <span className="campaign-icon-box">⏱️</span>
                <h3 className="campaign-name" style={{ marginTop: "16px", marginBottom: "8px" }}>
                  Average Launch Time
                </h3>
                <p className="flight-desc">
                  From alert to deployment, our response window has decreased by 40%
                  year-over-year thanks to our automated logistics stack.
                </p>
              </div>
              <div className="launch-time">11422::</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className="rt-card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h4 className="campaign-name">Active Flight Paths</h4>
                  <p className="flight-desc">Real-time coordination of air and sea transport.</p>
                </div>
                <div style={{ display: "flex", gap: "4px" }}>
                  <span className="pulse-dot" style={{ width: "12px", height: "12px" }}></span>
                  <span className="pulse-dot" style={{ width: "12px", height: "12px", animationDelay: "0.5s" }}></span>
                  <span className="avatar-count" style={{ width: "24px", height: "24px", fontSize: "0.65rem" }}>+12</span>
                </div>
              </div>

              <div className="rt-sub-grid">
                <div className="rt-card" style={{ textAlign: "center" }}>
                  <div className="reach-num">24/7</div>
                  <div className="reach-lbl">Ops Monitoring</div>
                </div>
                <div className="rt-card rt-card-dark">
                  <div className="dark-num">99%</div>
                  <div className="dark-lbl">Delivery Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Immutable Trust Block */}
        <div className="trust-card">
          <div className="trust-icon">🛡️</div>
          <h2 className="trust-title">Immutable Trust</h2>
          <p className="trust-desc">
            We believe transparency shouldn't be a request, but a standard. Every donation is
            tokenized on a public ledger, allowing you to track your impact from your wallet
            to the actual delivery point. No hidden fees, no obscured paths. Just radical clarity.
          </p>
          <div className="trust-btns">
            <button className="btn-send-message" style={{ margin: 0, background: "#091e2a" }}>
              View Impact Ledger ➔
            </button>
            <button className="btn-secondary-report" style={{ border: "1px solid var(--border-color)" }}>
              Download Whitepaper (v2.4) 📥
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
