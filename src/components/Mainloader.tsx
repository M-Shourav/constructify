import React from "react";

const Mainloader = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-y-1 relative">
        <span
          className="w-10 h-10 rounded-full border-4 border-transparent border-b-red-500
        border-l-green-500 border-r-red-500 animate-spin inline-block"
        />
        <p className="text-lg font-semibold tracking-wide ">Loading...</p>
      </div>
    </div>
  );
};

export default Mainloader;
