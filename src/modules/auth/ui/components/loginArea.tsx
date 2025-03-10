"use client";

import { Loader, User } from "lucide-react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "../../../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../../components/ui/dropdown-menu";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// TODO: refactor this prop later to avoid passing it throught many components
interface LoginAreaProps {
  search?: boolean;
}

export const LoginArea = ({ search }: LoginAreaProps) => {
  // const matches = useMediaQuery("(max-width: 860px)");

  return (
    <div>LoginBtn</div>
    // <div className="z-20">
    //   <div className="flex items-center justify-between transition">
    //     <ClerkLoading>
    //       <Loader className="h-6 w-6 text-main animate-spin" />
    //     </ClerkLoading>
    //     <ClerkLoaded>
    //       <div className="flex gap-x-1">
    //         <div>
    //           <SignedIn>
    //             <UserButton afterSignOutUrl="/" />
    //           </SignedIn>
    //         </div>
    //         <SignedOut>
    //           {!isBellow800pxW && (
    //             <>
    //               <SignInButton
    //                 mode="modal"
    //                 afterSignInUrl="/"
    //                 afterSignUpUrl="/"
    //               >
    //                 <Button
    //                   variant="outline"
    //                   className={`border-none font-bold bg-transparent ${
    //                     search && "text-main"
    //                   }`}
    //                 >
    //                   Entrar
    //                 </Button>
    //               </SignInButton>
    //               <SignUpButton>
    //                 <Button variant="main">Cadastrar-se</Button>
    //               </SignUpButton>
    //             </>
    //           )}
    //           {isBellow800pxW && (
    //             <DropdownMenu>
    //               <DropdownMenuTrigger>
    //                 <User className="text-main w-8 h-8 hover:text-white" />
    //               </DropdownMenuTrigger>
    //               <DropdownMenuContent>
    //                 <DropdownMenuItem>
    //                   <SignInButton
    //                     mode="modal"
    //                     afterSignInUrl="/"
    //                     afterSignUpUrl="/"
    //                   >
    //                     Entrar
    //                   </SignInButton>
    //                 </DropdownMenuItem>
    //                 <DropdownMenuItem>
    //                   <SignUpButton>Cadastrar-se</SignUpButton>
    //                 </DropdownMenuItem>
    //               </DropdownMenuContent>
    //             </DropdownMenu>
    //           )}
    //         </SignedOut>
    //       </div>
    //     </ClerkLoaded>
    //   </div>
    // </div>
  );
};
