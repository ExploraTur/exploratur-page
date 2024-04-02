import { SearchArea } from "@/components/SearchArea/SearchArea";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type Props = {
  children: React.ReactNode;
}

const Layout = ({children} : Props) => {
  return (
    <>
    {/* TODO: refactor this prop later to avoid passing it throught many components */}
      <Header search/>
      <SearchArea />
      {children}
      <Footer/>
    </>
  )
}

export default Layout;
