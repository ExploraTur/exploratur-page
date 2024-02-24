import { Hero } from "@/components/Hero/hero";
import { SearchArea } from "@/components/SearchArea/SearchArea";
import { Header } from "@/components/header";

export default function Main() {
  return (
    <>
    <Header />
    <main className='flex flex-col items-center overflow-visible'>
      <Hero />
      <SearchArea />
    </main>
    </>
  );
}
