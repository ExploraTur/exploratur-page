"use client";

import { User } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export const LoginArea = () => {
  const matches = useMediaQuery("(max-width: 800px)");
  const user = false;

  return (
    <div className="font-bold text-xs md:text-base text-white transition">
      {!user && !matches && (
        <div className="space-x-2">
          <Button
            variant="ghost"
            className="font-bold hover:text-main-dark"
          >
            Entrar
          </Button>
          <Button variant="main" className="font-bold">
            Registrar-se
          </Button>
        </div>
      )}
      {matches && (
        <div className="cursor-pointer p-3 mx-4 rounded-md hover:bg-main/60 transition">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <User className="text-main w-8 h-8 hover:text-white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                {!user && (
                  <div>
                    Entrar
                  </div>
                )}
              </DropdownMenuItem>
              <DropdownMenuItem>
                {!user && (
                  <div>
                    Cadastrar-se
                  </div>
                )}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};
