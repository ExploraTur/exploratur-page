"use client";

import { MenuIcon } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

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
  // TODO: add navigation menu from shacn-ui
  const matches = useMediaQuery("(max-width: 600px)");

  // TODO: refact visually all menu section
  return (
    <div>
      {matches && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MenuIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              Aventureiros
            </DropdownMenuItem>
            <DropdownMenuItem>
              Condutores
            </DropdownMenuItem>
            <DropdownMenuItem>
              Contato
            </DropdownMenuItem>
            <DropdownMenuItem>
              Sobre nós
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {!matches && (
        <ul className="text-gray-600 text-xs md:text-base flex transition font-bold gap-x-2">
        {links?.map((obj) => (
          <li
            key={obj.linkName}
            className="hover:text-main hover:scale-105 transition"
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
