import React from "react";
import Container from "./Container";
import Image from "next/image";
import { footerLogo } from "@/assets/images";
import Title from "./Title";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
import { companyArray, servicesArray } from "@/constants";

const Footer = () => {
  return (
    <div className="w-full h-500px bg-black text-white py-5">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-7 py-10 px-8 md:px-4">
        <div className="w-full flex flex-col gap-3 md:gap-5">
          <Link href={"/"}>
            {" "}
            <Image
              src={footerLogo}
              alt="logo"
              className="w-50 md:w-[80%] object-cover"
            />
          </Link>
          <div className="flex flex-col gap-y-5 mt-3">
            <p className="text-sm md:text-base font-normal text-gray-300">
              Natus eget occaecati, lobortis, vestibulum nam eros, risus lacinia
              lacus.Lorem accusantium.
            </p>
            <SocialLinks />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 md:gap-5">
          <Title className="md:text-2xl">Our Company</Title>
          <div className="flex flex-col gap-y-1 mt-3">
            {companyArray?.map((item) => (
              <Link
                key={item?.title}
                href={item?.href}
                className="w-fit text-base text-gray-300 hover:underline 
                underline-offset-4 duration-200 hover:text-orange-500"
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 md:gap-5">
          <Title className="md:text-2xl">Our Services</Title>
          <div className="flex flex-col gap-y-1 mt-3">
            {servicesArray?.map((item) => (
              <Link
                key={item?.title}
                href={item?.href}
                className="w-fit text-base text-gray-300 hover:underline 
                underline-offset-4 duration-200 hover:text-orange-500"
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 md:gap-5">
          <Title className="md:text-2xl">Contact Details</Title>
          <div className="flex flex-col gap-y-1 mt-3">
            <p className="text-sm md:text-base text-gray-300">
              12/A Green road Panthapath Dhaka Bangladesh.
            </p>
            <p className="text-gray-300">
              <span className="text-sm md:text-base font-semibold">Phone:</span>
              +8801710267985
            </p>
            <div className="flex items-center gap-1">
              <p className="text-sm md:text-base font-semibold">E-mail:</p>
              <Link
                href={"mailto:am.masum1129@gmail.com"}
                className="text-base hover:text-orange-500 duration-300"
              >
                am.masum1129@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className="w-full flex items-center justify-center">
        <p className="text-sm md:text-base font-normal tracking-wide text-gray-300">
          &copy;2024 All Right Reserved @Masum-Ahmed.
        </p>
      </div>
    </div>
  );
};

export default Footer;
