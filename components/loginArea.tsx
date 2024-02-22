import { User } from "lucide-react";
import Link from "next/link";

export const LoginArea = () => {
  const user = false;

  return (
    <div className="font-bold text-xs md:text-base text-white transition">
      {!user && (
        <div className="md:space-x-4 space-x-2">
          <Link href="/login" className="hover:text-main-dark">
            Entrar
          </Link>
          <Link
            href="/register"
            className="bg-main hover:bg-main-dark transition py-2 px-4 rounded-md"
          >
            Registrar-se
          </Link>
        </div>
      )}
      {user && (
        <div className='cursor-pointer p-1 border border-main rounded-full hover:bg-main/60 transition'>
          <User className='text-main w-6 h-6 hover:text-white'/>
        </div>
      )}
    </div>
  );
};
