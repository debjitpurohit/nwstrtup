

import React, { useState } from 'react';
import logo from "../assets/MAP2.webp";
import { MapPin, Navigation } from "lucide-react";
import ServicesPage from "./Service";
import StartEarning from "./EarningToday";
import SafetyPage from "./Safety";
import SocialLinksPage from "./connect";
import DownloadNowPage from "./Download";
import Footer from "./Footer";

const Home = () => {
  const [isDisabled, setIsDisabled] = useState(true); 
  return (
    <div
      className="relative w-full h-[74vh] sm:h-[80vh] md:h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${logo})`,
        filter: "blur(0px)",
      }}
    >
      {/* Light blur overlay */}
      <div
        className="absolute inset-0"
        style={{ backdropFilter: "blur(1.5px)" }}
      ></div>

      <div className="relative z-10 w-full flex flex-col items-center pt-10 px-4">
        {/* Heading */}
        <p className="text-lg sm:text-xl md:text-4xl w-full flex justify-center font-bold drop-shadow-lg whitespace-nowrap mb-6 mt-48">
          <span className="text-amber-950 ">You Wanna Go Now?</span>
          <span className="text-orange-600 ml-2 font-mono"> WannaGonoW!</span>
        </p>

        {/* Container */}
        <div className="w-full max-w-xs flex flex-col space-y-4">

          {/* INPUTS VISIBLE ON ALL SCREENS */}
          <div className="flex flex-col space-y-3 text-black">

            {/* Source Input */}
            <div className="relative">
              <MapPin
                size={20}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-orange-500"
              />
              <input
                type="text"
                placeholder="Enter Source"
                className="w-full bg-white/90 text-black px-8 sm:px-10 py-2 sm:py-4 rounded-lg border border-gray-300 focus:outline-none text-xs sm:text-sm"
              />
            </div>

            {/* Destination Input */}
            <div className="relative">
              <Navigation
                size={20}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-orange-500"
              />
              <input
                type="text"
                placeholder="Enter Destination"
                className="w-full bg-white/90 text-black px-8 sm:px-10 py-2 sm:py-4 rounded-lg border border-gray-300 focus:outline-none text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Button */}
          <div className="w-full flex justify-end">
            <button disabled={isDisabled} className=" cursor-not-allowed w-20 bg-orange-200 text-white text-sm font-semibold py-2 rounded-lg shadow hover:bg-orange-200 active:scale-95 transition">
              Go<span className="text-lg"> →</span>
            </button>
          </div>
          <div className="w-full flex justif-center">
            <button className="w-full bg-orange-500 text-white text-xl font-semibold py-2 rounded-lg shadow hover:bg-orange-600 active:scale-95 transition">
              Launching Soon ...
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;



