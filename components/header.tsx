import { Logo } from "./logo";
import { Menu } from "./menu";
import { LoginArea } from "./loginArea";

export const Header = () => {
  return (
    <header className="relative w-full px-2 z-20 border-b border-white/50">
      <div className='absolute bg-white inset-0 bg-opacity-5 backdrop-filter backdrop-blur-lg'/>
      <div className='relative z-10 max-w-[1280px] flex h-20 justify-between items-center mx-auto'>
        <Logo />
        <Menu />
        <LoginArea />
      </div>
    </header>
  );
};
