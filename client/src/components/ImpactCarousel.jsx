import "./ImpactCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function ImpactCarousel() {
  return (
    <section className="impact-carousel">
      <div className="container">

        <div className="section-heading">
          <h2>Creating Change Across the World</h2>
          <p>
            Every image tells a story of hope, resilience, and impact.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img src="/education.jpg" alt="Education" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/healthcare.jpg" alt="Healthcare" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/environment.jpg" alt="Environment" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/hummingbird-hero.jpg" alt="Hummingbird" />
          </SwiperSlide>
        </Swiper>

      </div>
    </section>
  );
}