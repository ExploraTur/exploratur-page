"use client";

import { MenuIcon } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const links = [
  {
    src: "#explorers",
    linkName: "Aventureiro",
  },
  {
    src: "#drivers",
    linkName: "Condutores",
  },
  {
    src: "/sobre",
    linkName: "Sobre nós",
  },
  {
    src: "/galley",
    linkName: "Galeria",
  },
  {
    src: "/faq",
    linkName: "FAQ",
  },
];

export const Menu = () => {
  const matches = useMediaQuery("(max-width: 650px)");

  return (
    <div>
      {matches && (
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="text-main-dark" />
          </SheetTrigger>
          <SheetContent side="top">
            <ul className="text-main-dark text-lg flex flex-col items-center font-bold gap-y-4 uppercase">
              {links?.map((obj) => (
                <li
                  key={obj.linkName}
                  className="hover:text-main transition hover:scale-105 md:text-sm"
                >
                  <a className="px-1 md:px-2" href={obj.src}>
                    {obj.linkName}
                  </a>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      )}
      {!matches && (
        <ul className="text-sm lg:text-base text-gray-700 md:text-base flex transition font-semibold gap-x-2">
          {links?.map((obj) => (
            <li key={obj.linkName}>
              <a
                className="hover:text-main transition px-1 md:px-2"
                href={obj.src}
              >
                {obj.linkName}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
