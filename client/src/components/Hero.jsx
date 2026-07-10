import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


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
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className="hero-swiper"
              >
                <SwiperSlide>
                  <img src="/hummingbird-hero.jpg" alt="Hummingbird" className="hero-card-image" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/education.jpg" alt="Education" className="hero-card-image" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/healthcare.jpg" alt="Healthcare" className="hero-card-image" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/environment.jpg" alt="Environment" className="hero-card-image" />
                </SwiperSlide>
              </Swiper>
              <div className="floating-stat stat-top">
                <h2>24+</h2>
                <p>Countries</p>
              </div>
              <div className="floating-stat stat-bottom">
                <h2>152</h2>
                <p>Active Missions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
