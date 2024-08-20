import { Logo } from "./logo";
import { Menu } from "./menu";
import { LoginArea } from "./loginArea";

interface HeaderProps {
  search?: boolean;
}

export const Header = ({ search }: HeaderProps) => {
  return (
    <header className="relative top-2 w-full rounded-full px-2 z-20 bg-white/80">
      <div className="relative z-10 max-w-[1440px] flex h-20 justify-between items-center mx-auto px-4">
        <Logo />
        <Menu />
        <LoginArea search={search}/>
      </div>
    </header>
  );
};
