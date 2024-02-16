import Link from "next/link";

export const Logo = () => {
  return (
    <div className="text-3xl font-bold">
      <Link href="/">
        <span className="text-main">Explore</span>Tur
      </Link>
    </div>
  );
};
