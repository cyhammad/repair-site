"use client";

import { leftToRightVariants } from "@/lib/variants";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { motion } from "framer-motion";
import TertiaryButton from "./TertiaryButton";
import { phoneNumber } from "@/lib/phone";

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
      <PrimaryButton
        onClick={() => {
          window.location.href = `tel:${phoneNumber}`;
        }}
        company={company}
      >
        Call Us
      </PrimaryButton>
      {banner ? (
        <TertiaryButton
          onClick={() => {
            window.location.href = `https://wa.me/${phoneNumber}`;
          }}
          company={company}
        >
          Whatsapp Us
        </TertiaryButton>
      ) : (
        <SecondaryButton
          onClick={() => {
            window.location.href = `https://wa.me/${phoneNumber}`;
          }}
          company={company}
        >
          Whatsapp Us
        </SecondaryButton>
      )}
    </motion.div>
  );
}
