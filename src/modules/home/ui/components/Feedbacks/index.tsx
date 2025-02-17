import { Ratings } from "./ratings";
import { CommentArea } from "./commentArea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../../../components/ui/carousel";
import { montserrat } from "@/app/layout";

const usersInfo = [
  {
    userPhoto: "/userPhoto.jpg",
    userName: "Philipha Esteves",
    comment:
      "Eu sou agente de viagens e o site me ajuda a encontrar locais interessantes tanto para pessoas que estão bucando suas primeiras viagens quanto para aventureiros e pessoas mais experientes além de fornecer viagens agradáveis e baratas.",
  },
  {
    userPhoto: "/userPhoto.jpg",
    userName: "Philipha Esteves",
    comment:
      "Eu sou agente de viagens e o site me ajuda a encontrar locais interessantes tanto para pessoas que estão bucando suas primeiras viagens quanto para aventureiros e pessoas mais experientes além de fornecer viagens agradáveis e baratas.",
  },
  {
    userPhoto: "/userPhoto.jpg",
    userName: "Philipha Esteves",
    comment:
      "Eu sou agente de viagens e o site me ajuda a encontrar locais interessantes tanto para pessoas que estão bucando suas primeiras viagens quanto para aventureiros e pessoas mais experientes além de fornecer viagens agradáveis e baratas.",
  },
  {
    userPhoto: "/userPhoto.jpg",
    userName: "Philipha Esteves",
    comment:
      "Eu sou agente de viagens e o site me ajuda a encontrar locais interessantes tanto para pessoas que estão bucando suas primeiras viagens quanto para aventureiros e pessoas mais experientes além de fornecer viagens agradáveis e baratas.",
  },
];

export const Feedbacks = () => {
  return (
    <section className="w-full pt-36 pb-60 rounded-2xl bg-gradient-to-t from-main to-main-dark ">
      <div className="pb-20 text-center">
        <h2
          className={`${montserrat.className} uppercase font-bold underline text-submain`}
        >
          O que dizem nossos exploradores?
        </h2>
      </div>
      <Carousel>
        <CarouselContent className="flex justify-start max-w-[70%] xl:max-w-[52%] mx-auto min-w-[290px]">
          {usersInfo.map((user, i) => (
            <CarouselItem key={i} className="max-w-5xl">
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
