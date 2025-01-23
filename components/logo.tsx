import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";

export const Logo = () => {
  return (
    <div className="text-lg sm:text-2xl lg:text-3xl font-bold">
      <Link href="/" className="flex items-center gap-x-">
        <span className="hidden sm:block">Exp</span>{" "}
        <div className="relative left-1 w-6 h-6 sm:w-6 sm:h-10">
          <Image
            objectFit="contain"
            src={logo}
            alt="Logo de um viajante caminhando"
            className="object-fill"
          />
        </div>
        <span className="hidden sm:block">orer</span>
      </Link>
    </div>
  );
};
