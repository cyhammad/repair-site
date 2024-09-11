"use client";

import { Plus } from "lucide-react";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import { motion } from "framer-motion";
import { leftToRightVariants, rightToLeftVariants } from "@/lib/variants";

export default function AboutSection() {
  return (
    <div
      className="flex items-center justify-center w-full relative max-w-screen overflow-hidden"
      id="about"
    >
      <div className="grid md:grid-cols-2 mt-[100px] px-5 w-full max-w-7xl md:text-start text-center md:min-h-[75vh]">
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
          className="flex items-center justify-center md:justify-start w-full"
        >
          <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[420px]">
            <BlobBG />
            <BlobImage imgUrl="/washing-machine-repair.jpg" />
            <div className="absolute right-0 top-[10px]">
              <Plus size={24} className="text-primary" />
            </div>
            <div className="absolute right-[60px] -top-[20px]">
              <Plus size={24} className="text-primary" />
            </div>
            <div className="absolute right-[42px] top-[20px]">
              <Plus size={24} className="text-primary" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
          className="flex flex-col py-10 h-full items-center md:items-start mb-10 md:max-w-[80%] gap-6"
        >
          <h1 className="text-5xl font-black">About Us</h1>
          <span className="text-xl font-bold">Here is our mission</span>
          <span className="font-medium">
            At Fast Repairs, we are dedicated to providing top-notch home
            appliance repair services. With years of experience in the industry,
            our mission is to deliver reliable, efficient, and affordable repair
            solutions to our valued customers. Our team of certified technicians
            is trained to handle all major appliance brands and models, ensuring
            your appliances are in expert hands. <br /> We pride ourselves on
            our commitment to customer satisfaction and our ability to solve
            even the most challenging appliance issues. Whether it's a minor
            repair or a major overhaul, we approach every job with the same
            level of professionalism and care.
          </span>
          <div className="flex flex-col gap-2">
            <span className="text-lg text-black/40 font-bold">
              - Sarah B, Owner.
            </span>
            <div className="flex items-center gap-3">
              <PrimaryButton>Call Us</PrimaryButton>
              <SecondaryButton>Whatsapp Us</SecondaryButton>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
const BlobImage = ({ imgUrl }) => {
  return (
    <div
      className="w-full absolute aspect-[1.2/1]"
      style={{
        borderRadius: "13% 87% 59% 41% / 19% 33% 67% 81%",
        background: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

const BlobBG = () => (
  <div
    className="w-full aspect-[1.2/1] bg-blob absolute"
    style={{
      borderRadius: "89% 11% 39% 61% / 67% 14% 86% 33%",
    }}
  ></div>
);
