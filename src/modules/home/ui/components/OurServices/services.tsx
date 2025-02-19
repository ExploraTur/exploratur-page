import { montserrat } from "@/app/layout";
import { LucideIcon } from "lucide-react";

interface ServicesProps {
  content: {
    title: string;
    items: {
      id: number;
      icon: LucideIcon;
      subtitle: string;
      content: string;
    }[];
  };
}

export const Services = ({ content }: ServicesProps) => {
  return (
    <>
      <h3
        className={`${montserrat.className} relative text-xl self-start font-bold text-neutral-700 mb-4`}
      >
        {content.title}
        <span className="w-20 h-1 bg-main rounded-full absolute -bottom-2 left-0" />
      </h3>
      {content.items.map((item) => (
        <div key={item.id} className="flex gap-x-6 mb-3">
          <div className="flex self-start p-3 shadow-main/70 shadow-sm rounded-full">
            <item.icon size="1.5rem" color="#2c94fc" />
          </div>
          <div>
            <h4 className="text-lg font-medium mb-1 text-neutral-700">
              {item.subtitle}
            </h4>
            <p className="text-neutral-600 font-mediu">{item.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};
