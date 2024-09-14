"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Footer({ company = "UAE Appliances Care" }) {
  return (
    <footer className="w-full relative flex flex-col">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={
            company === "Siemens"
              ? "#019997"
              : company === "Bosch"
              ? "#F80000"
              : company === "Lg"
              ? "#A50034"
              : company === "Samsung"
              ? "#000000"
              : "#17497C"
          }
          fillOpacity="1"
          d="M0,256L26.7,266.7C53.3,277,107,299,160,288C213.3,277,267,235,320,229.3C373.3,224,427,256,480,240C533.3,224,587,160,640,160C693.3,160,747,224,800,224C853.3,224,907,160,960,122.7C1013.3,85,1067,75,1120,85.3C1173.3,96,1227,128,1280,128C1333.3,128,1387,96,1413,80L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
      <div
        className={cn(
          "text-white flex flex-col items-center justify-center w-full",
          company === "Siemens"
            ? "bg-siemensPrimary"
            : company === "Bosch"
            ? "bg-boschPrimary"
            : company === "Lg"
            ? "bg-lgPrimary"
            : company === "Samsung"
            ? "bg-samsungPrimary"
            : "bg-secondary"
        )}
      >
        <div className="grid w-full max-w-6xl px-5 pt-10 pb-20 gap-8 sm:grid-cols-[1fr_0.5fr_0.5fr]">
          <div className="flex flex-col max-w-[75%] gap-5">
            <h1 className="text-4xl">UAE Appliances Care</h1>
            <span className="text-white/90">
              At Fast Repairs, we specialize in repairing a wide range of home
              appliances, ensuring they run smoothly and efficiently. Our team
              of certified technicians is dedicated to providing top-notch
              service for all your appliance repair needs.
            </span>
          </div>
          <div className="flex flex-col text-white/75 w-full gap-2">
            <h1 className="text-xl font-black text-white">Quick Links</h1>
            <Link className="hover:text-white" href="/">
              Home
            </Link>
            <Link className="hover:text-white" href="/about">
              About us
            </Link>
            <Link className="hover:text-white" href="/services">
              Services
            </Link>
            <Link className="hover:text-white" href="/contact">
              Contact
            </Link>
          </div>
          <div className="flex flex-col text-white/75 w-full gap-2">
            <h1 className="text-xl font-black text-white">Hire Us</h1>
            <span className="text-white/90">
              You can hire us using call or whatsapp. We are available 24/7 to
              help you.
            </span>
            <button
              onClick={() => {
                window.location.href = `tel:${phoneNumber}`;
              }}
              className={cn(
                "mt-2 text-start hover:underline",
                company === "Lg"
                  ? "text-white font-bold"
                  : company === "Samsung"
                  ? "text-white font-bold"
                  : company === "Bosch"
                  ? "text-white font-bold"
                  : company === "Siemens"
                  ? "text-white font-bold"
                  : "text-primary/80"
              )}
            >
              Call us now
            </button>
            <button
              onClick={() => {
                window.location.href = `https://wa.me/${phoneNumber}`;
              }}
              className={cn(
                "mt-2 text-start hover:underline",
                company === "Lg"
                  ? "text-white font-bold"
                  : company === "Samsung"
                  ? "text-white font-bold"
                  : company === "Bosch"
                  ? "text-white font-bold"
                  : company === "Siemens"
                  ? "text-white font-bold"
                  : "text-primary/80"
              )}
            >
              Talk on whatsapp
            </button>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 w-full flex items-center justify-center">
          &copy; 2024 UAE Appliances Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
