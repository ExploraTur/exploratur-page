import { SearchArea } from "@/src/modules/search/ui/components/SearchArea";
import { Footer } from "@/src/modules/components/footer";
import { Header } from "@/src/modules/home/ui/components/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      {/* TODO: refactor this prop later to avoid passing it throught many components */}
      <Header search />
      <SearchArea />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
