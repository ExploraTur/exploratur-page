import { Pin, Calendar, UsersRound, Search } from "lucide-react";
import { SearchLabel } from "./searchLabel";

export const SearchArea = () => {
  // TODO: Transform into a form and get all user inputs info.
  return (
    <section className='hidden max-w-[1000px] font-bold mx-4 p-3 sm:flex justify-between gap-x-3 bg-white/90 rounded-sm shadow-lg shadow-main/20 items-center mt-20'>
      <SearchLabel placeholder="Onde quer ir?" icon={Pin}/>
      <SearchLabel placeholder="Quando quer ir?" icon={Calendar}/>
      <SearchLabel placeholder="Quantas pessoas?" icon={UsersRound} type="number"/>
      <Search size={30}/>
    </section>
  );
};
