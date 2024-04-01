import { Pin, Calendar, UsersRound, Search } from "lucide-react";
import { SearchLabel } from "./searchLabel";

export const SearchArea = () => {
  // TODO: Transform into a form and get all user inputs info.
  return (
    <section className="w-full flex justify-center font-bold">
      <div className='bg-white/90 hidden max-w-[1000px] sm:flex justify-between items-center gap-x-3 mx-4 p-3 rounded-sm shadow-lg shadow-main/20'>
        <SearchLabel placeholder="Onde quer ir?" icon={Pin} />
        <SearchLabel placeholder="Quando quer ir?" icon={Calendar} />
        <SearchLabel
          placeholder="Quantas pessoas?"
          icon={UsersRound}
          type="number"
        />
        <Search size={30} />
      </div>
    </section>
  );
};
