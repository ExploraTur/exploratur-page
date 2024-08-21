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
    <div className="flex px-2 py-2 items-center rounded-md gap-x-2">
      <Icon size={30} fill="#2c94fc"/>
      <Input
        placeholder={placeholder}
        type={type === "number" ? "number" : "string"}
        className="-ml-12 pl-12 placeholder:text-gray-400 bg-transparent"
      />
    </div>
  );
};
