import { Logo } from "./logo";
import { Menu } from "./menu";
import { LoginArea } from "./loginArea";

export const Header = () => {
  return (
    <header className="relative container flex justify-between items-center h-28">
      <Logo />
      <Menu />
      <LoginArea />
    </header>
  );
};
