"use client";

import Link from "next/link";
import { useState } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = usePathname();

  const content = (
    <div className="z-30 fixed top-0 bottom-0 right-0 left-0 bg-orange-500 text-white text-xl flex flex-col items-center justify-center gap-8">
      <div className="text-white">
        <Link
          onClick={() => setOpen(false)}
          className={`${
            location == "/service" &&
            "text-secondary transition duration-200 ease-in-out"
          }`}
          href="/service"
        >
          SERVICE
        </Link>
      </div>
      <div className="text-white">
        <Link
          onClick={() => setOpen(false)}
          className={`${
            location == "/portfolio" &&
            "text-secondary transition duration-200 ease-in-out"
          }`}
          href="/portfolio"
        >
          PORTFOLIO
        </Link>
      </div>
      <div className="text-white">
        <Link
          onClick={() => setOpen(false)}
          className={`${
            location == "/about" &&
            "text-secondary transition duration-200 ease-in-out"
          }`}
          href="/about"
        >
          ABOUT
        </Link>
      </div>
      <div className="text-white">
        <Link
          onClick={() => setOpen(false)}
          className={`${
            location == "/blog" &&
            "text-secondary transition duration-200 ease-in-out"
          }`}
          href="/blog"
        >
          BLOG
        </Link>
      </div>
      <div className="bg-white rounded text-black text-sm px-4 py-2">
        CONTACT US
      </div>
    </div>
  );
  return (
    <>
      <nav className="h-28">
        <div className="w-10/12 h-full mx-auto flex justify-between items-center border-b border-orange-500">
          <div>
            <Link href={"/"}>
              <img src="bed-logo.png" alt="" />
            </Link>
          </div>
          <div className="hidden lg:flex items-center justify-around gap-8">
            <div className="text-white">
              <Link
                className={`${
                  location == "/service" &&
                  "text-orange-500 transition duration-200 ease-in-out"
                }`}
                href="/service"
              >
                SERVICE
              </Link>
            </div>
            <div className="text-white">
              <Link
                className={`${
                  location == "/portfolio" &&
                  "text-orange-500 transition duration-200 ease-in-out"
                }`}
                href="/portfolio/nav1"
              >
                PORTFOLIO
              </Link>
            </div>
            <div className="text-white">
              <Link
                className={`${
                  location == "/about" &&
                  "text-orange-500 transition duration-200 ease-in-out"
                }`}
                href="/about"
              >
                ABOUT
              </Link>
            </div>
            <div className="text-white">
              <Link
                className={`${
                  location == "/blog" &&
                  "text-orange-500 transition duration-200 ease-in-out"
                }`}
                href="/blog"
              >
                BLOG
              </Link>
            </div>
            <div className="bg-white rounded text-black text-sm px-4 py-2">
              CONTACT US
            </div>
          </div>
          {open ? (
            <RiCloseLargeFill
              onClick={() => setOpen(!open)}
              className="z-40 flex lg:hidden text-white cursor-pointer"
              size={30}
            />
          ) : (
            <RiMenu5Line
              onClick={() => setOpen(!open)}
              className="z-40 flex lg:hidden text-white cursor-pointer"
              size={30}
            />
          )}
        </div>
      </nav>
      {open && content}
    </>
  );
}
