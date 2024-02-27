import Image from "next/image";

import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";

interface OurServicesCard {
  src: string;
  title: string;
  subtitle: string;
  url: string;
  ctaBtn: string;
  icon: LucideIcon
}

export const OurServicesCard = ({
  src,
  title,
  subtitle,
  url,
  icon: Icon,
  ctaBtn,
}: OurServicesCard) => {
  return (
    <div className="rounded-lg min-h-[500px] min-w-[374px] relative shadow-md shadow-main-dark/30">
      <Image
        src={src}
        fill
        alt="Serviços para aventureiros"
        className="rounded-lg -z-10 absolute bg-cover"
      />
      <div className="px-10 text-left text-white h-full flex flex-col justify-end gap-2 pb-4">
        <h3 className="font-bold text-xl border-b-2 border-submain">
          {title}
        </h3>
        <p className='max-w-[300px]'>{subtitle}</p>
        <Button variant="main" className='gap-x-2'>
          {ctaBtn}
          <Icon /> 
        </Button>
      </div>
    </div>
  );
};
