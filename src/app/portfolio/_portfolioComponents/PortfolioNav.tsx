"use client";
import { portfolioList } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProtfolioNav() {
  const location = usePathname();
  return (
    <nav className="w-full">
      <div className="w-10/12 mx-auto flex justify-center gap-2 md:gap-10 lg:gap-14 items-center text-lg text-white">
        {Object.keys(portfolioList[0]).map((nav, index) => (
          <Link
            key={index}
            className={`whitespace-nowrap text-sm md:text-lg ${
              location.split("/")[2] == nav && "text-orange-500"
            }`}
            href={`/portfolio/${nav}`}
          >
            {nav}
          </Link>
        ))}
      </div>
    </nav>
  );
}
