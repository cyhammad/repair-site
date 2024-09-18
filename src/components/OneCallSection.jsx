"use client";

import { leftToRightVariants, rightToLeftVariants } from "@/lib/variants";
import { motion } from "framer-motion";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";

export default function OneCallSection({ company = "Appliances Care UAE" }) {
  return (
    <div
      className="flex items-center justify-center w-full flex-col px-5 max-w-screen overflow-hidden"
      id="contact"
    >
      <div
        className={cn(
          "max-w-7xl w-full px-10 py-20 rounded-2xl flex flex-col gap-5 items-center justify-center text-center",
          company === "Siemens"
            ? "bg-siemensBlob"
            : company === "Bosch"
            ? "bg-boschBlob"
            : company === "Samsung"
            ? "bg-samsungBlob"
            : company === "Lg"
            ? "bg-lgBlob"
            : "bg-blob"
        )}
      >
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
          for perfect repair. Ready to schedule a repair? Contact us today!
        </motion.span>
        <CallAndWhatsappButton company={company} />
      </div>
    </div>
  );
}
