import AboutSection from "@/components/AboutSection";
import CompaniesStrip from "@/components/CompaniesStrip";
import OneCallSection from "@/components/OneCallSection";
import OurFeatures from "@/components/OurFeatures";
import ReviewSection from "@/components/ReviewSection";
import ServicesDetails from "@/components/ServicesDetails";
import { ServicesSection } from "@/components/ServicesSection";
import { SliderBanner } from "@/components/SliderBanner";
import Footer from "@/components/footer/Footer";
import LgHeader from "@/components/header/LgHeader";

export default function Home() {
  return (
    <>
      <LgHeader />
      <SliderBanner company="Lg" />
      <CompaniesStrip company="Lg" />
      <AboutSection company="Lg" />
      <div className="flex items-center flex-col gap-10 py-20 max-w-screen overflow-hidden justify-center w-full">
        <h1 className="text-5xl font-black">Reviews</h1>
        <ReviewSection company="Lg" />
      </div>
      <ServicesDetails company="Lg" />
      <OurFeatures company="Lg" />
      <OneCallSection company="Lg" />
      <div
        className="flex items-center flex-col gap-10 py-20 justify-center w-full"
        id="services"
      >
        <h1 className="text-5xl font-black">Our Services</h1>
        <ServicesSection company="Lg" />
      </div>
      <Footer company="Lg" />
    </>
  );
}
