import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import getAllGames from "@/lib/getAllGames";
import Icon from "@/SVGImages/Icon";
import { Games } from "@/types";
import { separateGamesByCategory } from "@/utils";
import { GameCard } from "@/components/GameCard";

type CategoryPageProps = {
  params: {
    name: string;
  };
};

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
      <Header />
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
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
            {singleCategoryGames?.map((ele) => (
              <GameCard key={ele.code} {...ele} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
