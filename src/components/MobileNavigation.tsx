import { logo } from "@/assets/images";
import { NavArray } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import SocialLinks from "./SocialLinks";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburger = (e: any) => {
    setIsOpen(!isOpen);
    console.log(e);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <div className="">
      <div
        onClick={handleHamburger}
        className="w-6 h-5 flex flex-col items-center justify-between overflow-hidden group cursor-pointer "
      >
        <span className="w-full h-[2px] bg-orange-500 inline-flex translate-x-0 group-hover:translate-x-3 duration-300 ease-in-out" />
        <span className="w-full h-[2px] bg-orange-500 inline-flex translate-x-3 group-hover:-translate-x-0 duration-300 ease-in-out " />
        <span className="w-full h-[2px] bg-orange-500 inline-flex translate-x-0 group-hover:translate-x-3 duration-300 ease-in-out" />
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen
            ? "fixed top-0 left-0 w-[65%] p-10 bg-gray-300 h-screen z-30 duration-500 ease-in-out"
            : "fixed top-0 left-[-100%] p-10 duration-500 ease-in"
        }`}
      >
        <div className="w-full flex items-center justify-between">
          <Image
            src={logo}
            alt="logo"
            className="w-12 h-12 border p-1 border-green-500 rounded-full object-cover"
          />
          <span
            onClick={handleHamburger}
            className="text-2xl hover:text-red-500 duration-300 
           cursor-pointer px-2 py-2 rounded-sm border border-transparent
            hover:border-blue-600"
          >
            <MdOutlineClose />
          </span>
        </div>
        <div className="flex flex-col items-start gap-3 py-7">
          {NavArray?.map((item) => (
            <Link
              key={item?._id}
              href={item?.href}
              className="flex items-center gap-2 text-lg"
            >
              <span className=" mt-1 w-4 h-4 border-[3px] border-transparent border-b-green-500 border-t-orange-500 animate-spin rounded-full inline-flex" />
              {item?.title}
            </Link>
          ))}
          <SocialLinks />
        </div>
      </div>
      {/* overly */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-20"></div>}
    </div>
  );
};

export default MobileNavigation;
