import { Button } from "../ui/button";
import { SearchLabel } from "./searchLabel";
import { CiSearch } from "react-icons/ci";

export const SearchArea = () => {
  return (
    <section className="hidden sm:flex justify-center">
      <div className="bg-white/90 max-w-[1440px] flex justify-between items-center mx-4 p-6 rounded-lg shadow-lg shadow-main/20">
        <div>
          <h3 className="text-gray-600 font-medium">Para onde</h3>
          <SearchLabel placeholder="Onde quer ir" iconName={"CiLocationOn"} />
        </div>
        <div>
          <h3 className="text-gray-600 font-medium">Quando</h3>
          <SearchLabel
            placeholder="Data"
            iconName={"CiCalendarDate"}
            // type="date"
          />
        </div>
        <div>
          <h3 className="text-gray-600 font-medium">Exploradores</h3>
          <SearchLabel
            placeholder="Quantas pessoas?"
            iconName={"PiUsersLight"}
            type="number"
          />
        </div>
        <div>
          <h3 className="text-gray-600 font-medium mb-2">Buscar</h3>
          <Button
            title="Buscar Viagens"
            variant="main"
            className="focus-visible:ring-main mb-2 py-6 focus-visible:ring-offset-4 "
          >
            <CiSearch size={36} fill="white" />
          </Button>
        </div>
      </div>
    </section>
  );
};
