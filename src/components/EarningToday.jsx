// import React from "react";
// import logo from "../assets/grp.jpg";

// export default function StartEarning() {
//   return (
//     <div className="flex flex-col lg:flex-row items-center justify-between px-24 py-16 ">
//       {/* Left Text Section */}
//       <div className="lg:w-1/2 mb-8 lg:mb-0 flex flex-col">
//         <h2 className="text-2xl sm:text-3xl font-bold mb-4">Start Earning noW !<div className="flex justify-start enter mb-8">
// <div className="w-30 h-1 bg-orange-800 rounded-full"></div>
// </div></h2>
//         <p className="text-white text-base sm:text-lg mb-1">
//           By joining our app as a driver, you can earn money on your own schedule. Pick up passengers from your nearby source locations, deliver parcels, or complete rides to your chosen destinations. The more you drive, the more you earn!
//         </p>
//         <p className="text-white text-base sm:text-lg mb-4">
//           Our driver-friendly interface makes it easy to track rides, monitor earnings, and receive instant payments. You can start anytime and increase your income by choosing high-demand routes. Join our growing community of drivers and turn your free time into profitable opportunities...
//         </p>
//         {/* <p className="text-gray-700 text-base sm:text-lg mb-6">...</p> */}
//         <button className="w-20 bg-amber-950 text-white font-semibold py-3 px-3 rounded-lg shadow hover:bg-orange-600 transition cursor-pointer">
//           Start<span className="text-lg"> →</span>
//         </button>
//       </div>

//       {/* Right Image Section with demo image from internet */}
//       <div className="lg:w-1/2 flex justify-center relative -ml-16 lg:-ml-32">
//         <img
//           src={logo}
//           alt="Driver demo"
//           className="w-80 sm:w-96 md:w-full rounded-xl shadow-lg object-cover transform rotate-2"
//         />
//       </div>
//     </div>
//   );
// }

import React from "react";
import logo from "../assets/grp.webp";
import logo2 from "../assets/grp2.webp";

export default function CombinedPage() {
  return (
    <div className="w-full flex justify-center px-4 py-16 ">
      
      {/* ONE BIG BLUR DIV */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 max-w-6xl w-full flex flex-col gap-20">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* Left Image */}
          <div className="lg:w-1/2 flex justify-center -ml-10">
            <img
              src={logo2}
              alt="Ride now"
              className="w-72 sm:w-auto  object-cover transform -rotate-2 hover:-rotate-3 hover:scale-105 transition"
            />
          </div>
          {/* Animated Thread */}


          {/* Right Text */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-amber-950 mb-4 font-sans">
              Ride noW!
              <div className="flex justify-start mt-2">
                <div className="w-24 h-1 bg-orange-700 rounded-full"></div>
              </div>
            </h2>

            <p className="text-white text-lg mb-6 font-mono font-bold">
              Book a ride instantly with our fast and reliable pickup system.
              Drivers reach your location within minutes.Enjoy safe, affordable, and fast rides anytime → perfect for daily
              travel, emergencies, or parcel deliveries.We also Provide biCycle Transport beacuse we are starting from Ground Level.
            </p>

            <button className="w-28 bg-orange-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-orange-700 transition cursor-pointer">
              Book Now →
            </button>
          </div>

        </div>
        {/* ------------------ START EARNING SECTION ------------------ */}
        <div className="flex flex-col lg:flex-row items-center gap-10 ">
          
          {/* Left Text */}
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-3xl font-bold text-amber-950 mb-4 ">
              Start Earning noW!
              <div className="flex justify-start mt-2">
                <div className="w-24 h-1 bg-orange-600 rounded-full"></div>
              </div>
            </h2>

            <p className="text-white text-lg mb-6 font-mono font-bold">
              By joining our app as a driver/Captain, you can earn money on your own
              schedule. Pick up passengers, deliver parcels, and complete rides
              from nearby locations. The more you drive, the more you earn!              Track rides, monitor earnings, and receive instant payments. Turn
              your free time into profitable opportunities.
            </p>



            <button className="w-28 bg-orange-700 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-orange-800 transition cursor-pointer">
              Start →
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center -mt-10 -mr-10">
            <img
              src={logo}
              alt="Driver demo"
              className="w-72 sm:w-auto  object-cover transform rotate-2 hover:rotate-3 hover:scale-105 transition"
            />
          </div>
        </div>

        {/* ------------------ RIDE NOW SECTION ------------------ */}

      </div>
    </div>
  );
}
