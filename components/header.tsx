import { Logo } from "./logo";
import { Menu } from "./menu";
import { LoginArea } from "./loginArea";

interface HeaderProps {
  search?: boolean;
}

export const Header = ({ search }: HeaderProps) => {
  return (
    <header className="sm:mx-2 relative top-2 px-2">
      <div className="shadow-md shadow-main/20 mx-auto rounded-md bg-white/80  max-w-[1440px] relative flex h-20 justify-between items-center px-4 ">
        <Logo />
        <Menu />
        <LoginArea search={search} />
      </div>
    </header>
  );
};
