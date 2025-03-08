
import React from "react";
import { TiTick } from "react-icons/ti";


const ClonedPage = () => {
  return (
    <div className="w-full py-24 flex flex-col items-center justify-center bg-gradient-to-r from-[#FFA229] to-blue-900 text-white p-8">
      <p className="text-sm uppercase tracking-wide text-center">1% of the Industry</p>
      <h1 className="text-3xl md:text-5xl font-semibold text-center mt-2">
        Welcome to your new digital reality. <span className="font-bold">Now.</span>
      </h1>
      <div className="mt-6 flex flex-col md:flex-row items-center w-full max-w-lg">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full md:w-3/4 p-3 bg-white mb-3 text-gray-800 rounded-md md:rounded-l-md focus:outline-none"
        />
        <button className="w-full md:w-1/4 p-3 bg-orange-500 text-white rounded-r-md hover:bg-orange-600 transition-all">
          Submit
        </button>
      </div>
      <div className="mt-6 flex  justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-xl"><TiTick/></span> Instant results
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl"><TiTick/></span> User-friendly interface
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl"><TiTick/></span> Personalized customization
        </div>
      </div>
    </div>
  );
};

export default ClonedPage;