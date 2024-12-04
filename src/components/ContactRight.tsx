import React from "react";
import Title from "./Title";
import { FaClock, FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const ContactRight = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* call us  */}
      <div className="flex flex-col gap-2 items-start">
        <div className="flex items-center gap-4">
          <span className="text-xl text-orange-500 px-2 py-2 mt-2 bg-red-200 rounded-full inline-block">
            <FaPhone />
          </span>
          <Title>Call Us</Title>
        </div>
        <div className="flex flex-col gap-y-2 mx-10 text-sm md:text-base">
          <p className=" font-normal text-gray-500">+8801710267985</p>
          <p className="font-normal text-gray-500">+8801826341073</p>
        </div>
      </div>
      {/* location */}
      <div className="flex flex-col gap-2 items-start">
        <div className="flex items-center gap-4">
          <span className="text-xl text-orange-500 px-2 py-2 mt-2 bg-red-200 rounded-full inline-block">
            <IoLocationSharp />
          </span>
          <Title>Our Location</Title>
        </div>
        <div className="w-full flex flex-col gap-y-2 mx-10">
          <p className="text-sm md:text-base font-normal text-gray-500">
            12/A Green Road Panthapath, Dhaka,Bangladesh
          </p>
        </div>
      </div>
      {/* email */}
      <div className="flex flex-col gap-2 items-start">
        <div className="flex items-center gap-4">
          <span className="text-xl text-orange-500 px-2 py-2 mt-2 bg-red-200 rounded-full inline-block">
            <MdEmail />
          </span>
          <Title>Our Email</Title>
        </div>
        <div className="w-full flex flex-col gap-y-2 mx-10">
          <Link
            href={"mailto:am.masum1129@gmail.com"}
            className="text-sm md:text-base font-normal text-gray-500"
          >
            am.masum1129@gmail.com
          </Link>
          <Link
            href={"mailto:muhammadshourav625@gmail.com"}
            className="text-sm md:text-base font-normal text-gray-500"
          >
            muhammadshourav625@gmail.com
          </Link>
        </div>
      </div>
      {/* working hour */}
      <div className="flex flex-col gap-2 items-start">
        <div className="flex items-center gap-4">
          <span className="text-xl text-orange-500 px-2 py-2 mt-2 bg-red-200 rounded-full inline-block">
            <FaClock />
          </span>
          <Title>Working Hour</Title>
        </div>
        <div className="w-full flex flex-col gap-y-2 mx-10">
          <p className=" font-normal text-gray-500">Mon-Fri: 10AM-5PM</p>
          <p className="font-normal text-gray-500">Sat-Sun: 10AM-1PM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactRight;
