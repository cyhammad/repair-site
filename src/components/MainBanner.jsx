import { Plus } from "lucide-react";
import React from "react";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";

export default function MainBanner() {
  return (
    <div className="flex items-center justify-center w-full relative">
      <div className="grid md:grid-cols-2 mt-[100px] px-5 w-full max-w-7xl md:text-start text-center md:min-h-[75vh]">
        <div className="flex flex-col py-10 h-full items-center md:items-start mb-10 md:max-w-[80%] gap-6">
          <h1 className="text-5xl font-black">
            Whether it's your washing machine or your fridge...
          </h1>
          <span className="text-lg font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ipsa,
            voluptatem a odit ad eaque molestias quidem
          </span>
          <div className="flex items-center gap-3">
            <PrimaryButton>Call Us</PrimaryButton>
            <SecondaryButton>Whatsapp Us</SecondaryButton>
          </div>
        </div>
        <div className="flex w-full h-fit items-center justify-center">
          <div className="relative max-w-[600px] w-full h-full">
            <BlobBG />
            <BlobImage imgUrl="/repair.webp" />
            <div className="absolute right-0 top-[10px]">
              <Plus size={24} className="text-primary2" />
            </div>
            <div className="absolute right-[60px] -top-[20px]">
              <Plus size={24} className="text-primary2" />
            </div>
            <div className="absolute right-[42px] top-[20px]">
              <Plus size={24} className="text-primary2" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute -z-10 w-24 h-32 bg-blob bottom-0 left-0"
        style={{
          borderRadius: "0% 100% 100% 0% / 100% 32% 68% 0%",
        }}
      ></div>
    </div>
  );
}
const BlobImage = ({ imgUrl }) => {
  return (
    <div
      className="w-full absolute aspect-[1.2/1] bg-red-200"
      style={{
        borderRadius: "13% 87% 59% 41% / 19% 33% 67% 81%",
        background: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

const BlobBG = () => (
  <div
    className="w-full aspect-[1.2/1] bg-blob absolute"
    style={{
      borderRadius: "89% 11% 39% 61% / 67% 14% 86% 33%",
    }}
  ></div>
);
