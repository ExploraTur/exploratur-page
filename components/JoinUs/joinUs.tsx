import Link from "next/link";
import { Button } from "../ui/button";

export const JoinUs = () => {
  return (
    <section className="w-full mt-10 mb-20 px-2">
      <div className="rounded-lg bg-main text-white max-w-5xl flex flex-col justify-center items-center mx-auto text-center">
        <div className="my-12 px-2">
          <h3 className="font-bold text-xl mb-2">
            Explorar novos lugares nunca foi tão simples.
          </h3>
          <p>Junte-se a nós e aventure-se.</p>
        </div>
        <Button
          size="lg"
          className="bg-white font-bold text-main-dark mb-12 hover:text-white hover:bg-main-dark"
        >
          <Link href="/search">Buscar aventura</Link>
        </Button>
      </div>
    </section>
  );
};
