import { SearchArea } from "@/components/SearchArea/SearchArea";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type Props = {
  children: React.ReactNode;
}

const Layout = ({children} : Props) => {
  return (
    <>
      <Header/>
      <SearchArea />
      {children}
      <Footer/>
    </>
  )
}

export default Layout;
