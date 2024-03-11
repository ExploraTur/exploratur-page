import Link from "next/link";

export const Logo = () => {
  return (
    <div className="xs:text-xl sm:text-2xl text-white font-bold">
      <Link href="/">
        <span className="text-main">Explora</span>Tur
      </Link>
    </div>
  );
};
