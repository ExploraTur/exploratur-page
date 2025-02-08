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
        <span className="w-20 h-1 bg-main rounded-full absolute -bottom-4 left-0" />
      </h3>
      {content.items.map((item) => (
        <div key={item.id} className="flex gap-x-6">
          <div className="flex self-start p-2 shadow-main/70 shadow-md rounded-full">
            <item.icon size="2rem" color="#2c94fc" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-1 text-neutral-600">
              {item.subtitle}
            </h4>
            <p className="text-neutral-500 font-medium">{item.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};
