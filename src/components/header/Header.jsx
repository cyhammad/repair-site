"use client";

import Link from "next/link";
import Navlink from "./Navlink";
import HeaderDropdown from "./HeaderDropdown";
import { phoneNumber } from "@/lib/phone";
import { cn } from "@/lib/utils";
import ServiceCenterDropdown from "./ServiceCenterDropdown";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center bg-white max-w-screen overflow-hidden fixed w-full z-50">
      <div className="flex flex-col w-full max-w-7xl px-5 md:pb-5">
        <div className="flex justify-between items-center py-5 md:py-0 md:items-end">
          <Link href="/" className="flex text-2xl items-center">
            Appliances Care UAE
          </Link>
          <div className="flex md:hidden">
            <HeaderDropdown />
          </div>
          <div className={cn("hidden md:flex gap-5 uppercase")}>
            <Navlink href="/" title="Home" />
            <Navlink href="/#about" title="About" />
            <ServiceCenterDropdown />
            <Navlink href="/#services" title="Services" />
            <Navlink href="/#contact" title="Contact" />
          </div>
        </div>
      </div>
      <div className="py-1.5 bg-secondary max-w-screen overflow-hidden flex w-full text-xs sm:text-sm items-center justify-center text-white">
        <div className="flex w-full max-w-7xl px-5">
          <button
            onClick={() => {
              window.location.href = `tel:${phoneNumber}`;
            }}
            className="pr-5 border-r border-white"
          >
            Call us: <span className="font-black">{phoneNumber}</span>
          </button>
          <button
            onClick={() => {
              window.location.href = `https://wa.me/${phoneNumber}`;
            }}
            className="pl-5"
          >
            Talk with us on <span className="font-black">whatsapp</span>!
          </button>
        </div>
      </div>
    </header>
  );
}
