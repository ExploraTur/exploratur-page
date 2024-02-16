import { Hero } from "@/components/Hero/hero";
import { Header } from "@/components/header";

export default function Main() {
  return (
    <>
    <Header />
    <main className='flex justify-center overflow-visible'>
      <Hero />
    </main>
    </>
  );
}
