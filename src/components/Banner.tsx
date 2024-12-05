"use client";
import { bannerImage } from "@/assets/images";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "./ui/Button";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div className="w-full h-full relative">
      <Image
        src={bannerImage}
        alt="bannerImage"
        className="w-full h-full object-cover"
      />
      <div className="w-full h-full bg-black bg-opacity-35 absolute top-0 left-0">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="px-8 flex flex-col gap-3 md:gap-5 items-start justify-center 
            py-5 md:py-10 text-white mb-2 md:mb-0 absolute md:top-20 md:left-0"
        >
          <h2 className="text-lg md:text-2xl lg:text-6xl font-semibold max-w-[400px]">
            Broad Vision Honest Service Great Value
          </h2>
          <p className="text-sm md:text-base">
            Our goal then and now is to provide quality on time projects
          </p>
          <div className="flex items-center gap-5">
            <Button
              href="/"
              className="py-1.5 md:py-2 lg:py-2.5 text-sm md:text-base "
            >
              <span className="mt-1">
                <FaArrowRightLong />
              </span>
              Get Free Quote
            </Button>
            <Button
              className="py-1.5 md:py-2 lg:py-2.5  rounded-sm flex items-center gap-1 
            text-sm md:text-base font-semibold duration-300
            border border-transparent hover:border-gray-300"
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
