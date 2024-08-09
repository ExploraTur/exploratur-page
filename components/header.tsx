import { Logo } from "./logo";
import { Menu } from "./menu";
import { LoginArea } from "./loginArea";

interface HeaderProps {
  search?: boolean;
}

export const Header = ({ search }: HeaderProps) => {
  return (
    <header className="relative w-full px-2 z-20 bg-black/90">
      <div className="absolute bg-mai inset-0" />
      <div className="relative z-10 max-w-[1280px] flex h-20 justify-between items-center mx-auto">
        <Logo />
        <Menu />
        <LoginArea search={search}/>
      </div>
    </header>
  );
};
