import Image from "next/image";
import { Button } from "../ui/button";

export const Gallery = () => {
  return (
    <section className="text-center w-full py-20">
      <h3 className="font-bold text-4xl text-submain">Galeria</h3>
      <p className="text-gray-500 text-sm mt-1">
        Confira algumas das fotos das viagens de nossos clientes
      </p>
      <div className="my-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-3 grid-rows-2 gap-4 *:relative mb-10">
          <div>
            <Image
              src="/userPhotoTravel1.png"
              alt="Foto de uma viagem usuário"
              className="object-cover absolute rounded-lg"
              fill
            />
          </div>
          <div className="row-span-2 h-[618px]">
            <Image
              src="/userPhotoTravel.png"
              alt="Foto de uma viagem usuário"
              className="object-cover absolute rounded-lg"
              fill
            />
          </div>
          <div>
            <Image
              src="/userPhotoTravel3.png"
              alt="Foto de uma viagem usuário"
              className="object-cover absolute rounded-lg"
              fill
            />
          </div>
          <div>
            <Image
              src="/userPhotoTravel2.png"
              alt="Foto de uma viagem usuário"
              className="object-cover absolute rounded-lg"
              fill
            />
          </div>
          <div>
            <Image
              src="/userPhotoTravel4.png"
              alt="Foto de uma viagem usuário"
              className="object-cover absolute rounded-lg"
              fill
            />
          </div>
        </div>
        <Button variant='outline'>Ver mais</Button>
      </div>
    </section>
  );
};
