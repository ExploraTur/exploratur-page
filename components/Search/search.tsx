import Image from "next/image";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";

interface SearchProps {}

// Search into database and display cards

const mockDatabase = [
  {
    bgUrl: "string",
    isFavorite: "boolean",
    namePlace: "string",
    location: "string",
    starRated: "number",
    description: "string",
    price: "string",
    date: "string",
  },
];

export const Search = ({}: SearchProps) => {
  return (
    <section className="border-y py-12 my-10 mx-auto max-w-7xl px-2 flex-wrap flex justify-center gap-x-5 gap-4 sm:gap-y-12">
      <div className="relative">
        <Button size='icon' variant='ghost' className='absolute z-10 top-4 right-4 bg-white text-main-dark hover:text-red-500 transition'>
          <Heart size={24}/>
        </Button>
        <div className="relative max-w-[350px] h-[290px]">
          <Image
            src="/userPhotoTravel4.png"
            fill
            alt="UserPhoto"
            className="bg-cover rounded-xl"
          />
        </div>

        <div className="flex justify-center">
          <div className="-mt-3 z-10 relative bg-white p-4 shadow-lg shadow-main-dark/40 rounded-xl max-w-[340px]">
            <div className="flex justify-between">
              <p className="font-bold text-main-dark text-lg">Pico do Arieiro</p>
              <div className="flex gap-1 items-center">
                <Image src="/rate.png" alt="Classificação dos usuários" width={60} height={12}/>
                <span className="text-gray-500 text-xs">(26 votos)</span>
              </div>
            </div>
            <p className='-mt-1 text-sm text-main-dark'>Braga, Portugal</p>
            <p className='text-gray-600 py-2'>Conheça as belas montanhas e faça uma trilha de 3km até seu pico.</p>
            <div className='font-bold flex justify-between items-center'>
              <p className='text-main'>€ 69</p>
              <p className='text-main-dark'>20 de março</p>
              <Button variant='mainDark'>Reservar</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <Button size='icon' variant='ghost' className='absolute z-10 top-4 right-4 bg-white text-main-dark hover:text-red-500 transition'>
          <Heart size={24}/>
        </Button>
        <div className="relative max-w-[350px] h-[290px]">
          <Image
            src="/userPhotoTravel4.png"
            fill
            alt="UserPhoto"
            className="bg-cover rounded-xl"
          />
        </div>

        <div className="flex justify-center">
          <div className="-mt-3 z-10 relative bg-white p-4 shadow-lg shadow-main-dark/40 rounded-xl max-w-[340px]">
            <div className="flex justify-between">
              <p className="font-bold text-main-dark text-lg">Pico do Arieiro</p>
              <div className="flex gap-1 items-center">
                <Image src="/rate.png" alt="Classificação dos usuários" width={60} height={12}/>
                <span className="text-gray-500 text-xs">(26 votos)</span>
              </div>
            </div>
            <p className='-mt-1 text-sm text-main-dark'>Braga, Portugal</p>
            <p className='text-gray-600 py-2'>Conheça as belas montanhas e faça uma trilha de 3km até seu pico.</p>
            <div className='font-bold flex justify-between items-center'>
              <p className='text-main'>€ 69</p>
              <p className='text-main-dark'>20 de março</p>
              <Button variant='mainDark'>Reservar</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <Button size='icon' variant='ghost' className='absolute z-10 top-4 right-4 bg-white text-main-dark hover:text-red-500 transition'>
          <Heart size={24}/>
        </Button>
        <div className="relative max-w-[350px] h-[290px]">
          <Image
            src="/userPhotoTravel4.png"
            fill
            alt="UserPhoto"
            className="bg-cover rounded-xl"
          />
        </div>

        <div className="flex justify-center">
          <div className="-mt-3 z-10 relative bg-white p-4 shadow-lg shadow-main-dark/40 rounded-xl max-w-[340px]">
            <div className="flex justify-between">
              <p className="font-bold text-main-dark text-lg">Pico do Arieiro</p>
              <div className="flex gap-1 items-center">
                <Image src="/rate.png" alt="Classificação dos usuários" width={60} height={12}/>
                <span className="text-gray-500 text-xs">(26 votos)</span>
              </div>
            </div>
            <p className='-mt-1 text-sm text-main-dark'>Braga, Portugal</p>
            <p className='text-gray-600 py-2'>Conheça as belas montanhas e faça uma trilha de 3km até seu pico.</p>
            <div className='font-bold flex justify-between items-center'>
              <p className='text-main'>€ 69</p>
              <p className='text-main-dark'>20 de março</p>
              <Button variant='mainDark'>Reservar</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <Button size='icon' variant='ghost' className='absolute z-10 top-4 right-4 bg-white text-main-dark hover:text-red-500 transition'>
          <Heart size={24}/>
        </Button>
        <div className="relative max-w-[350px] h-[290px]">
          <Image
            src="/userPhotoTravel4.png"
            fill
            alt="UserPhoto"
            className="bg-cover rounded-xl"
          />
        </div>

        <div className="flex justify-center">
          <div className="-mt-3 z-10 relative bg-white p-4 shadow-lg shadow-main-dark/40 rounded-xl max-w-[340px]">
            <div className="flex justify-between">
              <p className="font-bold text-main-dark text-lg">Pico do Arieiro</p>
              <div className="flex gap-1 items-center">
                <Image src="/rate.png" alt="Classificação dos usuários" width={60} height={12}/>
                <span className="text-gray-500 text-xs">(26 votos)</span>
              </div>
            </div>
            <p className='-mt-1 text-sm text-main-dark'>Braga, Portugal</p>
            <p className='text-gray-600 py-2'>Conheça as belas montanhas e faça uma trilha de 3km até seu pico.</p>
            <div className='font-bold flex justify-between items-center'>
              <p className='text-main'>€ 69</p>
              <p className='text-main-dark'>20 de março</p>
              <Button variant='mainDark'>Reservar</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <Button size='icon' variant='ghost' className='absolute z-10 top-4 right-4 bg-white text-main-dark hover:text-red-500 transition'>
          <Heart size={24}/>
        </Button>
        <div className="relative max-w-[350px] h-[290px]">
          <Image
            src="/userPhotoTravel4.png"
            fill
            alt="UserPhoto"
            className="bg-cover rounded-xl"
          />
        </div>

        <div className="flex justify-center">
          <div className="-mt-3 z-10 relative bg-white p-4 shadow-lg shadow-main-dark/40 rounded-xl max-w-[340px]">
            <div className="flex justify-between">
              <p className="font-bold text-main-dark text-lg">Pico do Arieiro</p>
              <div className="flex gap-1 items-center">
                <Image src="/rate.png" alt="Classificação dos usuários" width={60} height={12}/>
                <span className="text-gray-500 text-xs">(26 votos)</span>
              </div>
            </div>
            <p className='-mt-1 text-sm text-main-dark'>Braga, Portugal</p>
            <p className='text-gray-600 py-2'>Conheça as belas montanhas e faça uma trilha de 3km até seu pico.</p>
            <div className='font-bold flex justify-between items-center'>
              <p className='text-main'>€ 69</p>
              <p className='text-main-dark'>20 de março</p>
              <Button variant='mainDark'>Reservar</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <Button size='icon' variant='ghost' className='absolute z-10 top-4 right-4 bg-white text-main-dark hover:text-red-500 transition'>
          <Heart size={24}/>
        </Button>
        <div className="relative max-w-[350px] h-[290px]">
          <Image
            src="/userPhotoTravel4.png"
            fill
            alt="UserPhoto"
            className="bg-cover rounded-xl"
          />
        </div>

        <div className="flex justify-center">
          <div className="-mt-3 z-10 relative bg-white p-4 shadow-lg shadow-main-dark/40 rounded-xl max-w-[340px]">
            <div className="flex justify-between">
              <p className="font-bold text-main-dark text-lg">Pico do Arieiro</p>
              <div className="flex gap-1 items-center">
                <Image src="/rate.png" alt="Classificação dos usuários" width={60} height={12}/>
                <span className="text-gray-500 text-xs">(26 votos)</span>
              </div>
            </div>
            <p className='-mt-1 text-sm text-main-dark'>Braga, Portugal</p>
            <p className='text-gray-600 py-2'>Conheça as belas montanhas e faça uma trilha de 3km até seu pico.</p>
            <div className='font-bold flex justify-between items-center'>
              <p className='text-main'>€ 69</p>
              <p className='text-main-dark'>20 de março</p>
              <Button variant='mainDark'>Reservar</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// TODO: create Skeleton for this component