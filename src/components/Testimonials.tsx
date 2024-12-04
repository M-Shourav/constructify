import React from "react";
import Container from "./Container";
import Title from "./Title";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { profileImg_1, profileImg_2, profileImg_3 } from "@/assets/images";

const Testimonials = () => {
  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-between">
      <div className="flex flex-col items-start gap-5">
        <Title className="md:text-4xl">What Our Clients Say</Title>
        <span className="w-20 h-[4px] bg-orange-600 inline-block" />
        <p>
          You can use these sections to highlight the features of heading. Use
          these paragraphs to focus on the topic you want. Make sure you keep it
          short and attractive.
        </p>
        <div
          className="w-full h-full flex flex-col md:flex-row items-center gap-5
       shadow-xl border border-gray-100 p-4 md:p-0"
        >
          <div className="w-full h-full p-6 md:p-0">
            <Image
              src={profileImg_1}
              alt="profileImage_1"
              className="w-full h-full object-cover grayscale hover:grayscale-0 
            duration-200 ease-in-out"
            />
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-4xl text-orange-500">
              <FaQuoteLeft />
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div>
              <p className="text-base md:text-xl tracking-wide font-semibold text-gray-600">
                Margaret Curtis
              </p>
              <p className="text-sm md:text-base  tracking-wide text-gray-600">
                Real Estate Developer
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* second testimonials */}
      <div className="flex flex-col gap-7">
        <div
          className="w-full h-full flex flex-col md:flex-row items-center gap-5
       shadow-xl border border-gray-100 p-4 md:p-0"
        >
          <div className="w-full h-full p-6 md:p-0">
            <Image
              src={profileImg_3}
              alt="profileImage_1"
              className="w-full h-full object-cover grayscale hover:grayscale-0 
            duration-200 ease-in-out"
            />
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-4xl text-orange-500">
              <FaQuoteLeft />
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div>
              <p className="text-base md:text-xl tracking-wide font-semibold text-gray-600">
                Matthew Fox
              </p>
              <p className="text-sm md:text-base  tracking-wide text-gray-600">
                Development Company
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full h-full flex flex-col md:flex-row items-center gap-5
       shadow-xl border border-gray-100 p-4 md:p-0"
        >
          <div className="w-full h-full p-6 md:p-0">
            <Image
              src={profileImg_2}
              alt="profileImage_1"
              className="w-full h-full object-cover grayscale hover:grayscale-0 
            duration-200 ease-in-out"
            />
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-4xl text-orange-500">
              <FaQuoteLeft />
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div>
              <p className="text-base md:text-xl tracking-wide font-semibold text-gray-600">
                John Doe
              </p>
              <p className="text-sm md:text-base  tracking-wide text-gray-600">
                Architect
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
