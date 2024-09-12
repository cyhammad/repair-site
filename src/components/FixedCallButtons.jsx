"use client";

import { phoneNumber } from "@/lib/phone";
import Image from "next/image";

export default function FixedCallButtons() {
  return (
    <div className="fixed bottom-0 w-screen z-[101] px-3 py-2 pointer-events-none">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <button
          onClick={() => {
            window.location.href = `https://wa.me/${phoneNumber}`;
          }}
          className="rounded-md flex items-center justify-center h-14 w-14 bg-green-400 border border-green-600 pointer-events-auto"
        >
          <Image quality={100} src="/whatsapp.svg" alt="Whatsapp" width={40} height={40} />
        </button>
        <button
          onClick={() => {
            window.location.href = `tel:${phoneNumber}`;
          }}
          className="rounded-md flex items-center justify-center h-14 w-14 border-black border bg-secondary pointer-events-auto"
        >
          <Image quality={100} src="/call.svg" alt="Call us" width={35} height={35} />
        </button>
      </div>
    </div>
  );
}
