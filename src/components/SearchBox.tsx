"use client";

import Search from "@/SVGImages/Search";
import Image from "next/image";

export default function SearchBox() {

  return (
    <div className="flex  relative w-[200px] md:w-[50%] gap-1">
      <span className="absolute left-2 translate-y-[30%]  md:translate-y-[50%]">
        <Search />
      </span>
      <input
        className="px-7 w-full h-8 md:h-10 rounded-full bg-[var(--default-dark-blue-color)]"
        placeholder="Search for game"
      />
      <div className="relative w-10 aspect-[1]">
        <Image
          src="https://static.gamezop.com/comet/assets/img/criczop/icon.svg"
          fill
          alt="Criczop"
        />
      </div>
    </div>
  );
}