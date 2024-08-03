import getAllGames from "@/lib/getAllGames";
import { GameCard } from "./GameCard";
import Icon from "@/SVGImages/Icon";
import { Games } from "@/types";
import { separateGamesByCategory } from "@/utils";
import AnimatedImages from "./AnimatedImages";
import { imagesAnimation } from "@/data";
import Carousel from "./Carousel";

export default async function Game() {
  const gameData: Promise<Games> = await getAllGames();
  const { games } = await gameData;
  const categorizedGames = separateGamesByCategory(games);
  return (
   <div className="flex justify-center bg-[var(--category-section-color)] w-full">
     <div className="flex flex-wrap gap-2 py-4 px-6 2xl:px-10 w-full 2xl:max-w-[1440px]">
      {!!Object.keys(categorizedGames).length &&
        Object.keys(categorizedGames).map((ele, index) => (
          <div key={ele} className="w-full">
            <div className="hidden 2xl:flex justify-between ">
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
                <Carousel>
                {!!categorizedGames[ele]&&
                  categorizedGames[ele]
                    .splice(0, 15)
                    .map((ele) => (
                      <GameCard key={ele.code} {...ele} />
                    ))}
                  </Carousel>
            </div>
          </div>
        ))}
    </div>
   </div>
  );
}
