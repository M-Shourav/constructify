"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  profileImg_2,
  profileImg_3,
  project_2,
  project_4,
  project_5,
  team_3,
} from "@/assets/images";
import Title from "./Title";
import { IoIosArrowRoundForward, IoMdArrowDropright } from "react-icons/io";
import Button from "./ui/Button";

const RecentProjects = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* images */}
        <div className="w-full md:w-11/12 h-[500px] relative border-4 border-red-500 bg-gray-200/80">
          <div className="w-full h-full ">
            <Image
              src={project_2}
              alt="project_3"
              className=" h-full object-cover absolute -top-10 -left-4"
            />
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col gap-4  justify-center px-8 h-[200px] bg-white absolute bottom-0 left-0"
            >
              <p className="text-base font-semibold text-gray-500">
                Lorem lacus reiciendis illo placerat tempus temporibus deserunt
                commodo incidunt error unde. Facilisis aspernatur. Recusandae
                illum
              </p>
              <div className="flex items-center gap-2">
                <Image
                  src={profileImg_2}
                  alt="profileImage"
                  className="w-10 h-10 object-cover rounded-full flex items-center justify-center"
                />
                <div className="flex flex-col items-start">
                  <h2 className="text-sm md:text-base text-gray-600 font-normal">
                    John Doe
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600">
                    CEO At NY Water Park
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* description */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-y-5 items-start"
        >
          <p className="text-sm font-semibold text-gray-800">
            Commercial Properties
          </p>
          <Title className="md:text-4xl">NY Water Park</Title>
          <span className="w-20 h-[4px] bg-orange-600 inline-block" />
          <p className="text-base font-normal text-gray-500 tracking-wide">
            You can use these sections to highlight the features of heading. Use
            these paragraphs to focus on the topic you want. Make sure you keep
            it short and attractive.
          </p>
          <div className="flex flex-col gap-y-1 items-start">
            <p className="flex items-center gap-2 text-base text-gray-600">
              <span className="text-2xl font-semibold text-orange-500 mt-1">
                <IoMdArrowDropright />
              </span>
              Blandit fugit dicta quibusdam maxime tempor
            </p>
            <p className="flex items-center gap-2 text-base text-gray-600">
              <span className="text-2xl font-semibold text-orange-500 mt-1">
                <IoMdArrowDropright />
              </span>
              Blandit fugit dicta quibusdam maxime tempor
            </p>
            <p className="flex items-center gap-2 text-base text-gray-600">
              <span className="text-2xl font-semibold text-orange-500 mt-1">
                <IoMdArrowDropright />
              </span>
              Blandit fugit dicta quibusdam maxime tempor
            </p>
          </div>
          <Button
            href="/projects"
            className="text-xs text-white md:text-base font-semibold bg-orange-500 border border-transparent
          flex items-center justify-center gap-1 px-4 py-3 rounded-sm hover:bg-black
          hover:text-white duration-300 ease-in-out hover:border-green-300"
          >
            <IoIosArrowRoundForward className="mt-1 text-xl" /> Visit Project
          </Button>
        </motion.div>
      </div>
      {/* second project */}
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* description */}
        <div className="flex flex-col gap-y-5 items-start mb-5">
          <p className="text-sm font-semibold text-gray-800">Real Estate</p>
          <Title className="md:text-4xl">Reinstate West Project</Title>
          <span className="w-20 h-[4px] bg-orange-600 inline-block" />
          <p className="text-base font-normal text-gray-500 tracking-wide">
            You can use these sections to highlight the features of heading. Use
            these paragraphs to focus on the topic you want. Make sure you keep
            it short and attractive.
          </p>
          <div className="flex flex-col gap-y-1 items-start">
            <p className="flex items-center gap-2 text-base text-gray-600">
              <span className="text-2xl font-semibold text-orange-500 mt-1">
                <IoMdArrowDropright />
              </span>
              Blandit fugit dicta quibusdam maxime tempor
            </p>
            <p className="flex items-center gap-2 text-base text-gray-600">
              <span className="text-2xl font-semibold text-orange-500 mt-1">
                <IoMdArrowDropright />
              </span>
              Blandit fugit dicta quibusdam maxime tempor
            </p>
            <p className="flex items-center gap-2 text-base text-gray-600">
              <span className="text-2xl font-semibold text-orange-500 mt-1">
                <IoMdArrowDropright />
              </span>
              Blandit fugit dicta quibusdam maxime tempor
            </p>
          </div>
          <Button
            href="/projects"
            className="text-xs text-white md:text-base font-semibold bg-orange-500 border border-transparent
          flex items-center justify-center gap-1 px-4 py-3 rounded-sm hover:bg-black
          hover:text-white duration-300 ease-in-out hover:border-green-300"
          >
            <IoIosArrowRoundForward className="mt-1 text-xl" /> Visit Project
          </Button>
        </div>
        {/* images */}
        <div className="w-full md:w-11/12 h-[500px] relative border-4 border-red-500 bg-gray-200/80">
          <div className="w-full h-full ">
            <Image
              src={project_4}
              alt="project_3"
              className=" h-full object-cover absolute -top-10 -left-4 shadow-xl border border-t-gray-100"
            />
            <div className="w-full flex flex-col gap-4  justify-center px-8 h-[200px] bg-white absolute bottom-0 left-0">
              <p className="text-base font-semibold text-gray-500">
                Lorem lacus reiciendis illo placerat tempus temporibus deserunt
                commodo incidunt error unde. Facilisis aspernatur. Recusandae
                illum
              </p>
              <div className="flex items-center gap-2">
                <Image
                  src={team_3}
                  alt="profileImage"
                  className="w-10 h-10 object-cover rounded-full flex items-center justify-center"
                />
                <div className="flex flex-col items-start">
                  <h2 className="text-sm md:text-base text-gray-600 font-normal">
                    Margaret Curtis
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600">
                    Director at West Project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third project */}
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* images */}
        <div className="w-full md:w-11/12 h-[500px] relative border-4 border-red-500 bg-gray-200/80">
          <div className="w-full h-full ">
            <Image
              src={project_5}
              alt="project_3"
              className=" h-full object-cover absolute -top-10 -left-4 shadow-xl border border-t-gray-100"
            />
            <div className="w-full flex flex-col gap-4  justify-center px-8 h-[200px] bg-white absolute bottom-0 left-0">
              <p className="text-base font-semibold text-gray-500">
                Lorem lacus reiciendis illo placerat tempus temporibus deserunt
                commodo incidunt error unde. Facilisis aspernatur. Recusandae
                illum
              </p>
              <div className="flex items-center gap-2">
                <Image
                  src={profileImg_3}
                  alt="profileImage"
                  className="w-10 h-10 object-cover rounded-full flex items-center justify-center"
                />
                <div className="flex flex-col items-start">
                  <h2 className="text-sm md:text-base text-gray-600 font-normal">
                    Matthew Fox
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600">
                    CEO At Sky Tail Ltd.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="flex flex-col gap-y-5 items-start">
          <p className="text-sm font-semibold text-gray-800">
            Commercial Properties
          </p>
          <Title className="md:text-4xl">Sky Tail Tower</Title>
          <span className="w-20 h-[4px] bg-orange-600 inline-block" />
          <p className="text-base font-normal text-gray-500 tracking-wide">
            You can use these sections to highlight the features of heading. Use
            these paragraphs to focus on the topic you want. Make sure you keep
            it short and attractive.
          </p>
          <div className="flex flex-col gap-y-1 items-start">
            <p className="flex items-center gap-2 text-base text-gray-600">
              <span className="text-2xl font-semibold text-orange-500 mt-1">
                <IoMdArrowDropright />
              </span>
              Blandit fugit dicta quibusdam maxime tempor
            </p>
            <p className="flex items-center gap-2 text-base text-gray-600">
              <span className="text-2xl font-semibold text-orange-500 mt-1">
                <IoMdArrowDropright />
              </span>
              Blandit fugit dicta quibusdam maxime tempor
            </p>
            <p className="flex items-center gap-2 text-base text-gray-600">
              <span className="text-2xl font-semibold text-orange-500 mt-1">
                <IoMdArrowDropright />
              </span>
              Blandit fugit dicta quibusdam maxime tempor
            </p>
          </div>
          <Button
            href="/projects"
            className="text-xs text-white md:text-base font-semibold bg-orange-500 border border-transparent
          flex items-center justify-center gap-1 px-4 py-3 rounded-sm hover:bg-black
          hover:text-white duration-300 ease-in-out hover:border-green-300"
          >
            <IoIosArrowRoundForward className="mt-1 text-xl" /> Visit Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
