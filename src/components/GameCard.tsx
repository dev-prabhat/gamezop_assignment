import { Game } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const GameCard = (cardDetails: Game) => {
  return (
    <div key={cardDetails.code} className="max-w-[187px] mb-5">
      <Link href={cardDetails.url} target="_blank">
        <div className="relative w-[187px] aspect-[1]">
          <Image
            className="object-cover rounded-3xl"
            src={cardDetails.assets.square}
            fill
            alt={cardDetails.name.en}
            loading="lazy"
          />
        </div>
      </Link>
      <h4 className="text-md text-center text-[18px] text-[var(--default-white-color)] overflow-hidden text-ellipsis whitespace-nowrap mt-2">
        {cardDetails.name.en}
      </h4>
    </div>
  );
};
