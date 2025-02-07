import { Footer } from "@/src/modules/components/footer";
import { Feedbacks } from "../components/Feedbacks";
import { FAQPage } from "../components/FQA";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { JoinUs } from "../components/JoinUs";
import { OurServices } from "../components/OurServices";

export const HomeLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurServices />
        <Feedbacks />
        <Gallery />
        <FAQPage />
        <JoinUs />
      </main>
      <Footer />
    </>
  );
};
