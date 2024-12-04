"use client";
import { storyImage } from "@/assets/images";
import Container from "@/components/Container";
import Offers from "@/components/Offers";
import ProjectMembers from "@/components/ProjectMembers";
import Title from "@/components/Title";
import TopFooter from "@/components/TopFooter";
import Image from "next/image";
import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <>
      <Container className="py-10 md:py-20">
        <div className="py-10 grid grid-cols-1 lg:grid-cols-2  items-start justify-between gap-10 md:gap-20">
          <div className="w-full h-full p-6">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full border-4 border-orange-500 "
            >
              <Image
                src={storyImage}
                alt="aboutImage"
                className="w-full h-full -mx-6 -mt-8"
              />
            </motion.div>
          </div>
          {/* description */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-5"
          >
            <Title className="text-xl md:text-4xl max-w-[450px] ">
              Our Story
            </Title>
            <span className="w-20 h-[4px] bg-orange-500 inline-block" />
            <p className="text-md text-gray-600 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              repudiandae reprehenderit ratione tempore dolorum, eaque pariatur
              dicta veniam neque id distinctio quod voluptatibus quia
              dignissimos totam voluptas delectus omnis iure. Libero quasi
              repellat perspiciatis enim eum quisquam sapiente, ut molestias
              repudiandae nisi ducimus veniam vero eius maxime voluptas vel
              necessitatibus aut? Repellat veritatis inventore quos perspiciatis
              unde dolor tempore natus libero porro earum quam et corrupti quod
              modi, maxime nam saepe odit quae tempora. Rerum mollitia
              voluptatem quam inventore recusandae!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-3 mt-5">
              <p className="flex items-center gap-4 text-lg font-semibold text-gray-600">
                <span className="text-2xl text-orange-500">
                  <IoIosArrowDropdownCircle />
                </span>
                Professional Specialist
              </p>
              <p className="flex items-center gap-4 text-lg font-semibold text-gray-600">
                <span className="text-2xl text-orange-500">
                  <IoIosArrowDropdownCircle />
                </span>
                Brilliant Ideas
              </p>
              <p className="flex items-center gap-4 text-lg font-semibold text-gray-600">
                <span className="text-2xl text-orange-500">
                  <IoIosArrowDropdownCircle />
                </span>
                Precise Builders
              </p>
              <p className="flex items-center gap-4 text-lg font-semibold text-gray-600">
                <span className="text-2xl text-orange-500">
                  <IoIosArrowDropdownCircle />
                </span>
                24/7 Assistant
              </p>
            </div>
          </motion.div>
        </div>
        {/* offers  */}
        <Offers />
        {/* projects members */}
        <ProjectMembers />
      </Container>
      <TopFooter />
    </>
  );
};

export default AboutPage;
