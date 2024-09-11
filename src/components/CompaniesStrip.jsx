"use client";

import { motion } from "framer-motion";
import TertiaryButton from "./buttons/TertiaryButton";

export default function CompaniesStrip() {
  return (
    <div className="py-5 text-white w-full flex items-center justify-center bg-primary max-w-screen overflow-hidden">
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
          From washing machines and dryers to stoves, cookers, ovens,
          televisions, dishwashers, and refrigerators, we handle it all!
        </h1>

        {/* <Image
          src="/siemens-white.svg"
          alt="Siemens"
          width={150}
          height={150}
        />
        <Image src="/bosch.svg" alt="Bosch" width={150} height={150} />
        <Image src="/lg-white.svg" alt="LG" width={150} height={150} />
        <Image src="/samsung.svg" alt="Samsung" width={150} height={150} /> */}
      </motion.div>
    </div>
  );
}
