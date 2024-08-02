"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatedImagesProps } from "@/types";

const AnimatedImages = ({ src , slides}: AnimatedImagesProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % src.length);
    }, 1000); // Change image every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [src.length]);
  return (
    <div className="flex flex-wrap justify-center m-5 relative">
      <div className="relative w-[580px] aspect-[5/2]">
        <Image
          className="object-cover rounded-3xl"
          src={`/banner-big-without-text-${slides[slides.length-1]}.avif`}
          fill
          alt="bannerImage"
        />
      </div>
      <div className="absolute top-[20%] right-[10%] m-2 w-32 aspect-[1]">
        <Image
          src={src[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
          className={`object-cover rounded-2xl transform transition-transform duration-500 hover:scale-110 
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
