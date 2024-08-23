import { BusFront, Key } from "lucide-react";
import { MdManageSearch } from "react-icons/md";

import { OurServicesCard } from "./ourServicesCard";
import { montserrat } from "@/app/layout";

export const OurServices = () => {
  return (
    <section className="max-w-[1440px] text-center mx-auto pt-48 pb-32">
      <h2 className={`${montserrat.className} font-bold text-5xl text-submain`}>
        Nossos Serviços
      </h2>
      <p className="text-gray-600 mt-6">
        Seja você um <strong>explorador</strong> ou{" "}
        <strong>condutor de viagens</strong>, fornecemos uma plataforma
        integrada com serviços específicos às suas necessidades.
      </p>

      <article className="mx-8 my-20">
        <div id="#explorers" className="flex flex-wrap justify-center gap-20">
          <OurServicesCard
            src={"/bg.png"}
            title="Para aventureiros"
            subtitle="Se você busca a próxima aventura, conhecer um local, fazer uma excursão."
            url="/search"
            ctaBtn="Buscar aventura"
            icon={"FaPersonWalkingLuggage"}
            alt="Área de redirecionamento para exploradores"
          />

          <div className="max-w-[500px] text-left flex gap-y-6 flex-col items-center justify-around">
            <h3
              className={`${montserrat.className} relative text-2xl self-start font-bold text-neutral-700 mb-12`}
            >
              Nossos serviços para Aventureiros
              <span className="w-16 h-2 bg-main rounded-full absolute -bottom-4 left-0" />
            </h3>
            <div className="flex gap-x-6">
              <div className="flex self-start p-4 shadow-main/70 shadow-md rounded-full">
                <MdManageSearch size="3rem" fill="#2c94fc" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-neutral-700">
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
                <MdManageSearch size="3rem" fill="#2c94fc" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-neutral-700">
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
                <MdManageSearch size="3rem" fill="#2c94fc" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-neutral-700">
                  Busca Facilitada
                </h4>
                <p className="text-neutral-500 font-medium">
                  Tudo que precisa fazer é apenas escolher o local que deseja
                  explorar e a data da aventura
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="#drivers" className="mt-40 flex flex-wrap justify-center gap-20">
          <div className="max-w-[500px] text-left flex gap-y-6 flex-col items-center justify-around">
            <h3
              className={`${montserrat.className} relative text-2xl self-start font-bold text-neutral-700 mb-12`}
            >
              Nossos serviços para Condutores
              <span className="w-16 h-2 bg-main rounded-full absolute -bottom-4 left-0" />
            </h3>
            <div className="flex gap-x-6">
              <div className="flex self-start p-4 shadow-main/70 shadow-md rounded-full">
                <MdManageSearch size="3rem" fill="#2c94fc" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-neutral-700">
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
                <MdManageSearch size="3rem" fill="#2c94fc" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-neutral-700">
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
                <MdManageSearch size="3rem" fill="#2c94fc" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-neutral-700">
                  Busca Facilitada
                </h4>
                <p className="text-neutral-500 font-medium">
                  Tudo que precisa fazer é apenas escolher o local que deseja
                  explorar e a data da aventura
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
