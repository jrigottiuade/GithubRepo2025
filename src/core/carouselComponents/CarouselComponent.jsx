import React from "react";

// IMPORT SWIPER RELATED DEPENDENCES
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper/modules";


const CarouselComponent = ({ components }) => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {components.map((component) => (
        <SwiperSlide>{component}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselComponent;
