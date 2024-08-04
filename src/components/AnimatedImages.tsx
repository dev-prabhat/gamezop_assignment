"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatedImagesProps } from "@/types";

const AnimatedImages = ({ src, slides }: AnimatedImagesProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slidesNumber = parseInt(slides[slides.length - 1]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % src.length);
    }, 1000); // Change image every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [src.length]);
  return (
    <div className="flex flex-wrap justify-center my-3 relative w-full">
      <div className="relative w-[220px] md:w-[300px] lg:w-[450px] 2xl:w-[580px] aspect-[5/2] rounded-lg md:rounded-3xl overflow-hidden">
        <Image
          className="object-cover"
          src={`/banner-big-without-text-${slidesNumber}.avif`}
          fill
          alt="bannerImage"
        />
      </div>
      <div className="absolute top-[15%] md:top-[20%] left-[10%]">
        {slidesNumber % 2 === 0 ? (
          <div>
            <div className="w-[100px] md:w-[150px] lg:w-[250px] text-xs lg:text-xl 2xl:text-[28px] 2xl:leading-[42px] text-[#fcdc36] font-black">
              Quizzop Play fun Quizzes from 20+
            </div>
            <button type="button" className="w-[80px] md:w-[100px] lg:w-[180px] h-5 md:h-8 lg:h-[40px] text-xs lg:text-base font-black bg-[#421091] text-[#fcdc36] rounded-full flex justify-center items-center mt-2 2xl:mt-5">
              PLAY NOW
            </button>
          </div>
        ) : (
          <div>
            <div className="w-[100px] md:w-[150px] lg:w-[250px] text-xs lg:text-xl 2xl:text-[28px] 2xl:leading-[42px] text-[#590819] font-black">
              Randomly Select From 350+ Games
            </div>
            <button type="button" className="w-[80px] md:w-[100px] lg:w-[180px] h-5 md:h-8 lg:h-[40px] text-xs lg:text-base font-black bg-[#590819] text-[var(--default-white-color)] rounded-full flex justify-center items-center mt-2 2xl:mt-5">
              PLAY NOW
            </button>
          </div>
        )}
      </div>
      <div className="absolute top-[20%] right-[10%] m-2 w-10 md:w-14 lg:w-28 2xl:w-32 aspect-[1]">
        <Image
          src={src[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
          className={`object-cover rounded-lg md:rounded-2xl transform transition-transform duration-500 hover:scale-110 
            ${currentImageIndex % 3 === 0 ? "animate-spin-slow" : ""} 
            ${currentImageIndex % 3 === 1 ? "animate-bounce" : ""} 
            ${currentImageIndex % 3 === 2 ? "animate-pulse" : ""}`}
          fill
        />
      </div>
    </div>
  );
};

export default AnimatedImages;
