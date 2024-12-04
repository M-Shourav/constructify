import ContactLeft from "@/components/ContactLeft";
import ContactRight from "@/components/ContactRight";
import Container from "@/components/Container";
import SocialLinks from "@/components/SocialLinks";
import Title from "@/components/Title";
import React from "react";

const ContactPage = () => {
  return (
    <Container className="py-10 md:py-20 flex flex-col gap-10">
      <div className="w-full h-full">
        <Title className="md:text-3xl">Get in Touch</Title>
        <span className="w-20 h-[4px] bg-orange-600 inline-block" />
        <p className="max-w-2xl text-sm md:text-lg text-gray-500 tracking-wider">
          Add a couple of lines that tell users how easily they can get in touch
          with you. People prefer services where they can contact providers
          right away.
        </p>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row  gap-5">
        <div className="bg-gray-300 w-full h-full p-6 flex flex-col gap-10">
          <Title className="md:text-3xl">Send Us A Message</Title>
          <ContactLeft />
        </div>
        <div
          className=" bg-gray-100 border border-gray-200 w-full h-full p-6
         flex flex-col gap-10"
        >
          <Title>Contact Info</Title>
          <ContactRight />
          <Title className="md:text-3xl">Follow US</Title>
          <SocialLinks />
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
