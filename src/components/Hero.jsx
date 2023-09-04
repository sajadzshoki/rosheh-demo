import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { swiperImages } from "../utils/constant";
const Hero = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        
        
        
      >
        {swiperImages.map((swiper) => (
          <SwiperSlide>
            <img src={swiper} alt=""  />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Hero;
