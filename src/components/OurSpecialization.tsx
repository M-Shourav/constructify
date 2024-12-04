import React from "react";
import Container from "./Container";
import Image from "next/image";
import { bannerImage1 } from "@/assets/images";
import Title from "./Title";
import { FaRegSquare } from "react-icons/fa";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { BsHourglassBottom } from "react-icons/bs";
import { RiLandscapeLine } from "react-icons/ri";
import { SiAntdesign, SiMaterialdesignicons } from "react-icons/si";

const OurSpecialization = () => {
  return (
    <Container className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      <div className="w-full h-full p-6">
        <div className="w-full h-full border-4 border-orange-500">
          <Image
            src={bannerImage1}
            alt="aboutImage"
            className="w-full h-full -mx-6 -mt-8"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Title className="md:text-4xl font-bold tracking-wide text-black/80">
          Our Specialization
        </Title>
        <span className="w-20 h-[4px] bg-orange-600 inline-block" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos delectus
          laudantium placeat assumenda tempora rerum excepturi. Harum dolor,
          doloremque, et eos aspernatur delectus esse quidem, fugit provident
          odio corrupti laboriosam!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-2">
              <Title className="flex items-center gap-3 text-xl">
                <FaRegSquare className="mt-1 text-orange-600 text-3xl" />
                Architecture
              </Title>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae esses
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Title className="flex items-center gap-3 text-xl">
                <MdOutlineAddToPhotos className="mt-1 text-orange-600 text-3xl" />
                Exterior Design
              </Title>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae esses
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Title className="flex items-center gap-3 text-xl">
                <BsHourglassBottom className="mt-1 text-orange-600 text-3xl" />
                Furniture Design
              </Title>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae esses
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-2">
              <Title className="flex items-center gap-3 text-xl">
                <RiLandscapeLine className="mt-1 text-orange-600 text-3xl" />
                Landscape Design
              </Title>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae esses
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Title className="flex items-center gap-3 text-xl">
                <SiMaterialdesignicons className="mt-1 text-orange-600 text-3xl" />
                Site Planning
              </Title>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae esses
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Title className="flex items-center gap-3 text-xl">
                <SiAntdesign className="mt-1 text-orange-600 text-3xl" />
                Interior Design
              </Title>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae esses
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurSpecialization;
