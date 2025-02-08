import Image from "next/image";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { BiLogIn } from "react-icons/bi";
import Link from "next/link";
import { IconType } from "react-icons/lib";

import { Button } from "@/components/ui/button";

const iconMap = {
  FaPersonWalkingLuggage,
  BiLogIn,
};

interface OurServicesCard {
  src: string;
  title: string;
  subtitle: string;
  url: string;
  ctaBtn: string;
  icon: keyof typeof iconMap;
  alt: string;
}

export const OurServicesCard = ({
  src,
  title,
  subtitle,
  url,
  icon,
  ctaBtn,
  alt,
}: OurServicesCard) => {
  const IconComponent: IconType = iconMap[icon];

  return (
    <div className="rounded-lg h-[470px] max-w-[374px] relative">
      <Image
        src={src}
        fill
        alt={alt}
        className="rounded-lg -z-10 absolute bg-cover"
      />
      <div className="px-10 text-left text-white h-full flex flex-col justify-end gap-2 pb-4">
        <h3 className="font-bold text-xl border-b-2 border-submain">{title}</h3>
        <p className="max-w-[300px] font-semibold">{subtitle}</p>
        <Button variant="main" className="gap-x-2 rounded-lg">
          <Link href={url}>{ctaBtn}</Link>
          {IconComponent && <IconComponent size={20} />}
        </Button>
      </div>
    </div>
  );
};
