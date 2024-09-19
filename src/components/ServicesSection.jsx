"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import PrimaryButton from "./buttons/PrimaryButton";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { phoneNumber } from "@/lib/phone";

export function ServicesSection({ company = "Appliance Repair Center UAE" }) {
  const cards = [
    {
      description: "Washing Machine Repair",
      title: "We provide 1",
      src: "/wash.jpg",
      ctaText: "Hire Us",
      ctaLink: `tel:${phoneNumber}`,
      content: () => {
        return (
          <div className="flex flex-col gap-4">
            <p>
              Common problems with washing machines include leaks, the machine
              not starting, or the machine not spinning. We provide a same-day
              service, so you can get your washing machine back up and running
              in no time.
            </p>
          </div>
        );
      },
    },
    {
      description: "Dryer Repair",
      title: "We provide 2",
      src: "/dry.jpg",
      ctaText: "Hire Us",
      ctaLink: `tel:${phoneNumber}`,
      content: () => {
        return (
          <div className="flex flex-col gap-4">
            <p>
              Common problems with dryers include the dryer not spinning, or the
              dryer not starting. We provide a same-day service, so you can get
              your dryer back up and running in no time.
            </p>
          </div>
        );
      },
    },
    {
      description:
        company === "Lg" || company === "Samsung"
          ? "Television Repair"
          : "Stove / Cooker Repair",
      title: "We provide 3",
      src:
        company === "Lg" || company === "Samsung" ? "/tele.jpg" : "/cooker.jpg",
      ctaText: "Hire Us",
      ctaLink: `tel:${phoneNumber}`,
      content: () => {
        return (
          <div className="flex flex-col gap-4">
            {company === "Lg" || company === "Samsung" ? (
              <p>
                Problems with televisions include the television not turning on,
                the television not displaying an image, or the television not
                connecting to the internet. We provide a same-day service, so
                you can get your television back up and running in no time.
              </p>
            ) : (
              <p>
                Common issues with stoves include the stove not heating, the
                stove not turning on, or the stove not cooking evenly. We
                provide a same-day service, so you can get your stove back up
                and running in no time.
              </p>
            )}
          </div>
        );
      },
    },
    {
      description: "Dishwasher Repair",
      title: "We provide 4",
      src: "/dishwasher.jpg",
      ctaText: "Hire Us",
      ctaLink: `tel:${phoneNumber}`,
      content: () => {
        return (
          <div className="flex flex-col gap-4">
            <p>
              Common problems with dishwashers include the dishwasher not
              draining, the dishwasher not cleaning dishes properly, or the
              dishwasher not starting. We provide a same-day service, so you can
              get your dishwasher back up and running in no time.
            </p>
          </div>
        );
      },
    },
    {
      description: "Refridgerator Repair",
      title: "We provide 5",
      src: "/refr.jpg",
      ctaText: "Hire Us",
      ctaLink: `tel:${phoneNumber}`,
      content: () => {
        return (
          <div className="flex flex-col gap-4 overflow-auto">
            <p>
              Issues with refrigerators include the refrigerator not cooling,
              the refrigerator making strange noises, or the refrigerator not
              dispensing water. We provide a same-day service, so you can get
              your refrigerator back up and running in no time.
            </p>
          </div>
        );
      },
    },
    {
      description: "Gas Oven Repair",
      title: "We provide 6",
      src: "/oven.jpg",
      ctaText: "Hire Us",
      ctaLink: `tel:${phoneNumber}`,
      content: () => {
        return (
          <div className="flex flex-col gap-4 overflow-auto">
            <p>
              Issues with gas ovens include the oven not heating, the oven not
              turning on, or the oven not cooking evenly. We provide a same-day
              service, so you can get your gas oven back up and running in no
              time.
            </p>
          </div>
        );
      },
    },
  ];
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  quality={100}
                  width={1000}
                  height={1000}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-base"
                    >
                      We provide
                      {/* {active.title} */}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-lg font-bold"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="py-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xs md:text-sm lg:text-base h-40 pb-10 flex flex-col items-start gap-4 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                  <CallAndWhatsappButton company={company} />
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className={cn(
              "p-4 flex flex-col rounded-xl cursor-pointer",
              company === "Siemens"
                ? "bg-siemensBlob hover:bg-siemensPrimary/15"
                : company === "Bosch"
                ? "bg-boschBlob hover:bg-boschPrimary/15"
                : company === "Samsung"
                ? "bg-samsungBlob hover:bg-samsungPrimary/15"
                : company === "Lg"
                ? "bg-lgBlob/75 hover:bg-lgBlob"
                : "bg-blob hover:bg-primary/15"
            )}
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  quality={100}
                  width={1000}
                  height={1000}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-center md:text-left text-base"
                >
                  {/* {card.title} */}
                  We provide
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-lg font-bold mb-5 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
                <PrimaryButton company={company}>Hire Us</PrimaryButton>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
