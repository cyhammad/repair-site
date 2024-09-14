"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { leftToRightVariants, rightToLeftVariants } from "@/lib/variants";

export default function OurFeatures({ company = "UAE Appliances Care" }) {
  return (
    <div className="flex items-center justify-center py-10 w-full max-w-screen overflow-hidden">
      <div className="flex flex-col max-w-7xl gap-10 px-5 items-center">
        <motion.h1
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
          className="text-5xl font-black"
        >
          Our Features
        </motion.h1>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
          className="grid md:grid-cols-3 gap-10 p-10"
        >
          <div className="flex flex-col gap-3 px-10 items-center justify-center text-center">
            <Image
              quality={100}
              src="/feature1.svg"
              width={100}
              height={100}
              alt="feature1"
            />
            <h1 className="text-3xl font-black">
              Affordable <br />
              Rates
            </h1>
            <span className="text-black/70">
              Quality service doesn't have to break the bank. We offer
              competitive pricing and transparent quotes.
            </span>
          </div>
          <div className="flex flex-col gap-3 px-10 items-center justify-center text-center">
            <Image
              quality={100}
              src="/feature2.svg"
              width={100}
              height={100}
              alt="feature2"
            />
            <h1 className="text-3xl font-black">Certified Technicians</h1>
            <span className="text-black/70">
              Our team is trained and certified to handle all major appliance
              brands and models.
            </span>
          </div>
          <div className="flex flex-col gap-3 px-10 items-center justify-center text-center">
            <Image
              quality={100}
              src="/feature3.svg"
              width={100}
              height={100}
              alt="feature3"
            />
            <h1 className="text-3xl font-black">Customer Satisfaction</h1>
            <span className="text-black/70">
              Your satisfaction is our top priority. We ensure all repairs are
              done to the highest standards.
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
