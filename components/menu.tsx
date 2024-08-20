"use client";

import { MenuIcon } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const links = [
  {
    src: "/aventureiros",
    linkName: "Aventureiro",
  },
  {
    src: "/condutores",
    linkName: "Condutores",
  },
  {
    src: "/contato",
    linkName: "Contato",
  },
  {
    src: "/sobre",
    linkName: "Sobre nós",
  },
];

export const Menu = () => {
  const matches = useMediaQuery("(max-width: 650px)");

  // TODO: refact visually all menu section
  return (
    <div>
      {matches && (
        <Sheet>
          <SheetTrigger>
            <MenuIcon className='text-main-dark'/>
          </SheetTrigger>
          <SheetContent side='top'>
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
        <ul className="py-4 px-6 rounded-full text-white flex transition font-bold gap-x-6">
        {links?.map((obj) => (
          <li
            key={obj.linkName}
            className="hover:scale-110 transition  md:text-sm"
          >
            <a className="px-1 md:px-2" href={obj.src}>
              {obj.linkName}
            </a>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};
