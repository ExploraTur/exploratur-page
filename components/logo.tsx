import { Bus } from "lucide-react";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="xs:text-xl sm:text-2xl text-main-dark font-bold">
      <Link href="/" className='flex p-2'>
        <span className='hidden sm:block'>ExploraTur</span>
        <Bus size={32} className='sm:ml-2 text-main'/>
      </Link>
    </div>
  );
};
