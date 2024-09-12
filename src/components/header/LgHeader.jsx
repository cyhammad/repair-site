"use client";

import Link from "next/link";
import Navlink from "./Navlink";
import HeaderDropdown from "./HeaderDropdown";
import Image from "next/image";

export default function LgHeader() {
  return (
    <header className="flex flex-col items-center justify-center bg-white text-black max-w-screen overflow-hidden fixed w-full z-50">
      <div className="flex flex-col w-full max-w-7xl px-5">
        <div className="flex justify-between h-full items-center py-5 md:py-0 md:items-end">
          <Link href="/" className="flex mb-3 items-center">
            <Image
              quality={100}
              src="/lg.svg"
              width={100}
              height={50}
              alt="Lg"
            />
          </Link>
          <div className="flex md:hidden">
            <HeaderDropdown />
          </div>
          <div className="hidden md:flex md:pb-5 gap-5 uppercase">
            <Navlink company="Lg" href="/companies/lg" title="Home" />
            <Navlink company="Lg" href="/companies/lg#about" title="About" />
            <Navlink
              company="Lg"
              href="/companies/lg#services"
              title="Services"
            />
            <Navlink
              company="Lg"
              href="/companies/lg#contact"
              title="Contact"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
