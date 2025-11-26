// import { Car, Bike, Package, Motorbike } from "lucide-react";

// export default function ServicesPage() {
//   const services = [
//     { name: "Bicycle Ride", icon: <Bike size={30} />, circle: "bg-green-300" },
//     { name: "Bike Ride", icon: <Motorbike size={30} />, circle: "bg-yellow-300" },
//     { name: "Car Ride", icon: <Car size={30} />, circle: "bg-orange-300" },
//     { name: "Parcel Delivery", icon: <Package size={30} />, circle: "bg-blue-300" },

//   ];

//   return (
//     <div className="h-[50vh] pt-20 px-6">
//       <h1 className="text-3xl font-bold mb-6 text-center text-amber-950">Our Services<div class="flex justify-center mt-1">
// <div class="w-36 h-1 bg-orange-700 rounded-full"></div>
// </div></h1>
      

//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto w-full">
//         {services.map((s, index) => (
//           <div
//             key={index}
//             className="backdrop-blur-2xl  rounded-2xl shadow-2xl p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-3 hover:shadow-lg transition cursor-pointer w-full"
          
//           >
//             <div className={`p-4 sm:p-5 rounded-full ${s.circle} flex items-center justify-center`}>{s.icon}</div>
//             <p className="text-lg font-medium">{s.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { Car, Bike, Package, Motorbike } from "lucide-react";
import { LiaBicycleSolid } from "react-icons/lia";
import { RiMotorbikeFill } from "react-icons/ri";

export default function ServicesPage() {
  const services = [
    { name: "Bicycle", icon: <LiaBicycleSolid size={40} />, circle: "bg-green-300" },
    { name: "Bike", icon: <RiMotorbikeFill size={40} />, circle: "bg-yellow-300" },
    { name: "Car", icon: <Car size={40} />, circle: "bg-orange-300" },
    { name: "Parcel Delivery", icon: <Package size={40} />, circle: "bg-blue-300" },
  ];

  return (
    <div className="h-[65vh] pt-20 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-amber-950 font-sans">
        Our Services
        <div className="flex justify-center mt-1">
          <div className="w-36 h-1 bg-orange-700 rounded-full"></div>
        </div>
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto w-full">
        {services.map((s, index) => (
          <div
            key={index}
            className={`backdrop-blur-2xl rounded-2xl shadow-2xl p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-3 cursor-pointer w-full transform transition-all duration-300  hover:-rotate-3 hover:scale-105`}
          >
            <div className={`p-4 sm:p-5 rounded-full ${s.circle} flex items-center justify-center transform hover:rotate-6 transition-all duration-300`}>{s.icon}</div>
            <p className="text-lg font-medium text-center font-mono">{s.name}</p>
          </div>
        ))}
      </div>
            <div className="w-full flex justify-center mt-8">
        <div className="w-[40vw] h-0.5 bg-orange-700 rounded-full"></div>
      </div>
    </div>
  );
}
