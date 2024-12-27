import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

// Import the logos (replace these paths with your actual image paths)
import somokalLogo from '../../assets/somokal.jpg';
import atnLogo from '../../assets/atn.png';
import jamunaTVLogo from '../../assets/somay.jpeg';
import jugantorLogo from '../../assets/jugantor.jpg';
import ittefaqLogo from '../../assets/ittefaq.jpg';
import bbcBanglaLogo from '../../assets/bbcbangla.png'

const MediaCoverage = () => {
  return (
    <div
      className="max-w-[1400px] mx-auto py-11 -mt-20 bg-[#F7F8FA] rounded"
      style={{ height: '250px' }}
    >
      <h2 className="text-center text-2xl font-semibold -mt-22 mb-6">Media Coverage</h2>
      
      <Swiper
        spaceBetween={10} // Set the gap between slides to 10px
        centeredSlides={true}
        autoplay={{
          delay: 0, // Continuous sliding with no delay
          disableOnInteraction: false,
        }}
        speed={2000} // Slower speed for smooth continuous movement
        loop={true} // Enable infinite looping
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        slidesPerView={7} // Default for larger screens
        breakpoints={{
          1024: { slidesPerView: 6 }, // For large screens
          768: { slidesPerView: 4 },  // For medium screens
          640: { slidesPerView: 3 },  // For small screens
          480: { slidesPerView: 2 },  // For very small screens
          320: { slidesPerView: 1 },  // For extra small screens
        }}
        className="mySwiper"
        style={{ height: '100%' }}
      >
        <SwiperSlide>
          <a
            href="https://www.atnnewstv.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={somokalLogo} alt="Somokal Logo" className="w-32 h-32 object-contain mx-auto" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={atnLogo} alt="ATN News Logo" className="w-32 h-32 object-contain mx-auto" />
        </SwiperSlide>

        <SwiperSlide>
          <a
            href="https://www.jamunatv.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={jamunaTVLogo} alt="Jamuna TV Logo" className="w-32 h-32 object-contain mx-auto" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={bbcBanglaLogo} alt="BBC Bangla Logo" className="w-32 h-32 object-contain mx-auto" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={jugantorLogo} alt="Jugantor Logo" className="w-32 h-32 object-contain mx-auto" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={ittefaqLogo} alt="Ittefaq Logo" className="w-32 h-32 object-contain mx-auto" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MediaCoverage;
