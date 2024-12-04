import Banner from "@/components/Banner";
import BookingAppointment from "@/components/BookingAppointment";
import Counter from "@/components/Counter";
import OurDream from "@/components/OurDream";
import OurSpecialization from "@/components/OurSpecialization";
import Project from "@/components/Project";
import ProjectMembers from "@/components/ProjectMembers";
import Testimonials from "@/components/Testimonials";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <OurDream />
      <BookingAppointment />
      <OurSpecialization />
      <Testimonials />
      <Project />
      <ProjectMembers />
      <Counter />
    </div>
  );
};

export default HomePage;
