import { Bus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="xs:text-xl sm:text-2xl lg:text-3xl font-bold">
      <Link href="/" className="flex p-2">
        <p className="relative flex gap-x-5">
          Exp{" "}
          <Image className="absolute -mx-[6px]" fill src="/logo.svg" alt="" />{" "}
          orer
        </p>
      </Link>
    </div>
  );
};
