import Link from "next/link";
import { Button } from "../ui/button";
import { FaPersonWalkingLuggage } from "react-icons/fa6";

export const JoinUs = () => {
  return (
    <section className="mt-10 mb-20 px-4 max-w-5xl mx-auto overflow-hidden">
      <div className="relative rounded-lg bg-main text-white flex flex-col justify-center items-center mx-auto text-center">
        <div className="z-0 absolute top-0 left-0 h-full opacity-5 w-full bg-line-pattern bg-cover" />
        <div className="z-10 my-12 px-2">
          <h3 className="font-bold text-xl mb-2">
            Explorar novos lugares nunca foi tão simples.
          </h3>
          <p>Junte-se a nós e aventure-se.</p>
        </div>
        <Button
          size="lg"
          className="bg-white font-bold text-main-dark mb-12 hover:text-white hover:bg-main-dark z-10"
        >
          <Link href="/search">Buscar aventura</Link>
          <FaPersonWalkingLuggage size={24} className="ml-2" />
        </Button>
      </div>
    </section>
  );
};
