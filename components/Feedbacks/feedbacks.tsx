import { Ratings } from "./ratings";
import { CommentArea } from "./commentArea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const usersInfo = [
  {
    userPhoto: "/userPhoto.jpg",
    userName: "Philipha Esteves",
    comment:
      "Eu sou agente de viagens e o site me ajuda a encontrar locais interessantes tanto para pessoas que estão bucando suas primeiras viagens quanto para aventureiros e pessoas mais experientes além de fornecer viagens agradáveis e baratas",
  },
  {
    userPhoto: "/userPhoto.jpg",
    userName: "Philipha Esteves",
    comment:
      "Eu sou agente de viagens e o site me ajuda a encontrar locais interessantes tanto para pessoas que estão bucando suas primeiras viagens quanto para aventureiros e pessoas mais experientes além de fornecer viagens agradáveis e baratas",
  },
  {
    userPhoto: "/userPhoto.jpg",
    userName: "Philipha Esteves",
    comment:
      "Eu sou agente de viagens e o site me ajuda a encontrar locais interessantes tanto para pessoas que estão bucando suas primeiras viagens quanto para aventureiros e pessoas mais experientes além de fornecer viagens agradáveis e baratas",
  },
  {
    userPhoto: "/userPhoto.jpg",
    userName: "Philipha Esteves",
    comment:
      "Eu sou agente de viagens e o site me ajuda a encontrar locais interessantes tanto para pessoas que estão bucando suas primeiras viagens quanto para aventureiros e pessoas mais experientes além de fornecer viagens agradáveis e baratas",
  },
];

export const Feedbacks = () => {
  return (
    <section className="text-center w-full py-20 bg-gradient-to-t from-main to-main-dark h-[700px]">
      <h3 className="font-bold text-4xl text-submain">
        O que dizem nossos exploradores?
      </h3>
      <p className="text-gray-300 text-sm mt-4">Média de classificação dos clientes</p>
      <Ratings />
      <Carousel>
        <CarouselContent className='flex justify-start max-w-[70%] xl:max-w-[52%] mx-auto'>
          {usersInfo.map((user, i) => (
            <CarouselItem key={i} className='max-w-5xl'>
              <CommentArea
                userName={user.userName}
                userPhoto={user.userPhoto}
                comment={user.comment}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
