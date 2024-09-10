"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navlink({ href, title }) {
  const pathname = usePathname();
  console.log("PATHNAME", pathname);
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "px-2 pt-6 font-bold border-t-4 transition-all ease-in duration-100",
        isActive
          ? "border-primary text-primary"
          : "border-transparent hover:border-primary hover:text-primary"
      )}
    >
      {title}
    </Link>
  );
}
