"use client";

import { leftToRightVariants } from "@/lib/variants";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { motion } from "framer-motion";
import TertiaryButton from "./TertiaryButton";

export default function CallAndWhatsappButton({
  banner = false,
  company = "",
}) {
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      exit="show"
      variants={leftToRightVariants}
      className="flex items-center gap-3"
    >
      <PrimaryButton company={company}>Call Us</PrimaryButton>
      {banner ? (
        <TertiaryButton company={company}>Whatsapp Us</TertiaryButton>
      ) : (
        <SecondaryButton company={company}>Whatsapp Us</SecondaryButton>
      )}
    </motion.div>
  );
}
