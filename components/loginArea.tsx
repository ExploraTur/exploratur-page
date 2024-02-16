import Link from "next/link";

export const LoginArea = () => {
  return (
    <div className="font-bold space-x-3">
      <Link href="/login">Entrar</Link>
      <Link href="/register" className="bg-main text-white py-2 px-4 rounded-md">
        Registrar-se
      </Link>
    </div>
  );
};
