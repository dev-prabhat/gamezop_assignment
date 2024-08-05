"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { CarouselProp } from "@/types";

import "swiper/css";
import 'swiper/css/navigation';

const Carousel = ({ children }: CarouselProp) => {
  return (
    <Swiper
      className="w-full"
      modules={[Navigation]}
      slidesPerView='auto'
      navigation
      loop
    >
      {children.map((ele, index) => (
        <SwiperSlide className="!w-fit mr-4" key={index}>
          {ele}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
