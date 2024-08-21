import { Pin, Calendar, UsersRound, Search } from "lucide-react";
import { SearchLabel } from "./searchLabel";

export const SearchArea = () => {
  return (
    <section className="w-full flex justify-center border">
      <div className="bg-white/90 max-w-[1440px] flex justify-between items-center gap-x-3 mx-4 py-6 px-8 rounded-lg shadow-lg shadow-main/20">
        <div>
          <h3 className="font-medium">Localidade</h3>
          <SearchLabel placeholder="Onde quer ir?" icon={Pin} />
        </div>
        <div>
          <h3 className="font-medium">Data</h3>
          <SearchLabel placeholder="Quando quer ir?" icon={Calendar} />
        </div>
        <div>
          <h3 className="font-medium">Exploradores</h3>
          <SearchLabel
            placeholder="Quantas pessoas?"
            icon={UsersRound}
            type="number"
          />
        </div>
        <Search size={30} />
      </div>
    </section>
  );
};
