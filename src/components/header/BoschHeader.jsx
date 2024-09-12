"use client";

import Link from "next/link";
import Navlink from "./Navlink";
import HeaderDropdown from "./HeaderDropdown";
import Image from "next/image";

export default function BoschHeader() {
  return (
    <header className="flex flex-col items-center justify-center bg-white text-black max-w-screen overflow-hidden fixed w-full z-50">
      <div className="flex flex-col w-full max-w-7xl px-5 md:pb-5">
        <div className="flex justify-between items-center py-5 md:py-0 md:items-end">
          <Link href="/" className="flex mb-1 items-center">
            <Image
              quality={100}
              src="/bosch.svg"
              width={120}
              height={80}
              alt="Bosch"
            />
          </Link>
          <div className="flex md:hidden">
            <HeaderDropdown />
          </div>
          <div className="hidden md:flex gap-5 uppercase">
            <Navlink company="Bosch" href="/companies/bosch" title="Home" />
            <Navlink
              company="Bosch"
              href="/companies/bosch#about"
              title="About"
            />
            <Navlink
              company="Bosch"
              href="/companies/bosch#services"
              title="Services"
            />
            <Navlink
              company="Bosch"
              href="/companies/bosch#contact"
              title="Contact"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
