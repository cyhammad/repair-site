"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export default function ReviewSection({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  company = "",
}) {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  const items = [
    {
      name: "Dawood Ayoob",
      quote:
        "The best company I have ever worked with. Their team is very professional and always ready to help. I will definitely recommend them to my friends and family.",
      title: "TBR Company",
    },
    {
      name: "Ayesha Ali",
      quote:
        "I am very happy with the services provided by this company. They are very professional and always ready to help. I will definitely recommend them to my friends and family.",
      title: "MOB Mobile Company",
    },
    {
      name: "Ali Raza",
      quote:
        "To be honest, I was a bit skeptical at first but after working with them, I can say that they are the best in the business. I will definitely recommend them to my friends and family.",
      title: "TV Pro Company",
    },
    {
      name: "Sara Khan",
      quote:
        "I am very happy with the services provided by this company. They are very professional and always ready to help. I will definitely recommend them to my friends and family.",
      title: "Blue Company",
    },
  ];

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className={cn(
              "w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 px-8 py-6 md:w-[450px]",
              company === "Lg"
                ? "border-lgSecondary text-white bg-lgSecondary"
                : company === "Samsung"
                ? "border-samsungPrimary shadow-md"
                : company === "Bosch"
                ? "border-black/10 shadow text-black bg-white"
                : company === "Siemens"
                ? "border-siemensPrimary shadow-md"
                : "border-secondary"
            )}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className=" relative z-20 text-sm leading-[1.6] font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className=" text-sm leading-[1.6] font-bold">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.6] font-bold">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
