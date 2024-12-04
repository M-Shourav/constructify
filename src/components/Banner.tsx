import { bannerImage } from "@/assets/images";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "./ui/Button";

const Banner = () => {
  return (
    <div className="w-full h-full relative">
      <Image
        src={bannerImage}
        alt="bannerImage"
        className="w-full h-full object-cover"
      />
      <div className="w-full h-full bg-black bg-opacity-35 absolute top-0 left-0">
        <div
          className="px-8 flex flex-col gap-3 md:gap-5 items-start justify-between 
            py-5 md:py-10 text-white"
        >
          <h2 className="text-lg md:text-6xl font-semibold max-w-[400px]">
            Broad Vision Honest Service Great Value
          </h2>
          <p className="text-sm md:text-base">
            Our goal then and now is to provide quality on time projects
          </p>
          <div className="flex items-center gap-5">
            <Button href="/">
              <span className="mt-1">
                <FaArrowRightLong />
              </span>
              Get Free Quote
            </Button>
            <Button
              className="px-4 py-2.5 md:py-4 rounded-sm flex items-center gap-1 
            text-base font-semibold duration-300
            border border-transparent hover:border-gray-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
