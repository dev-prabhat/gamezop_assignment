import Image from "next/image";
import Link from "next/link";
import CategoryPill from "./CategoryPill";
import Carousel from "./Carousel";
import SearchBox from "./SearchBox";
import getAllGames from "@/getAllGames";
import { separateGamesByCategory } from "@/utils";
import { Games } from "@/types";

export default async function Header() {
  const gameData: Promise<Games> = await getAllGames();
  const { games } = await gameData;
  const categorizedGames = separateGamesByCategory(games);

  return (
    <header className="flex justify-center bg-[var(--default-purple-color)] w-full">
      <div className="w-full lg:max-w-[1000px]">
        <div className="flex justify-between px-3 md:px-5 xl:px-10 h-14 md:h-20 items-center w-full">
          <div className="relative w-[100px] md:w-[200px] aspect-[43/12]">
            <Link href="/">
              <Image src="/gamezop-logo-dark.avif" fill alt="logo_image" loading="lazy" />
            </Link>
          </div>
          <SearchBox />
        </div>
        <div className="px-3 md:px-5 xl:px-10 mb-3">
          <Carousel>
            {!!Object.keys(categorizedGames) &&
              Object.keys(categorizedGames).map((ele) => (
                <CategoryPill key={ele} name={ele} />
              ))}
          </Carousel>
        </div>
      </div>
    </header>
  );
}
