import AboutSection from "@/components/AboutSection";
import CompaniesStrip from "@/components/CompaniesStrip";
import OneCallSection from "@/components/OneCallSection";
import OurFeatures from "@/components/OurFeatures";
import ReviewSection from "@/components/ReviewSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SliderBanner } from "@/components/SliderBanner";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import SamsungHeader from "@/components/header/SamsungHeader";
import SiemensHeader from "@/components/header/SiemensHeader";

export default function Home() {
  return (
    <>
      <SamsungHeader />
      <SliderBanner company="Samsung" />
      <CompaniesStrip company="Samsung" />
      <OurFeatures company="Samsung" />
      <AboutSection company="Samsung" />
      <OneCallSection company="Samsung" />
      <div
        className="flex items-center flex-col gap-10 py-20 justify-center w-full"
        id="services"
      >
        <h1 className="text-5xl font-black">Our Services</h1>
        <ServicesSection company="Samsung" />
      </div>
      <div className="flex items-center flex-col gap-10 py-20 max-w-screen overflow-hidden justify-center w-full">
        <h1 className="text-5xl font-black">Reviews</h1>
        <ReviewSection company="Samsung" />
      </div>
      <Footer company="Samsung" />
    </>
  );
}