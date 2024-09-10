"use client";

import { leftToRightVariants, rightToLeftVariants } from "@/lib/variants";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import { motion } from "framer-motion";

export default function OneCallSection() {
  return (
    <div
      className="flex items-center justify-center w-full flex-col px-5 max-w-screen overflow-hidden"
      id="contact"
    >
      <div className="max-w-7xl w-full px-10 py-20 rounded-2xl bg-blob flex flex-col gap-5 items-center justify-center text-center">
        <motion.h1
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
          className="text-4xl font-black max-w-md"
        >
          One Call can solve all your appliance problems
        </motion.h1>
        <motion.span
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
          className="font-medium max-w-lg"
        >
          Sometimes you need to call in the skilled and most qualified person
          for perfect repair. This is where the handyman comes in handy.
        </motion.span>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
          className="flex items-center gap-3"
        >
          <PrimaryButton>Call Us</PrimaryButton>
          <SecondaryButton>Whatsapp Us</SecondaryButton>
        </motion.div>
      </div>
    </div>
  );
}
