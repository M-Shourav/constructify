"use client";
import React from "react";
import Container from "./Container";
import Title from "./Title";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { bannerImage1 } from "@/assets/images";
import { motion } from "framer-motion";

const OurDream = () => {
  return (
    <Container className="py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-5 items-start"
      >
        <Title className="text-lg md:text-4xl">
          Welcome to the Concrete Constructions
        </Title>
        <span className="w-20 h-[4px] bg-orange-500 inline-flex" />
        <Title className="md:text-2xl">Where We Build Your Visions</Title>
        <p className="text-sm md:text-base text-gray-500">
          Write a warm welcoming message for visitors.You can mention all the
          benefits or services with some real examples. You can also state how
          you emphasize on their well being. This often shows your concern and
          increases the chances of conversion. Tell people a little more to
          attract.You can mention some contact details as shown below to get in
          touch with visitors.
        </p>
        <div>
          <p className="flex items-center gap-1 text-lg font-semibold text-gray-500">
            <span className="text-sm">
              <FaPhone />
            </span>
            Call Us
          </p>
          <Link
            href={"tel:+8801710267985"}
            className="text-base md:text-2xl font-semibold text-gray-800"
          >
            +8801710267985
          </Link>
        </div>
      </motion.div>
      <div className="w-full h-full p-6">
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full border-4 border-orange-500 "
        >
          <Image
            src={bannerImage1}
            alt="aboutImage"
            className="w-full h-full -mx-6 -mt-8"
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default OurDream;
