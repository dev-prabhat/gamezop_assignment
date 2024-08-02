import getAllGames from "@/lib/getAllGames";
import { GameCard } from "./GameCard";
import Icon from "@/SVGImages/Icon";
import { Games } from "@/types";
import { separateGamesByCategory } from "@/utils";
import AnimatedImages from "./AnimatedImages";
import { imagesAnimation } from "@/data";

export default async function Game() {
  const gameData: Promise<Games> = await getAllGames();
  const { games } = await gameData;
  const categorizedGames = separateGamesByCategory(games);
  return (
    <div className="flex flex-wrap gap-2 p-2 bg-[var(--category-section-color)]">
      {!!Object.keys(categorizedGames).length &&
        Object.keys(categorizedGames).map((ele, index) => (
          <div key={ele}>
            <div className="flex justify-between">
              {index % 2 === 1 &&
                Object.keys(imagesAnimation).map((ele) => (
                  <div key={ele}>
                    <AnimatedImages key={ele} src={imagesAnimation[ele]} slides={ele} />
                  </div>
                ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 mb-4 md:mb-7">
                <span className="w-[26px] h-[26px] fill-[var(--default-white-color)]">
                  <Icon name={ele} />
                </span>
                <h1 className="text-base md:text-2xl ml-3 text-[var(--default-white-color)]">
                  {ele}
                </h1>
              </div>
              <div className="flex gap-5 justify-between">
                {!!categorizedGames[ele].length &&
                  categorizedGames[ele]
                    .splice(0, 6)
                    .map((ele) => <GameCard key={ele.code} {...ele} />)}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
