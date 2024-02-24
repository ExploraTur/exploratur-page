import { LucideIcon } from "lucide-react";
import { Input } from "../ui/input";

interface SearchLabelProps {
  icon: LucideIcon;
  placeholder?: string;
  type?: string;
}

export const SearchLabel = ({
  icon: Icon,
  placeholder,
  type,
}: SearchLabelProps) => {
  return (
    <div className="flex px-2 py-2 items-center bg-main-dark rounded-md">
      <Icon size={30} fill="white"/>
      <Input placeholder={placeholder} type={type === "number" ? "number" : "string"} className=' placeholder:text-gray-200 bg-transparent text-white  outline-none focus:border-none  border-none focus-visible:outline-none' />
    </div>
  );
};
