import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import NavlinkDropdown from "./NavlinkDropdown";

export default function HeaderDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[96vw] flex flex-col gap-0.5 p-0 rounded-[4px] mx-[2vw] mt-3">
        <NavlinkDropdown href="/" title="Home" />
        <NavlinkDropdown href="/about" title="About" />
        <NavlinkDropdown href="/services" title="Services" />
        <NavlinkDropdown href="/contact" title="Contact" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
