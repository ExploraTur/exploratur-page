import { MdManageSearch } from "react-icons/md";
import { FaListCheck, FaPeopleGroup, FaRegHandshake } from "react-icons/fa6";
import { AiOutlineStar } from "react-icons/ai";

import { OurServicesCard } from "./ourServicesCard";
import { montserrat } from "@/app/layout";

export const OurServices = () => {
  return (
    <section className="max-w-[1200px] text-center mx-auto px-2 ">
      <h2
        className={`${montserrat.className} uppercase font-bold underline text-submain`}
      >
        Nossos Serviços
      </h2>
      <p className="text-gray-600 mt-4">
        Seja você um <strong>explorador</strong> ou{" "}
        <strong>condutor de viagens</strong>, fornecemos uma plataforma
        integrada com serviços específicos às suas necessidades.
      </p>

      <article className="mx-2 my-10">
        <div
          id="#explorers"
          className="flex flex-wrap items-center justify-center gap-10"
        >
          <OurServicesCard
            src={"/bg.png"}
            title="Para aventureiros"
            subtitle="Se você busca a próxima aventura, conhecer um local, fazer uma excursão."
            url="/search"
            ctaBtn="Buscar aventura"
            icon={"FaPersonWalkingLuggage"}
            alt="Área de redirecionamento para exploradores"
          />

          <div className="max-w-[550px] text-left flex gap-y-6 flex-col items-center justify-around">
            <h3
              className={`${montserrat.className} relative text-xl self-start font-bold text-neutral-700 mb-4`}
            >
              Nossos serviços para Aventureiros
              <span className="w-16 h-2 bg-main rounded-full absolute -bottom-4 left-0" />
            </h3>
            <div className="flex gap-x-6">
              <div className="flex self-start p-2 shadow-main/70 shadow-md rounded-full">
                <MdManageSearch size="4rem" fill="#2c94fc" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-neutral-700">
                  Busca Facilitada
                </h4>
                <p className="text-neutral-500 font-medium">
                  Tudo que precisa fazer é apenas escolher o local que deseja
                  explorar e a data da aventura
                </p>
              </div>
            </div>

            <div className="flex gap-x-6">
              <div className="flex self-start p-4 shadow-main/70 shadow-md rounded-full">
                <FaListCheck size="3rem" fill="#2c94fc" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-neutral-700">
                  Experiência personalizada
                </h4>
                <p className="text-neutral-500 font-medium">
                  Seja qual for o seu estilo de aventura, nossos condutores
                  oferecem uma variedade de opções para criar a experiência
                  adequada.
                </p>
              </div>
            </div>

            <div className="flex gap-x-6">
              <div className="flex self-start p-4 shadow-main/70 shadow-md rounded-full">
                <FaPeopleGroup size="3rem" fill="#2c94fc" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-neutral-700">
                  Comunidade de exploradores
                </h4>
                <p className="text-neutral-500 font-medium">
                  Junte-se a uma comunidade de aventureiros com interesses
                  semelhantes. Troque dicas, experiências e receba recomendações
                  personalizadas para aproveitar ao máximo cada viagem.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="#drivers"
          className="mt-40 flex flex-wrap items-center justify-center gap-20"
        >
          <div className="max-w-[500px] text-left flex gap-y-6 flex-col items-center justify-around">
            <h3
              className={`${montserrat.className} relative text-2xl self-start font-bold text-neutral-700 mb-12`}
            >
              Nossos serviços para Condutores
              <span className="w-16 h-2 bg-main rounded-full absolute -bottom-4 left-0" />
            </h3>
            <div className="flex gap-x-6">
              <div className="flex self-start p-4 shadow-main/70 shadow-md rounded-full">
                <FaRegHandshake size="3rem" fill="#2c94fc" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-neutral-700">
                  Alcance mais clientes
                </h4>
                <p className="text-neutral-500 font-medium">
                  Você poderá listar suas viagens a uma comunidade de
                  aventureiros ativos. Mais visibilidade significa mais
                  oportunidades de negócio.
                </p>
              </div>
            </div>

            <div className="flex gap-x-6">
              <div className="flex self-start p-4 shadow-main/70 shadow-md rounded-full">
                <MdManageSearch size="3rem" fill="#2c94fc" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-neutral-700">
                  Gestão simplificada de reservas
                </h4>
                <p className="text-neutral-500 font-medium">
                  Organize suas viagens e gerencie reservas de forma prática.
                </p>
              </div>
            </div>

            <div className="flex gap-x-6">
              <div className="flex self-start p-4 shadow-main/70 shadow-md rounded-full">
                <AiOutlineStar size="3rem" fill="#2c94fc" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-neutral-700">
                  Avaliações e reputação
                </h4>
                <p className="text-neutral-500 font-medium">
                  Construa uma reputação sólida e conquiste mais clientes com
                  base em avaliações positivas dos exploradores que você
                  conduziu. Um bom feedback é o melhor marketing!
                </p>
              </div>
            </div>
          </div>

          <OurServicesCard
            src={"/bgBus.png"}
            title="Para condutores"
            subtitle="Se é condutor, registre-se e ofereça suas excursões personalizadas."
            url="/login"
            ctaBtn="Registrar-se"
            icon={"BiLogIn"}
            alt="Área para cadastro de novos condutores"
          />
        </div>
      </article>
    </section>
  );
};
