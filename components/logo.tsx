import Link from "next/link";

export const Logo = () => {
  return (
    <div className="sm:text-2xl lg:text-3xl text-main-dark font-bold">
      <Link href="/">
        <span className="text-main">Explora</span>Tur
      </Link>
    </div>
  );
};
