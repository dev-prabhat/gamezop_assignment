import Image from "next/image";
import Link from "next/link";
import { footerLinks, footerDescriptionText } from "@/data";

export default function Footer() {
  return (
    <footer className="flex justify-center px-5 md:px-[50px] bg-[var(--default-bg-color)] w-full">
      <div className="p-3 max-w-[1440px]">
        <div className="pt-[13px] pb-[19px]">
          <div className="relative w-[108px] aspect-[27/7]">
            <Image src="/gamezop-logo-dark.avif" fill alt="logo_image" loading="lazy" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-[var(--border-color-secondary)] mb-[15px]" />
        <div className="mb-[30px]">
          <div>
            {footerLinks?.map((link) => (
              <Link
                className="text-[var(--default-white-color)] text-xs underline mr-5"
                key={link.name}
                href={link.src}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          {footerDescriptionText?.map((ele, index) => (
            <p
              className={`text-[var(--default-text-color)] text-[10px] md:text-[14px] leading-3 md:leading-4 mt-5 ${
                index === 5 && "font-bold mb-5"
              }`}
              key={ele.text}
            >
              {ele.text}
              {ele.src && (
                <Link className="text-[var(--default-yellow-color)]" href={ele.src} target="_blank">
                  &nbsp;
                  {ele.linkText}
                </Link>
              )}
            </p>
          ))}
        </div>
        <div className="w-full h-[1px] bg-[var(--border-color-secondary)] absolute left-0" />
        <p className="text-[var(--default-text-color)] text-xs md:text-[14px] leading-3 md:leading-4 mt-[40px] mb-[10px]">
          Property ID: cfuucl7YgA
        </p>
      </div>
    </footer>
  );
}
