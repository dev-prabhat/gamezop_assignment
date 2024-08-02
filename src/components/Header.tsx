import Image from "next/image";
import CategoryPill from "./CategoryPill";
import SearchBox from "./SearchBox";
import getAllGames from "@/lib/getAllGames";
import { separateGamesByCategory } from "@/utils";
import { Games } from "@/types";
import Link from "next/link";

export default async function Header() {
  const gameData: Promise<Games> = await getAllGames();
  const { games } = await gameData;
  const categorizedGames = separateGamesByCategory(games);

  return (
    <header className="flex justify-center bg-[var(--default-purple-color)] w-full">
      <div className="flex px-[40px] h-[80px] items-center max-w-[1440px]">
        <div className="relative w-[140px] aspect-[43/12]">
          <Link href="/">
            <Image src="/gamezop-logo-dark.avif" fill alt="logo_image" />
          </Link>
        </div>
        <div className="flex items-center gap-2">
          {!!Object.keys(categorizedGames) &&
            Object.keys(categorizedGames).map((ele) => (
              <CategoryPill key={ele} name={ele} />
            ))}
        </div>
        <SearchBox />
      </div>
    </header>
  );
}
