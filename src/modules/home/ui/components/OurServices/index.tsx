import { montserrat } from "@/app/layout";
import { OurServicesCard } from "./ourServicesCard";
import { Services } from "./services";
import { adventurerServicesItems, driverServicesItems } from "./services-list";

export const OurServices = () => {
  return (
    <section className="max-w-[1200px] text-center mx-auto px-2 pb-20">
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

      <article className="mx-2 my-20">
        <div
          id="#explorers"
          className="flex flex-wrap items-center justify-center gap-20 pb-20"
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
            <Services content={adventurerServicesItems} />
          </div>
        </div>

        <div
          id="#drivers"
          className="mt-16 flex flex-wrap items-center justify-center gap-20"
        >
          <div className="max-w-[500px] text-left flex gap-y-6 flex-col items-center justify-around">
            <Services content={driverServicesItems} />
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
