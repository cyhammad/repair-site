"use client";

import Link from "next/link";
import Navlink from "./Navlink";
import HeaderDropdown from "./HeaderDropdown";

export default function Header() {
  return (
    <div className="flex items-center justify-center fixed w-full bg-white">
      <div className="flex flex-col w-full max-w-7xl px-5">
        <div className="flex justify-between items-center py-5 md:py-0 md:items-end">
          <Link href="/" className="flex text-2xl items-center">
            <span className="font-bold">Logo</span>Here
          </Link>
          <div className="flex md:hidden">
            <HeaderDropdown />
          </div>
          <div className="hidden md:flex gap-5 uppercase text-secondary">
            <Navlink href="/" title="Home" />
            <Navlink href="/about" title="About" />
            <Navlink href="/services" title="Services" />
            <Navlink href="/contact" title="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
