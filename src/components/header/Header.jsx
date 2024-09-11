"use client";

import Link from "next/link";
import Navlink from "./Navlink";
import HeaderDropdown from "./HeaderDropdown";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center max-w-screen overflow-hidden fixed w-full bg-white z-50">
      <div className="flex flex-col w-full max-w-7xl px-5 md:pb-5">
        <div className="flex justify-between items-center py-5 md:py-0 md:items-end">
          <Link href="/" className="flex text-2xl items-center">
            <span className="font-bold">Logo</span>Here
          </Link>
          <div className="flex md:hidden">
            <HeaderDropdown />
          </div>
          <div className="hidden md:flex gap-5 uppercase text-secondary">
            <Navlink href="/" title="Home" />
            <Navlink href="/#about" title="About" />
            <Navlink href="/#services" title="Services" />
            <Navlink href="/#contact" title="Contact" />
          </div>
        </div>
      </div>
      <div className="py-1.5 max-w-screen overflow-hidden flex w-full text-xs sm:text-sm items-center justify-center bg-primary text-white">
        <div className="flex w-full max-w-7xl px-5">
          <button className="pr-5 border-r border-white">
            Call us: <span className="font-black">+123456789</span>
          </button>
          <button className="pl-5">
            Talk with us on <span className="font-black">whatsapp</span>!
          </button>
        </div>
      </div>
    </div>
  );
}
