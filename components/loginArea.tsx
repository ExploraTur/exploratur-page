"use client";

import { Loader, User } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

// TODO: refactor this prop later to avoid passing it throught many components
interface LoginAreaProps {
  search?: boolean;
}

export const LoginArea = ({ search }: LoginAreaProps) => {
  const matches = useMediaQuery("(max-width: 860px)");

  return (
    <div>
      <div className="flex items-center justify-between text-xs md:text-base  transition">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-main animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <div className="flex gap-x-1">
            <div className="px-2">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
            <SignedOut>
              {!matches && (
                <>
                  <SignInButton
                    mode="modal"
                    afterSignInUrl="/"
                    afterSignUpUrl="/"
                  >
                    <Button
                      variant="ghost"
                      className={`${search && "text-main"}`}
                    >
                      Entrar
                    </Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button variant="main">Cadastrar-se</Button>
                  </SignUpButton>
                </>
              )}
              {matches && (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <User className="text-main w-8 h-8 hover:text-white" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <SignInButton
                        mode="modal"
                        afterSignInUrl="/"
                        afterSignUpUrl="/"
                      >
                        Entrar
                      </SignInButton>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <SignUpButton>Cadastrar-se</SignUpButton>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </SignedOut>
          </div>
        </ClerkLoaded>
      </div>
    </div>
  );
};
