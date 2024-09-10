"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ImagesSlider";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import TertiaryButton from "./buttons/TertiaryButton";

export function SliderBanner() {
  const images = [
    "/washing-machine.jpg",
    "/tv.jpg",
    "/stove.jpg",
  ];
  return (
    <ImagesSlider className="h-[40rem] mt-[60px]" images={images}>
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
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The best appliances repair service <br /> in Dubai and Abu Dhabi
        </motion.p>
        <div className="flex items-center mt-5 gap-3">
          <PrimaryButton>Call Us</PrimaryButton>
          <TertiaryButton>Whatsapp Us</TertiaryButton>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
