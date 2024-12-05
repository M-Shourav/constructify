/*
import { logo } from "@/assets/images";
import { NavArray } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavMenu = () => {
    setIsOpen(!isOpen);
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
    <div>
      <button
        onClick={handleNavMenu}
        className="w-7 h-5 flex flex-col items-center justify-between group overflow-hidden cursor-pointer"
      >
        <span className="w-full h-[2px] bg-red-400 inline-flex translate-x-0 group-hover:translate-x-3 duration-300 ease-in-out" />
        <span className="w-full h-[2px] bg-red-400 inline-flex translate-x-3 group-hover:translate-x-0 duration-300 ease-in-out" />
        <span className="w-full h-[2px] bg-red-400 inline-flex translate-x-0 group-hover:translate-x-3 duration-300 ease-in-out" />
      </button>
      <div
        className={
          isOpen
            ? "fixed top-0 left-0 w-[65%] min-h-screen bg-gray-200 p-10 ease-in-out duration-500 z-10"
            : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
        }
      >
        <div className="w-full flex items-center justify-between">
          <div className="rounded-full px-1 py-1 border border-green-500">
            <Image
              src={logo}
              alt="logo"
              className="w-12 h-12 object-cover p-1"
            />
          </div>
          <div>
            <button
              onClick={handleNavMenu}
              className="text-2xl cursor-pointer w-8 h-8 rounded-sm flex items-center justify-center hover:text-red-600 border border-transparent duration-300 hover:border-green-500"
            >
              <MdOutlineClose />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          {NavArray?.map((item) => (
            <Link
              key={item?._id}
              href={item?.href}
              className="text-sm  font-normal uppercase hover:underline hover:underline-offset-4 hover:text-orange-500 duration-300 ease-in-out"
            >
              {item?.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;

*/

import { logo } from "@/assets/images";
import { NavArray } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import SocialLinks from "./SocialLinks";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavMenu = () => {
    setIsOpen(!isOpen);
  };

  //   Apply/remove body overflow-hidden when menu is open/closed
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on component unmount
    };
  }, [isOpen]);

  return (
    <div>
      {/* Menu Button */}
      <button
        onClick={handleNavMenu}
        className="w-7 h-5 flex flex-col items-center justify-between group overflow-hidden cursor-pointer"
      >
        <span className="w-full h-[2px] bg-red-400 inline-flex translate-x-0 group-hover:translate-x-3 duration-300 ease-in-out" />
        <span className="w-full h-[2px] bg-red-400 inline-flex translate-x-3 group-hover:translate-x-0 duration-300 ease-in-out" />
        <span className="w-full h-[2px] bg-red-400 inline-flex translate-x-0 group-hover:translate-x-3 duration-300 ease-in-out" />
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen
            ? "fixed top-0 right-0 w-[65%] min-h-screen bg-gray-200 p-10 ease-in-out duration-500 z-10"
            : "fixed right-[-100%] top-0 p-10 ease-in-out duration-500"
        }`}
      >
        {/* Logo and Close Button */}
        <div className="w-full flex items-center justify-between">
          <div className="rounded-full px-1 py-1 border border-green-500">
            <Image
              src={logo}
              alt="logo"
              className="w-12 h-12 object-cover p-1"
            />
          </div>
          <div>
            <button
              onClick={handleNavMenu}
              className="text-2xl cursor-pointer w-8 h-8 rounded-sm flex items-center justify-center hover:text-red-600 border border-transparent duration-300 hover:border-green-500"
            >
              <MdOutlineClose />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-3 mt-5">
          {NavArray?.map((item) => (
            <Link
              key={item?._id}
              href={item?.href}
              onClick={handleNavMenu} // Close menu on link click
              className={`text-sm font-normal uppercase duration-300 ease-in-out ${
                isOpen && item?.title === "Home"
                  ? "bg-gray-300 p-2 rounded-md"
                  : "hover:underline hover:underline-offset-4 hover:text-orange-500"
              }`}
            >
              {item?.title}
            </Link>
          ))}
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
