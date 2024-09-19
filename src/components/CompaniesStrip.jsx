"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function CompaniesStrip({ company = "Appliance Repair Center UAE" }) {
  return (
    <div
      className={cn(
        "py-5 text-white w-full flex items-center justify-center max-w-screen overflow-hidden",
        company === "Siemens"
          ? "bg-siemensPrimary"
          : company === "Bosch"
          ? "bg-boschPrimary"
          : company === "Lg"
          ? "bg-lgPrimary"
          : company === "Samsung"
          ? "bg-samsungPrimary"
          : "bg-primary"
      )}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="flex w-full justify-between items-center gap-3 px-5 max-w-7xl"
      >
        <h1 className="text-center w-full font-bold">
          From washing machines, dryers, ovens,{" "}
          {company === "Samsung" || company === "Lg"
            ? "televisions"
            : "stove/cookers"}
          , dishwashers, and refrigerators, we handle it all!
        </h1>
      </motion.div>
    </div>
  );
}
