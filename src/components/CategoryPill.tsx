import Link from "next/link";
import Icon from "@/SVGImages/Icon";
import { CategoryPillProps } from "@/types";

export default function CategoryPill({ name }: CategoryPillProps) {
  return (
    <Link
      href={name}
      className="px-6 py-2 rounded-3xl cursor-pointer w-max font-medium flex bg-[var(--default-dark-blue-color)] text-[var(--default-white-color)]"
    >
      {name && (
        <span className="w-[18px] h-[18px] fill-[var(--default-yellow-color)]">
          <Icon name={name} />
        </span>
      )}
      &nbsp; &nbsp;
      <h4>{name}</h4>
    </Link>
  );
}
