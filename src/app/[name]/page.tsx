import React, { Suspense } from "react";
import getAllGames from "@/getAllGames";
import Icon from "@/SVGImages/Icon";
import { CategoryPageProps, Games } from "@/types";
import { separateGamesByCategory } from "@/utils";
import { GameCard } from "@/components/GameCard";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";

const DynamicHeader = dynamic(() => import("@/components/Header"));
const DynamicFooter = dynamic(() => import("@/components/Footer"));

export default async function CategoryPage({
  params: { name },
}: CategoryPageProps) {
  const decodedRouteName = decodeURIComponent(name);
  const gameData: Promise<Games> = await getAllGames();
  const { games } = await gameData;
  const categorizedGames = separateGamesByCategory(games);
  const singleCategoryGames = categorizedGames[decodedRouteName] || [];

  return (
    <main className="bg-[var(--category-section-color)] relative w-full">
      <Suspense fallback={<Loader />}>
        <DynamicHeader />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <div className="flex justify-center w-full">
          <div className="mx-3 md:mx-10 p-2 md:p-5 max-w-[1440px]">
            <div className="flex items-center gap-1 mb-4 md:mb-7">
              <span className="w-[26px] h-[26px] fill-[var(--default-white-color)]">
                <Icon name={decodedRouteName.toLowerCase()} />
              </span>
              <h1 className="text-base md:text-2xl ml-3 text-[var(--default-white-color)]">
                {decodedRouteName}
              </h1>
            </div>
            <div className="grid place-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-16 md:gap-10">
              {singleCategoryGames?.map((ele) => (
                <GameCard key={ele.code} {...ele} />
              ))}
            </div>
          </div>
        </div>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <DynamicFooter />
      </Suspense>
    </main>
  );
}
