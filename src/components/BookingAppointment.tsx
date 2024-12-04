import Image from "next/image";
import React from "react";
import Container from "./Container";
import Title from "./Title";
import { IoIosArrowRoundForward } from "react-icons/io";
import { appointmentImg } from "@/assets/images";

const BookingAppointment = () => {
  return (
    <div className="w-full h-full relative">
      <Image
        src={appointmentImg}
        alt="bannerImage"
        className="w-full max-h-[450px] object-cover"
      />
      <div
        className="w-full h-full absolute top-0 left-0 flex  items-center justify-center
  bg-black bg-opacity-50"
      >
        <Container className="max-w-3xl mx-auto flex flex-col items-center gap-5">
          <span className="w-16 h-[4px] bg-red-500 inline-block" />
          <Title className="md:text-5xl text-white font-semibold">
            Get Your Free Consultation
          </Title>
          <p className="text-sm text-white max-w-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            corporis tenetur repellat dolor architecto temporibus odio, hic ipsa
            maxime consequatur eum omnis. Rerum natus necessitatibus ratione
            suscipit iste, eveniet nihil!
          </p>
          <button
            className="text-xs text-white md:text-base font-semibold bg-orange-500 border border-transparent
      flex items-center justify-center gap-1 px-4 py-3 rounded-sm hover:bg-black
      hover:text-white duration-300 ease-in-out hover:border-green-300"
          >
            <IoIosArrowRoundForward className="mt-1 text-xl" /> Book An
            Appointment
          </button>
        </Container>
      </div>
    </div>
  );
};

export default BookingAppointment;
