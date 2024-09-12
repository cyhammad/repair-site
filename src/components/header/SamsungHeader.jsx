"use client";

import Link from "next/link";
import Navlink from "./Navlink";
import HeaderDropdown from "./HeaderDropdown";
import Image from "next/image";

export default function SamsungHeader() {
  return (
    <header className="flex flex-col items-center justify-center bg-white text-black max-w-screen overflow-hidden fixed w-full z-50">
      <div className="flex flex-col w-full max-w-7xl px-5 md:pb-5">
        <div className="flex justify-between items-center py-5 md:py-0 md:items-end">
          <Link href="/" className="flex mb-1 items-center">
            <Image
              quality={100}
              src="/samsung.svg"
              width={120}
              height={80}
              alt="Samsung"
            />
          </Link>
          <div className="flex md:hidden">
            <HeaderDropdown />
          </div>
          <div className="hidden md:flex gap-5 uppercase">
            <Navlink company="Samsung" href="/companies/samsung" title="Home" />
            <Navlink
              company="Samsung"
              href="/companies/samsung#about"
              title="About"
            />
            <Navlink
              company="Samsung"
              href="/companies/samsung#services"
              title="Services"
            />
            <Navlink
              company="Samsung"
              href="/companies/samsung#contact"
              title="Contact"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
