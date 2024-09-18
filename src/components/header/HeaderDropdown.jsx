import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import NavlinkDropdown from "./NavlinkDropdown";
import ServiceCenterDropdown from "./ServiceCenterDropdown";
import Link from "next/link";

export default function HeaderDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-screen flex flex-col gap-0.5 p-0 rounded-none mt-3">
        <NavlinkDropdown href="/" title="Home" />
        <NavlinkDropdown href="/#about" title="About" />
        <DropdownMenuItem className="w-full border-l-4 flex flex-col items-start rounded-none">
          <span>Service Centers</span>
          <div className="flex flex-col px-5 py-2">
            <Link className="py-2" href="/companies/bosch">
              Bosch Service Center
            </Link>
            <Link className="py-2" href="/companies/siemens">
              Siemens Service Center
            </Link>
            <Link className="py-2" href="/companies/samsung">
              Samsung Service Center
            </Link>
            <Link className="py-2" href="/companies/lg">
              Lg Service Center
            </Link>
          </div>
        </DropdownMenuItem>
        <NavlinkDropdown href="/#services" title="Services" />
        <NavlinkDropdown href="/#contact" title="Contact" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
