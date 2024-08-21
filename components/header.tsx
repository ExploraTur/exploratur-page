import { Logo } from "./logo";
import { Menu } from "./menu";
import { LoginArea } from "./loginArea";

interface HeaderProps {
  search?: boolean;
}

export const Header = ({ search }: HeaderProps) => {
  return (
    <header className="shadow-md mx-2 shadow-main/20 relative top-2 rounded-md px-3 bg-white/80">
      <div className="relative z-10 max-w-[1440px] flex h-20 justify-between items-center mx-auto px-4">
        <Logo />
        <Menu />
        <LoginArea search={search}/>
      </div>
    </header>
  );
};
