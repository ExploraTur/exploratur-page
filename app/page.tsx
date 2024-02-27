import { Hero } from "@/components/Hero/hero";
import { OurServices } from "@/components/OurServices/ourServices";
import { SearchArea } from "@/components/SearchArea/SearchArea";
import { Header } from "@/components/header";

export default function Main() {
  return (
    <>
    <Header />
    <main className='flex flex-col items-center overflow-visible'>
      <Hero />
      <SearchArea />
      <OurServices />
    </main>
    </>
  );
}
