import Container from "@/components/Container";
import Title from "@/components/Title";
import TopFooter from "@/components/TopFooter";
import React from "react";
import { BsHourglassBottom } from "react-icons/bs";
import { FaRegSquare } from "react-icons/fa";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { RiLandscapeLine } from "react-icons/ri";
import { SiAntdesign, SiMaterialdesignicons } from "react-icons/si";

const ServicePage = () => {
  return (
    <>
      <Container className="py-10 md:py-20 flex flex-col gap-7">
        <div>
          <Title className="md:text-4xl">Our Services</Title>
          <span className="w-20 h-[4px] bg-orange-600 inline-block" />
          <p className="max-w-[500px] text-sm md:text-lg text-gray-500 tracking-wider">
            You can use these sections to highlight the features of heading. Use
            these paragraphs to focus on the topic you want. Make sure you keep
            it short and attractive.
          </p>
        </div>
        {/* services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5 md:gap-10">
          <div className="flex flex-col gap-y-3">
            <p className="text-base md:text-2xl text-orange-500 font-semibold">
              0.1
            </p>
            <h2 className="text-base md:text-2xl font-semibold tracking-wide">
              Meticulous Planning
            </h2>
            <p className="text-base font-normal text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio eius unde quas laboriosam tempore.
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="text-base md:text-2xl text-orange-500 font-semibold">
              0.2
            </p>
            <h2 className="text-base md:text-2xl font-semibold tracking-wide">
              Completion On Time
            </h2>
            <p className="text-base font-normal text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio eius unde quas laboriosam tempore.
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="text-base md:text-2xl text-orange-500 font-semibold">
              0.3
            </p>
            <h2 className="text-base md:text-2xl font-semibold tracking-wide">
              Perfect Execution
            </h2>
            <p className="text-base font-normal text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio eius unde quas laboriosam tempore.
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="text-base md:text-2xl text-orange-500 font-semibold">
              0.4
            </p>
            <h2 className="text-base md:text-2xl font-semibold tracking-wide">
              Affordable Prices
            </h2>
            <p className="text-base font-normal text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio eius unde quas laboriosam tempore.
            </p>
          </div>
        </div>
        {/* specialization */}
        <div className="flex flex-col gap-5 md:gap-10 items-start">
          <div className="flex flex-col gap-y-5 items-start">
            <Title className="md:text-3xl">Our Specialization</Title>
            <span className="w-20 h-[4px] bg-orange-600 inline-block" />
            <p className="max-w-[500px] text-gray-600 font-normal tracking-wide">
              You can use these sections to highlight the features of heading.
              Use these paragraphs to focus on the topic you want. Make sure you
              keep it short and attractive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 md:gap-7">
            <div className="flex flex-col gap-1 md:gap-3">
              <span className="text-xl md:text-3xl text-orange-500">
                <FaRegSquare />
              </span>
              <h3 className="text-lg md:text-2xl font-semibold">
                Architecture
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                A short description of this quality. Make these lines enticing
                enough to prove that you are the best in all you do.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xl md:text-3xl text-orange-500">
                <RiLandscapeLine />
              </span>
              <h3 className="text-lg md:text-2xl font-semibold">
                Landscape Design
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                A short description of this quality. Make these lines enticing
                enough to prove that you are the best in all you do.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xl md:text-3xl text-orange-500">
                <MdOutlineAddToPhotos />
              </span>
              <h3 className="text-lg md:text-2xl font-semibold">
                Exterior Design
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                A short description of this quality. Make these lines enticing
                enough to prove that you are the best in all you do.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xl md:text-3xl text-orange-500">
                <SiMaterialdesignicons />
              </span>
              <h3 className="text-lg md:text-2xl font-semibold">
                Site Planning
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                A short description of this quality. Make these lines enticing
                enough to prove that you are the best in all you do.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xl md:text-3xl text-orange-500">
                <BsHourglassBottom />
              </span>
              <h3 className="text-lg md:text-2xl font-semibold">
                Furniture Design
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                A short description of this quality. Make these lines enticing
                enough to prove that you are the best in all you do.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xl md:text-3xl text-orange-500">
                <SiAntdesign />
              </span>
              <h3 className="text-lg md:text-2xl font-semibold">
                Interior Design
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                A short description of this quality. Make these lines enticing
                enough to prove that you are the best in all you do.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <TopFooter />
    </>
  );
};

export default ServicePage;
