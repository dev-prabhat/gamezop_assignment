import CricInfo from "@/SVGImages/CricInfo";
import Search from "@/SVGImages/Search";

export default function SearchBox() {

  return (
    <div className="flex  relative w-[200px] md:w-[50%] gap-1 md:gap-2">
      <span className="absolute left-2 translate-y-[30%]  md:translate-y-[50%]">
        <Search />
      </span>
      <input
        className="px-7 w-full h-8 md:h-10 rounded-full bg-[var(--default-dark-blue-color)]"
        placeholder="Search for game"
      />
      <CricInfo />
    </div>
  );
}