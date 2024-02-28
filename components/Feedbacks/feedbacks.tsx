import { Star } from "lucide-react";
import { Ratings } from "./ratings";

export const Feedbacks = () => {
  return (
    <section className="text-center w-full py-20 bg-gradient-to-t from-main to-main-dark h-[700px]">
      <h3 className="font-bold text-4xl text-submain">
        O que dizem nossos exploradores?
      </h3>
      <p className="text-gray-300 mt-1">Média de classificação dos clientes</p>
      <div className=''>
        <Ratings />
      </div>
    </section>
  );
};
