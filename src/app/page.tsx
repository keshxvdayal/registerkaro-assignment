// import Image from "next/image";
import BlogSection from "./pages/Blog";
import FAQSection from "./pages/FAQ";
import AboutPage from "./pages/aboutUs";
import ClonedPage from "./pages/clonedPage";
import Company from "./pages/company";
import DownloadAppSection from "./pages/downloadSection";
import ProcessSteps from "./pages/features";
import Footer from "./pages/footer";
import HappyClients from "./pages/happyClients";
import HomePage from "./pages/homepage";
import Navbar from "./pages/navbar";
import Partners from "./pages/partners";
import RegisterKaroPage from "./pages/reasons";
import ServicesSection from "./pages/service";
import StatsSection from "./pages/stats";
import TestimonialCarousel from "./pages/testimonial";
import VideoIntroSection from "./pages/videoSection";

export default function Home() {
  return (
    <div >
      <Navbar />
      <HomePage />
      <Partners />
      <ServicesSection  />
      <AboutPage />
      <RegisterKaroPage />
      <VideoIntroSection  />
      <HappyClients />
      <ProcessSteps />
      <BlogSection />
      <TestimonialCarousel />
      <FAQSection />
      <DownloadAppSection />
      <StatsSection />
      <ClonedPage />
      <Company />
      <Footer />
    </div>
  );
}
