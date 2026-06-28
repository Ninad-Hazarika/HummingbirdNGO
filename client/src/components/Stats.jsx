import "./Stats.css";

function Stats() {
  const campaigns = [
    {
      id: 1,
      title: "Clean Water Initiative",
      icon: "💧",
      percentage: 85,
      raised: "$85,000",
      goal: "$100,000",
      daysLeft: "12 days left",
    },
    {
      id: 2,
      title: "Education For All",
      icon: "📚",
      percentage: 62,
      raised: "$124,000",
      goal: "$200,000",
      daysLeft: "31 days left",
    },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-header-row">
          <div className="stats-header-left">
            <h2 className="stats-title">Urgent Flights</h2>
            <p className="stats-subtitle">
              Monitor our active campaigns in real-time. Every drop counts toward
              filling these reservoirs of hope.
            </p>
          </div>
          <a href="#campaigns" className="stats-view-all">
            View all campaigns ➔
          </a>
        </div>

        <div className="campaigns-grid">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="campaign-card">
              <div className="campaign-top">
                <div className="campaign-info">
                  <div className="campaign-icon-box">{campaign.icon}</div>
                  <h3 className="campaign-name">{campaign.title}</h3>
                </div>
                <span className="campaign-badge">{campaign.percentage}% Funded</span>
              </div>

              <div className="progress-container">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${campaign.percentage}%` }}
                ></div>
              </div>

              <div className="campaign-bottom">
                <div>
                  <span className="campaign-raised">{campaign.raised}</span>
                  <span className="campaign-goal"> / {campaign.goal}</span>
                </div>
                <div className="campaign-days">{campaign.daysLeft}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
