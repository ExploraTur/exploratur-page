import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="text-lg sm:text-2xl lg:text-3xl font-bold">
      <Link href="/" className="flex items-center gap-x-">
        <span className="hidden sm:block">Exp</span>{" "}
        <div className="relative w-6 h-6 sm:w-6 sm:h-10">
          <Image
            layout="fill"
            objectFit="contain"
            src="/logo.svg"
            alt="Logo de um viajante caminhando"
          />
        </div>
        <span className="hidden sm:block">orer</span>
      </Link>
    </div>
  );
};
