"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function ServiceCenterDropdown({ company }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-2 pt-6 font-bold border-t-4 transition-all ease-in duration-100 border-transparent hover:border-primary hover:text-primary">
        OUR CENTERS
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Service Centers</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/companies/bosch">Bosch Service Center</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/companies/siemens">Siemens Service Center</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/companies/lg">LG Service Center</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/companies/samsung">Samsung Service Center</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
