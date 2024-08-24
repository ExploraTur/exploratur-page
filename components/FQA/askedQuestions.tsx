import { montserrat } from "@/app/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQPage = () => {
  return (
    <section className="py-20 border-y px-2 sm:px-4 flex-col flex sm:flex-row max-w-6xl items-center justify-between mx-auto">
      <div className="text-center sm:text-start">
        <h2
          className={`${montserrat.className} font-bold text-5xl text-submain`}
        >
          Perguntas Frequentes
        </h2>
        <p className="text-gray-700 mt-2">FAQ</p>
      </div>
      <Accordion type="single" collapsible className="w-[90%] sm:w-[50%]">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Como posso encontrar uma aventura personalizada?
          </AccordionTrigger>
          <AccordionContent>
            Você pode escolher a aventura ideal filtrando por local, data e o
            número de pessoas, e tipo de experiência. Nossa plataforma conecta
            você às viagens disponibilizadas pelos condutores cadastrados em
            nosso sistema.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Os condutores são qualificados?</AccordionTrigger>
          <AccordionContent>
            Sim, todos os condutores passam por um processo de verificação
            através das avaliações de outros exploradores, garantindo segurança
            e qualidade em cada aventura.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Como faço para reservar uma aventura?
          </AccordionTrigger>
          <AccordionContent>
            Basta selecionar a aventura desejada, escolher a data e confirmar a
            reserva. Você receberá todos os detalhes por e-mail, incluindo
            informações sobre o ponto de encontro e o condutor.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Posso cancelar ou reagendar uma aventura?
          </AccordionTrigger>
          <AccordionContent>
            Sim, você pode cancelar ou reagendar, no entanto, é importante
            verificar as políticas específicas de cada condutor em relação a
            prazos e possíveis taxas.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Como são feitas as avaliações dos condutores?
          </AccordionTrigger>
          <AccordionContent>
            Após cada aventura, você pode deixar uma avaliação e um comentário
            sobre o condutor. Essas avaliações ajudam outros exploradores a
            escolherem as melhores opções.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            Como me torno um condutor parceiro?
          </AccordionTrigger>
          <AccordionContent>
            Se você é um condutor experiente, pode se cadastrar na nossa
            plataforma. Após a verificação do perfil, você poderá listar suas
            rotas e começar a receber reservas.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Quais as formas de pagamento?</AccordionTrigger>
          <AccordionContent>
            São aceitos diversos métodos de pagamento, incluindo cartões de
            crédito, débito e transferências via MBWAY e transferências
            bancárias.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>
            Existe suporte ao cliente caso eu precise de ajuda?
          </AccordionTrigger>
          <AccordionContent>
            Sim, temos uma equipe de suporte disponível para auxiliar em
            qualquer dúvida ou problema antes, durante ou depois da sua
            aventura.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
