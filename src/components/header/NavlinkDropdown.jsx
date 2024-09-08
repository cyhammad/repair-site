"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function NavlinkDropdown({ href, title }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <DropdownMenuItem
      className={cn(
        "w-full border-l-4 rounded-none",
        isActive
          ? "border-primary2 text-primary2 font-bold"
          : "border-transparent"
      )}
    >
      <Link href={href}>{title}</Link>
    </DropdownMenuItem>
  );
}
