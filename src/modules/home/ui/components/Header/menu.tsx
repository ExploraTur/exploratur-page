"use client";

import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../../../../../components/ui/sheet";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { links } from "./menuItems";

export const Menu = () => {
  const isBelow600px = useMediaQuery("(max-width: 600px)");

  return (
    <nav>
      {isBelow600px ? (
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="text-main-dark mt-2" />
          </SheetTrigger>
          <SheetContent side="top">
            <ul className="text-main-dark text-lg flex flex-col items-center font-bold gap-y-4 uppercase">
              {links?.map((link) => (
                <li
                  key={link.linkName}
                  className="hover:text-main transition hover:scale-105 md:text-sm"
                >
                  <Link href={link.src}>{link.linkName}</Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      ) : (
        <ul className="text-xs md:text-sm lg:text-base text-gray-700  flex transition font-semibold gap-x-2">
          {links?.map((obj) => (
            <li key={obj.linkName} className="hover:text-main transition px-1">
              <Link href={obj.src}>{obj.linkName}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
