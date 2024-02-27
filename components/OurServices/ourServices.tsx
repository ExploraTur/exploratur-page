import { BusFront, Key } from "lucide-react";

import { OurServicesCard } from "./ourServicesCard";

export const OurServices = () => {
  return (
    <section className="mt-20 text-center">
      <h2 className=" font-bold text-4xl text-submain">Nossos Serviços</h2>
      <p className="text-sm text-gray-500">
        Fornecemos uma plataforma integrada que une aventureiros e condutores{" "}
      </p>
      <article className="flex gap-x-4 my-10">
        <OurServicesCard
          src={"/bg.png"}
          title="Para aventureiros"
          subtitle="Se você busca a próxima aventura, conhecer um local, fazer uma excursão."
          url="/aventura"
          ctaBtn="Buscar aventura"
          icon={BusFront}
        />
        <OurServicesCard
          src={"/bgBus.png"}
          title="Para condutores"
          subtitle="Se é o condutor, registre-se e ofereça suas excursões personalizadas."
          url="/login"
          ctaBtn="Registrar-se"
          icon={Key}
        />
      </article>
    </section>
  );
};
