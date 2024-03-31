import Image from "next/image";
import { Button } from "../ui/button";
import { GalleryPhoto } from "./galleryPhoto";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export const Gallery = () => {
  return (
    <section className="text-center w-full pt-12">
      <h3 className="font-bold text-4xl text-submain">Galeria</h3>
      <p className="text-gray-500 text-sm mt-1">
        Confira algumas das fotos das viagens de nossos clientes
      </p>
      <div className="my-10 max-w-6xl mx-auto">
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
