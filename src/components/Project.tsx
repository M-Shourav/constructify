import React from "react";
import Container from "./Container";
import Title from "./Title";
import { projectArray } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "./ui/Button";

const Project = () => {
  return (
    <Container className="py-10 flex flex-col gap-7 ">
      <div className="flex flex-col gap-5">
        <Title className="md:text-4xl">Our Recent Projects</Title>
        <span className="w-20 h-[4px] bg-orange-600 inline-block" />
        <div className="flex flex-col md:flex-row gap-3 items-start md:items-center md:justify-between">
          <p className="max-w-[500px] text-base text-gray-500 tracking-wider">
            You can use these sections to highlight the features of heading. Use
            these paragraphs to focus on the topic you want. Make sure you keep
            it short and attractive.
          </p>
          <Button
            href={"/projects"}
            className="px-4 py-2 bg-orange-500 text-white flex items-center
           justify-center text-sm font-semibold rounded-sm hover:bg-black
           border border-transparent hover:border-green-500 duration-300 ease-in-out"
          >
            <IoIosArrowRoundForward className="mt-1 text-xl" />
            View All Projects
          </Button>
        </div>
      </div>
      {/* project */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {projectArray?.map((item) => (
          <div
            key={item?.title}
            className="border border-gray-200 h-full w-full flex flex-col gap-5 rounded-md  shadow-xl group overflow-hidden"
          >
            <Link href={"/projects"}>
              <Image
                src={item?.images}
                alt="project_images"
                className="w-full object-cover group-hover:scale-110 overflow-hidden duration-300 rounded-md"
              />
            </Link>
            <div className="mb-2 px-4">
              <p className="text-base md:text-xl font-semibold capitalize ">
                {item?.title}
              </p>
              <p className="text-sm font-normal tracking-wide text-gray-500">
                {item?.des}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Project;
