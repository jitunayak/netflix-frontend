import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="flex flex-col space-y-2 p-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <div className="bg-gradient-to-t from-black ">
          <img
            className="w-full mix-blend-overlay"
            alt="banner"
            src="https://m.media-amazon.com/images/M/MV5BZjZmYjQ2ZTktY2NjOS00NTg5LWJlYWMtNDE5ZDhhNjg5ODYzXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg"
          />
        </div>
      </div>

      <h1 className="text-white text-2xl font-bold md:text-4xl lg:text-7xl">
        The Order
      </h1>
      <p className=" text-white max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        The Order of the Phoenix is a fantasy drama film directed by David
        Yates, written by David Greenwalt and starring Tom Cruise, Morgan
        Freeman, Henry Czerny, and Michael Caine.
      </p>
      <div className="flex space-x-3">
        <button className="flex flex-row bg-white text-black justify-center items-center px-8 rounded-md">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7 m-2" />
          <div className="font-bold">Play</div>
        </button>

        <button
          className="bg-gray-400 flex flex-row justify-center items-center px-8 rounded-md "
          onClick={() => {}}
        >
          <FaInfoCircle className="h-5 w-5 md:h-8 md:w-8 text-white m-2" />
          <div className="font-bold text-white">More Info</div>
        </button>
      </div>
    </div>
  );
}
