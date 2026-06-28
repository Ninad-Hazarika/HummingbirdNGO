import "./Events.css";

function Events() {
  const upcomingFlights = [
    {
      id: 1,
      date: "OCT 22",
      image: "https://images.unsplash.com/photo-1511497584788-8767610419ea?auto=format&fit=crop&w=600&q=80",
      category: "WORKSHOP",
      title: "Sustainable Habitat Building",
      description: "Learn advanced modular techniques for creating temporary shelters in climate-affected zones.",
      location: "📍 Berlin Innovation Hub",
    },
    {
      id: 2,
      date: "NOV 05",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
      category: "FIELD MISSION",
      title: "Health Cloud Deployment",
      description: "Support our tech team as we launch decentralized health records in rural clinics.",
      location: "📍 Hanoi Medical Plaza",
    },
    {
      id: 3,
      date: "NOV 18",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      category: "VOLUNTEER TRAINING",
      title: "Hummingbird Ambassador Summit",
      description: "Our annual briefing for global ambassadors. Align on the 2025 impact roadmap and strategic goals.",
      location: "📍 The Shard Conference Center",
    },
  ];

  return (
    <div className="page-wrapper events-page">
      <div className="container">
        {/* Hero Header */}
        <div className="events-hero">
          <div className="events-badge">
            <span className="pulse-dot"></span> LIVE GLOBAL OPERATIONS
          </div>
          <h1 className="events-title">
            Wings of Change: <br />
            <span className="highlight-blue">Our Journey Together.</span>
          </h1>
          <p className="events-desc">
            Join Hummingbird NGO at our upcoming flights and missions. Whether it's a field
            operation or a gala evening, your presence creates the momentum needed for
            global impact.
          </p>
        </div>

        {/* Featured + Calendar Grid */}
        <div className="events-top-grid">
          {/* Featured Event Card */}
          <div className="featured-event-card">
            <div className="featured-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80"
                alt="Gala of Light"
              />
              <span className="featured-badge">Featured Event</span>
            </div>
            <div className="featured-content">
              <div>
                <span className="featured-category">FUNDRAISING INITIATIVE</span>
                <h2 className="featured-title">Gala of Light 2024</h2>
                <p className="featured-desc">
                  An evening of luminescence and legacy. Join us for our annual signature
                  event dedicated to scaling our clean water flight missions across three
                  continents.
                </p>
                <div className="featured-meta">
                  <span>📅 December 14, 2024 | 7:00 PM</span>
                  <span>📍 The Glass Pavilion, NYC</span>
                </div>
              </div>
              <button className="btn-secure-invitation">
                Secure Invitation ➔
              </button>
            </div>
          </div>

          {/* Active Missions Calendar Card */}
          <div className="calendar-card">
            <div>
              <div className="calendar-header">
                <h3 className="calendar-title">Active Missions</h3>
                <div className="calendar-nav-btns">
                  <span className="cal-nav-btn">‹</span>
                  <span className="cal-nav-btn">›</span>
                </div>
              </div>
              <div className="calendar-month">October 2024</div>

              <div className="calendar-grid">
                <span className="cal-day-name">M</span>
                <span className="cal-day-name">T</span>
                <span className="cal-day-name">W</span>
                <span className="cal-day-name">T</span>
                <span className="cal-day-name">F</span>
                <span className="cal-day-name">S</span>
                <span className="cal-day-name">S</span>

                <span className="cal-date muted">30</span>
                <span className="cal-date">1</span>
                <span className="cal-date">2 <span className="cal-dot"></span></span>
                <span className="cal-date">3</span>
                <span className="cal-date">4</span>
                <span className="cal-date">5</span>
                <span className="cal-date">6</span>

                <span className="cal-date">7</span>
                <span className="cal-date">8 <span className="cal-dot"></span></span>
                <span className="cal-date">9</span>
                <span className="cal-date active-today">10</span>
                <span className="cal-date">11</span>
                <span className="cal-date">12</span>
                <span className="cal-date">13</span>

                <span className="cal-date">14</span>
                <span className="cal-date">15 <span className="cal-dot"></span></span>
                <span className="cal-date">16</span>
                <span className="cal-date">17</span>
                <span className="cal-date">18</span>
                <span className="cal-date">19 <span className="cal-dot"></span></span>
                <span className="cal-date">20</span>
              </div>
            </div>

            <div className="todays-flight-box">
              <div className="tf-label">Today's Flight</div>
              <div className="tf-title">Supply Drop: Nairobi</div>
              <div className="tf-progress"></div>
              <a href="#logs" className="tf-link">View Mission Logs</a>
            </div>
          </div>
        </div>

        {/* Upcoming Flights */}
        <div>
          <div className="upcoming-section-header">
            <h2 className="upcoming-title">Upcoming Flights</h2>
            <button className="filter-select-btn">
              All Flight Types ▾
            </button>
          </div>

          <div className="upcoming-grid">
            {upcomingFlights.map((flight) => (
              <div key={flight.id} className="flight-card">
                <div>
                  <div className="flight-img-wrapper">
                    <img src={flight.image} alt={flight.title} />
                    <span className="date-tag-badge">{flight.date}</span>
                  </div>
                  <div className="flight-card-body">
                    <span className="flight-category">{flight.category}</span>
                    <h3 className="flight-name">{flight.title}</h3>
                    <p className="flight-desc">{flight.description}</p>
                    <p className="flight-loc">{flight.location}</p>
                  </div>
                </div>
                <div className="flight-card-footer">
                  <button className="btn-secure-invitation" style={{ width: "100%", justifyContent: "center" }}>
                    Secure Invitation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
