import AboutSection from "@/components/AboutSection";
import CompaniesStrip from "@/components/CompaniesStrip";
import { ImagesSlider } from "@/components/ImagesSlider";
import MainBanner from "@/components/MainBanner";
import OneCallSection from "@/components/OneCallSection";
import OurFeatures from "@/components/OurFeatures";
import ReviewSection from "@/components/ReviewSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SliderBanner } from "@/components/SliderBanner";

export default function Home() {
  return (
    <>
      <SliderBanner />
      <CompaniesStrip />
      <OurFeatures />
      {/* <MainBanner /> */}
      <AboutSection />
      <OneCallSection />
      <div className="flex items-center flex-col gap-10 py-20 justify-center w-full" id="services">
        <h1 className="text-5xl font-black">Our Services</h1>
        <ServicesSection />
      </div>
      <div className="flex items-center flex-col gap-10 py-20 max-w-screen overflow-hidden justify-center w-full">
        <h1 className="text-5xl font-black">Reviews</h1>
        <ReviewSection />
      </div>
    </>
  );
}
