import Image from "next/image";
import { SearchArea } from "@/src/modules/search/ui/components/SearchArea";

export const Hero = () => {
  return (
    <section className="mt-64 mb-44 md:mb-52 lg:mb-40 2xl:mb-60">
      <div>
        <Image
          priority
          width="4954"
          height="3303"
          decoding="async"
          data-nimg="1"
          src="/hero-image.jpg"
          sizes="
            300×200,
            1070×713,
            1480×987,
            1800×1200,
            2070×1380,
            2310×1540,
            2530×1687,
            2720×1813,
            2910×1940,
            3090×2060,
            3250×2167,
            3410×2273,
            3560×2373,
            3700×2467,
            3840×2560
          "
          className="max-h-[900px] h-[95%] absolute rounded-b-3xl top-0 left-0 object-cover -z-20"
          alt="Imagem de fundo família admirando uma paisagem com vista para um lago."
        />
        <article className="text-white text-center">
          <div className="flex-col flex justify-center items-center mb-40 ">
            <span className="uppercase font-bold text-sm sm:text-base lg:text-xl underline underline-offset-4 decoration-submain">
              explore, aventure-se, descubra
            </span>
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">
              Encontre sua <br /> próxima{" "}
              <span className="text-submain">aventura</span>
            </h1>
          </div>
          <SearchArea />
        </article>
      </div>
    </section>
  );
};
