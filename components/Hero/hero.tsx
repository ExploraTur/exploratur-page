import Image from "next/image";
import { Button } from "../ui/button";
import { Apple } from "lucide-react";

export const Hero = () => {
  return (
    <section>
      <div>
        <article className="text-center">
          <div className="mt-32">
            <h1 className="font-semibold text-6xl">
              Encontre sua <br /> próxima{" "}
              <span className="text-secondaryColor">aventura</span>
            </h1>
            <p className="mt-4 rounded-sm p-2 mx-2 text-sm sm:text-base mb-10">
              Te ajudamos a tornar a procura de aventuras tão emocionante quanto
              a própria viagem.
            </p>
          </div>

          <div className="mt-2 flex justify-center items-center gap-7">
            <div className="rounded-full bg-main-dark text-main-light px-12 py-5 flex gap-3">
              <Image
                src="/appleIcon.svg"
                width={34}
                height={34}
                alt="Logo da Apple"
              />
              <div className="flex flex-col">
                <span>Baixe em</span>
                <span className="font-bold">App Store</span>
              </div>
            </div>

            <div className="rounded-full bg-main-dark text-main-light px-12 py-5 flex gap-4">
              <Image
                src="/googlePlay.svg"
                width={34}
                height={34}
                alt="Logo da Apple"
              />
              <div className="flex flex-col text-left">
                <span>Baixe em</span>
                <span className="font-bold">Google Play</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
