"use client";
import React from "react";
import Container from "./Container";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <Container>
      <div className="w-full py-20 grid grid-cols-2 md:grid-cols-4 items-center gap-10">
        <div className="flex flex-col gap-2 items-center border border-transparent border-r-gray-400">
          <h1 className="text-xl md:text-5xl font-semibold text-orange-500">
            <CountUp end={6820} duration={8} />+
          </h1>
          <p className="text-base md:text-xl text-gray-500 uppercase">
            clients
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center border border-transparent border-r-gray-400">
          <h1 className="text-xl md:text-5xl font-semibold text-orange-500">
            <CountUp end={4000} duration={8} />+
          </h1>
          <p className="text-base md:text-xl text-gray-500 uppercase">
            projects
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center border border-transparent border-r-gray-400">
          <h1 className="text-xl md:text-5xl font-semibold text-orange-500">
            <CountUp end={3568} duration={8} />+
          </h1>
          <p className="text-base md:text-xl text-gray-500 uppercase">
            Repairing
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center border border-transparent border-r-gray-400">
          <h1 className="text-xl md:text-5xl font-semibold text-orange-500">
            <CountUp end={1530} duration={8} />+
          </h1>
          <p className="text-base md:text-xl text-gray-500 uppercase">awards</p>
        </div>
      </div>
    </Container>
  );
};

export default Counter;
