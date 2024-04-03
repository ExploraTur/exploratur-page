import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQPage = () => {
  return (
    <section className="py-20 border-y px-2 sm:px-4 flex-col flex sm:flex-row max-w-6xl items-center justify-between mx-auto">
      <div className='text-center sm:text-start'>
        <h3 className="font-bold text-4xl text-submain">Perguntas Frequentes</h3>
        <p className="text-gray-500 text-sm mt-1">
          FAQ
        </p>
      </div>
      <Accordion type="single" collapsible className='w-[90%] sm:w-[50%]'>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
            Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
