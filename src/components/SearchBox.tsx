"use client";

import Search from "@/SVGImages/Search";
import Image from "next/image";
import { useState } from "react";

export default function SearchBox() {
  const [showSearchInput, setShowSearchInput] = useState(false);
  return (
    <div>
      {showSearchInput ? (
        <div className="relative w-[200px]">
          <span className="absolute left-2 translate-y-[50%]">
            <Search />
          </span>
          <input
            className="px-7 w-full h-10 rounded-full"
            placeholder="Search for game"
          />
          <button
            className="absolute w-[22px] aspect-[1] right-2 translate-y-[45%]"
            onClick={() => setShowSearchInput((prev) => !prev)}
          >
            <Image
              src="https://static.gamezop.com/comet/assets/img/cross.svg"
              fill
              alt="cross"
            />
          </button>
        </div>
      ) : (
        <div className="flex ">
          <button
            className="flex items-center justify-center w-10 h-10 bg-[var(--default-dark-blue-color)] rounded-full mr-2"
            onClick={() => setShowSearchInput((prev) => !prev)}
          >
            <Search />
          </button>
          <div className="relative w-10 aspect-[1]">
            <Image
              src="https://static.gamezop.com/comet/assets/img/criczop/icon.svg"
              fill
              alt="Criczop"
            />
          </div>
        </div>
      )}
    </div>
  );
}
