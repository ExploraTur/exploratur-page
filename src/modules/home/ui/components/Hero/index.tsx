import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative">
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
          className="max-h-[900px] rounded-b-3xl object-cover -mt-20 -z-20"
          alt="Imagem de fundo família admirando uma paisagem com vista para um lago."
        />
        <article className="text-white text-center absolute inset-0 flex items-center justify-center">
          <div className="flex-col flex justify-center items-center">
            <span className="uppercase font-bold text-sm sm:text-base lg:text-xl underline underline-offset-4 decoration-main">
              explore, aventure-se, descubra
            </span>
            <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Encontre sua <br /> próxima aventura
            </h1>
          </div>
        </article>
      </div>
    </section>
  );
};
