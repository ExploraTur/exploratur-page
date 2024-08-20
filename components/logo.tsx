import { Bus, BusFront } from "lucide-react";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="xs:text-xl sm:text-2xl font-bold">
      <Link href="/" className='flex p-2'>
        <BusFront size={32} className='sm:mr-2 text-main'/>
        <span className='hidden sm:block'>ExploraTour</span>
      </Link>
    </div>
  );
};
