import Image from "next/image";

import bgPic from "@/public/hero-image.jpg";

export const Hero = () => {
  return (
    <section>
      <div className="z-0">
        <Image
          src={bgPic}
          className="h-[800px] absolute top-0 left-0 object-cover -z-10"
          alt="Imagem de fundo família explorando."
        />
        <article className="z-10 text-white text-center">
          <div className='flex-col my-48 gap-y-3 flex justify-center items-center'>
            <span className="uppercase text-sm">
              explore, aventure-se, descubra
            </span>
            <h1 className="font-bold text-5xl">
              Encontre sua <br /> próxima{" "}
              <span className="text-main">aventura</span>
            </h1>
            <p className="max-w-[650px] bg-main-dark/20 rounded-sm">
              De viajantes para viajantes, tornamos a descoberta de destinos tão
              emocionante quanto a própria viagem. Deixe-nos ser o guia da sua
              próxima aventura.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};