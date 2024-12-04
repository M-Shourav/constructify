import React from "react";
import Title from "./Title";
import Image from "next/image";
import { offerArray } from "@/constants";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Offers = () => {
  return (
    <div className="w-full h-full py-10 flex flex-col gap-5 items-start">
      <div>
        <Title className="md:text-4xl">What We Offer</Title>
        <span className="w-20 h-[4px] bg-orange-600 inline-block" />
        <p className="max-w-[500px] text-base text-gray-500 tracking-wider">
          You can use these sections to highlight the features of heading. Use
          these paragraphs to focus on the topic you want. Make sure you keep it
          short and attractive.
        </p>
      </div>
      {/* offer card */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-5
        w-full h-full"
      >
        {offerArray?.map((item) => (
          <div
            className="border border-gray-200 rounded-md  flex
             flex-col items-center gap-1 shadow-xl"
            key={item?.title}
          >
            <Image
              src={item?.images}
              alt="TeamImages"
              className=" rounded-t-md object-cover w-full"
            />
            <div className=" px-4 py-5 flex flex-col gap-2">
              <Title>{item?.title}</Title>
              <p className="text-base font-normal text-gray-500">{item?.des}</p>
              <Link
                href={"/"}
                className="w-fit flex items-center gap-2 text-orange-500 hover:text-gray-600 duration-300"
              >
                <span>
                  <FaArrowRightLong className="mt-1" />
                </span>
                Learn More...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
