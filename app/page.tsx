import { FAQPage } from "@/components/FQA/askedQuestions";
import { Feedbacks } from "@/components/Feedbacks/feedbacks";
import { Gallery } from "@/components/Gallery/gallery";
import { Hero } from "@/components/Hero/hero";
import { JoinUs } from "@/components/JoinUs/joinUs";
import { OurServices } from "@/components/OurServices/ourServices";
import { SearchArea } from "@/components/SearchArea/SearchArea";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SearchArea />
        <OurServices />
        <Feedbacks />
        <Gallery />
        <FAQPage />
        <JoinUs />
      </main>
      <Footer />
    </>
  );
}
