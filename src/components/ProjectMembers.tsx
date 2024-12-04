"use client";
import React from "react";
import Container from "./Container";
import Title from "./Title";
import { teamArray } from "@/constants";
import Image from "next/image";
import TeamSocialAccount from "./TeamSocialAccount";

const ProjectMembers = () => {
  return (
    <Container className="py-10 flex flex-col gap-5 items-start">
      <div>
        <Title className="md:text-4xl">Our Expert Team</Title>
        <span className="w-20 h-[4px] bg-orange-600 inline-block" />
        <p className="max-w-[500px] text-base text-gray-500 tracking-wider">
          You can use these sections to highlight the features of heading. Use
          these paragraphs to focus on the topic you want. Make sure you keep it
          short and attractive.
        </p>
      </div>
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-5
        w-full h-full"
      >
        {teamArray?.map((item) => (
          <div
            className="border border-gray-200 rounded-md  flex
             flex-col items-center gap-1 shadow-xl"
            key={item?.name}
          >
            <Image
              src={item?.images}
              alt="TeamImages"
              className=" rounded-t-md object-cover "
            />
            <div className=" px-4 py-5">
              <Title>{item?.name}</Title>
              <p className="text-base font-normal text-gray-500">
                {item?.title}
              </p>
              <TeamSocialAccount />
            </div>
          </div>
        ))}
      </div>
      {/* count value */}
    </Container>
  );
};

export default ProjectMembers;
