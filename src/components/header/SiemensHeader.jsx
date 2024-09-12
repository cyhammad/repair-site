"use client";

import Link from "next/link";
import Navlink from "./Navlink";
import HeaderDropdown from "./HeaderDropdown";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function SiemensHeader() {
  // When scrollY reaches 100 change background color
  // When scrollY reaches 0 change background color to transparent
  const [scroll, setScroll] = useState("bg-transparent");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScroll(scrollY > 100 ? "bg-siemensPrimary" : "bg-transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "flex flex-col items-center justify-center max-w-screen overflow-hidden fixed w-full z-50",
        scroll
      )}
    >
      <div className="flex flex-col w-full max-w-7xl px-5 md:pb-5">
        <div className="flex justify-between items-center py-5 md:py-0 md:items-end">
          <Link href="/" className="flex text-2xl items-center">
            <Image
              src="/siemens-white.svg"
              width={150}
              height={80}
              alt="Siemens"
            />
          </Link>
          <div className="flex md:hidden">
            <HeaderDropdown />
          </div>
          <div className="hidden md:flex gap-5 uppercase text-white">
            <Navlink company="Siemens" href="/companies/siemens" title="Home" />
            <Navlink
              company="Siemens"
              href="/companies/siemens#about"
              title="About"
            />
            <Navlink
              company="Siemens"
              href="/companies/siemens#services"
              title="Services"
            />
            <Navlink
              company="Siemens"
              href="/companies/siemens#contact"
              title="Contact"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
