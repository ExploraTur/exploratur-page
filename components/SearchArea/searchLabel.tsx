import { CiCalendarDate, CiLocationOn, CiSearch } from "react-icons/ci";
import { PiUsersLight } from "react-icons/pi";
import { IconType } from "react-icons/lib";

import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const iconMap = {
  CiCalendarDate,
  CiLocationOn,
  PiUsersLight,
  CiSearch,
};

interface SearchLabelProps {
  iconName: keyof typeof iconMap;
  placeholder?: string;
  type?: string;
}

export const SearchLabel = ({
  iconName,
  placeholder,
  type,
}: SearchLabelProps) => {
  const IconComponent: IconType = iconMap[iconName];

  return (
    <div className="group-hover:opacity-100 focus-within:opacity-100 transition-opacity flex px-2 py-2 items-center rounded-md gap-x-2">
      {IconComponent && <IconComponent size={30} fill="#2c94fc" />}
      <Input
        min={0}
        placeholder={placeholder}
        type={type}
        className="-ml-12 pl-12 placeholder:text-gray-400 bg-transparent"
      />
    </div>
  );
};
