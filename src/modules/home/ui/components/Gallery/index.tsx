import { montserrat } from "@/app/layout";
import { Button } from "../../../../../../components/ui/button";
import { GalleryPhoto } from "./galleryPhoto";

export const Gallery = () => {
  return (
    <section className="text-center w-full pt-36">
      <h2 className={`${montserrat.className} font-bold text-5xl text-submain`}>
        Galeria
      </h2>
      <p className="text-gray-700 mt-2">
        Confira algumas das fotos das viagens de nossos exploradores e
        condutores.
      </p>
      <div className="mt-20 mb-32 max-w-6xl mx-auto">
        <div className="px-4 flex flex-col xs:w-[300px] sm:h-auto sm:w-auto sm:grid sm:grid-cols-3 sm:grid-rows-2 gap-2 sm:gap-4 *:relative *:h-[300px] mb-10 mx-auto w-full">
          <div>
            <GalleryPhoto
              src="/userPhotoTravel1.png"
              alt="Foto de uma viagem usuário"
            />
          </div>
          <div className="row-span-2 sm:h-[618px]">
            <GalleryPhoto
              src="/userPhotoTravel.png"
              alt="Foto de uma viagem usuário"
            />
          </div>
          <div>
            <GalleryPhoto
              src="/userPhotoTravel3.png"
              alt="Foto de uma viagem usuário"
            />
          </div>
          <div className="hidden sm:block">
            <GalleryPhoto
              src="/userPhotoTravel2.png"
              alt="Foto de uma viagem usuário"
            />
          </div>
          <div className="hidden sm:block">
            <GalleryPhoto
              src="/userPhotoTravel4.png"
              alt="Foto de uma viagem usuário"
            />
          </div>
        </div>
        <Button variant="outline">Ver mais</Button>
      </div>
    </section>
  );
};
