import {
  Boxes,
  CheckCheck,
  Search,
  SmilePlus,
  SquareCode,
  GanttChartSquare,
  Star,
} from "lucide-react";

export const adventurerServicesItems = {
  title: "Nossos serviços para Aventureiros",
  items: [
    {
      id: 1,
      icon: Search,
      subtitle: "Busca Facilitada",
      content:
        "Tudo que precisa fazer é apenas escolher o local que deseja explorar e a data da aventura",
    },
    {
      id: 2,
      icon: CheckCheck,
      subtitle: "Experiência personalizada",
      content:
        "Seja qual for o seu estilo de aventura, nossos condutores oferecem uma variedade de opções para criar a experiência adequada.",
    },
    {
      id: 3,
      icon: Boxes,
      subtitle: "Comunidade de exploradores",
      content:
        "Junte-se a uma comunidade de aventureiros com interesses semelhantes. Troque dicas, experiências e receba recomendações personalizadas para aproveitar ao máximo cada viagem.",
    },
  ],
};

export const driverServicesItems = {
  title: "Nossos serviços para Condutores",
  items: [
    {
      id: 1,
      icon: SmilePlus,
      subtitle: "Alcance mais clientes",
      content:
        "Você poderá listar suas viagens a uma comunidade de aventureiros ativos. Mais visibilidade significa mais oportunidades de negócio.",
    },
    {
      id: 2,
      icon: GanttChartSquare,
      subtitle: "Gestão simplificada de reservas",
      content: "Organize suas viagens e gerencie reservas de forma prática.",
    },
    {
      id: 3,
      icon: Star,
      subtitle: "Avaliações e reputação",
      content:
        "Construa uma reputação sólida e conquiste mais clientes com base em avaliações positivas dos exploradores que você conduziu. Um bom feedback é o melhor marketing.",
    },
  ],
};
