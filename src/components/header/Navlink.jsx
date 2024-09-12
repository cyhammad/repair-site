"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navlink({ href, title, company = "" }) {
  const pathname = usePathname();
  console.log("PATHNAME", pathname);
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "px-2 pt-6 font-bold border-t-4 transition-all ease-in duration-100 border-transparent",
        isActive
          ? company === "Bosch"
            ? "border-boschPrimary text-boschPrimary"
            : company === "Siemens"
            ? "border-white text-white"
            : company === "Samsung"
            ? "border-black text-black"
            : company === "Lg"
            ? "border-lgPrimary text-lgPrimary"
            : "border-primary text-primary"
          : company === "Bosch"
          ? "hover:border-boschPrimary hover:text-boschPrimary"
          : company === "Siemens"
          ? "hover:border-white hover:text-white"
          : company === "Samsung"
          ? "hover:border-black hover:text-black"
          : company === "Lg"
          ? "hover:border-lgPrimary hover:text-lgPrimary"
          : "hover:border-primary hover:text-primary"
      )}
    >
      {title}
    </Link>
  );
}
