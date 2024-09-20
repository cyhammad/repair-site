"use client";

import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ImagesSlider";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";

export function SliderBanner({ company = "Appliance Repair Center UAE" }) {
  const images = ["/banner-1.jpeg", "/banner-2.jpeg", "/banner-3.jpeg"];
  return (
    <ImagesSlider
      className={cn("h-[40rem]", company === "Siemens" ? "mt-0" : "mt-[60px]")}
      images={images}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-3xl md:text-5xl px-5 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Welcome to Appliance Repair Center UAE  - Your Trusted Home Appliance Repair
          Experts
        </motion.p>
        <motion.p className="max-w-7xl mb-5 px-5 md:text-lg text-white text-center">
          At our Appliance Repair Center UAE , our expert technicians are dedicated
          to restoring your appliances to optimal performance,
          ensuring unmatched comfort and convenience. Whether addressing minor
          issues or managing significant breakdowns, we offer unparalleled
          service to keep your household running seamlessly. Trust us for
          premium appliance repair that guarantees efficiency and
          reliability.
        </motion.p>
        <CallAndWhatsappButton company={company} banner />
      </motion.div>
    </ImagesSlider>
  );
}
