import Image from "next/image";

export const Hero = () => {
  return (
    <section className="my-64">
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
          className="h-full absolute rounded-br-3xl rounded-bl-3xl top-0 left-0 object-cover -z-10"
          alt="Imagem de fundo família explorando."
        />
        <article className="text-white text-center">
          <div className="flex-col flex justify-center items-center">
            <span className="uppercase font-bold text-xl underline underline-offset-4 decoration-submain">
              explore, aventure-se, descubra
            </span>
            <h1 className="font-bold text-7xl">
              Encontre sua <br /> próxima{" "}
              <span className="text-submain">aventura</span>
            </h1>
            {/* <p className="max-w-[700px] text-xl bg-main/10 rounded-2xl p-4 mt-10">
              De viajantes para viajantes, tornamos a descoberta de destinos tão emocionante quanto a própria viagem. Deixe-nos ser o guia da sua próxima aventura.
            </p> */}
          </div>
        </article>
      </div>
    </section>
  );
};
