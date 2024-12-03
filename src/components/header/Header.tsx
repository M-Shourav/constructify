import { logo } from "@/assets/images";
import { NavArray } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../Container";
import SocialLinks from "../SocialLinks";

const Header = () => {
  return (
    <div className="w-full h-20 mx-auto bg-white shadow-md">
      <Container className="w-full h-full flex items-center justify-between gap-7">
        <Link href={"/"} className="w-full ">
          <Image
            src={logo}
            alt="logo"
            className="w-24 h-16 border-2 border-transparent hover:border-orange-500 duration-300"
          />
        </Link>
        <div className=" hidden md:inline-flex items-center gap-7">
          {NavArray?.map((item) => (
            <Link
              key={item?._id}
              href={item?.href}
              className="text-sm  uppercase font-semibold tracking-wide hover:text-orange-500
               duration-300 relative group"
            >
              {item?.title}
              <div className="w-0 h-[2px] bg-black group-hover:w-full duration-500" />
            </Link>
          ))}
          <SocialLinks />
        </div>
        {/* menuBar */}
        {/* <div className="inline-flex items-center  md:hidden ">
          <IoMdMenu />
        </div> */}
      </Container>
    </div>
  );
};

export default Header;
