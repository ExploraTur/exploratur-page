import { Button } from "../../../../../../components/ui/button";
import { Subtitle } from "./search-area-subtitle";
import { SearchLabel } from "./search-label";
import { CiSearch } from "react-icons/ci";

export const SearchArea = () => {
  return (
    <section className="hidden sm:flex justify-center">
      <div className="bg-white/90 max-w-[1000px] flex flex-1 justify-between items-center mx-4 p-6 rounded-lg shadow-lg shadow-main/20 text-left">
        <div className="flex-1">
          <Subtitle title="Para onde" />
          <SearchLabel placeholder="Onde quer ir" iconName={"CiLocationOn"} />
        </div>
        <div className="flex-1">
          <Subtitle title="Quando" />
          <SearchLabel
            placeholder="Data"
            iconName={"CiCalendarDate"}
            // type="date"
          />
        </div>
        <div className="flex-1">
          <Subtitle title="Exploradores" />
          <SearchLabel
            placeholder="Quantas pessoas?"
            iconName={"PiUsersLight"}
            type="number"
          />
        </div>
        <div>
          <Button
            title="Buscar Viagens"
            variant="main"
            className="focus-visible:ring-main gap-2 px-4 py-6 focus-visible:ring-offset-4 mt-6"
          >
            <span>Buscar</span>
            <CiSearch size={36} fill="white" />
          </Button>
        </div>
      </div>
    </section>
  );
};
