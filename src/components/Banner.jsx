// import React, { useState, useEffect } from "react";

// export default function MobileBottomBanner() {
//   const [showBanner, setShowBanner] = useState(false);

//   useEffect(() => {
//     // Only show if not already accepted and on mobile
//     const accepted = localStorage.getItem("cookiesAccepted");
//     const isMobile = window.innerWidth <= 768; // mobile screen width
//     if (!accepted && isMobile) {
//       setShowBanner(true);
//     }
//   }, []);

//   const handleAccept = () => {
//     localStorage.setItem("cookiesAccepted", "true");
//     setShowBanner(false);
//     // Redirect to Play Store (replace with your app link)
//     window.open("https://play.google.com/store/apps/details?id=com.yourapp", "_blank");
//   };

//   if (!showBanner) return null;

//   return (
//     <div className="fixed bottom-0 left-0 w-full bg-orange-500 text-white px-4 py-3 shadow-lg z-50 flex justify-between items-center sm:hidden">
//       <p className="text-sm font-medium">Get our app and start earning today!</p>
//       <button
//         onClick={handleAccept}
//         className="bg-white text-orange-500 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
//       >
//         Get Now
//       </button>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// export default function DownloadBanner() {
//   const [collapsed, setCollapsed] = useState(false);
//   const [hidden, setHidden] = useState(false);

//   if (hidden) return null;

//   return (
//     <div
//       className={`fixed bottom-0 left-0 w-full bg-orange-600 text-white z-50 shadow-xl transition-all duration-500 
//       ${collapsed ? "h-5" : "h-18"} flex flex-col rounded-t-xl`}
//     >
//       {/* Collapse / Expand Button */}
//       <div
//         className="w-full flex justify-center cursor-pointer"
//         onClick={() => setCollapsed(!collapsed)}
//       >
//         {collapsed ? (
//           <ChevronUp size={18} className="mt-1" />
//         ) : (
//           <ChevronDown size={18} className="mt-1" />
//         )}
//       </div>

//       {/* Banner Content */}
//       {!collapsed && (
//         <div className="flex items-center justify-between px-8">
//           <p className="text-sm sm:text-base font-medium">
//             Download our app and get started instantly!
//           </p>

//           <div className="flex items-center gap-2">

//             {/* GET NOW BUTTON */}
//             <button
//               onClick={() =>
//                 window.open(
//                   "https://play.google.com/store/apps/details?id=com.yourapp",
//                   "_blank"
//                 )
//               }
//               className="cursor-pointer bg-white text-orange-600 font-bold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
//             >
//               Get Now →
//             </button>

//             {/* CANCEL BUTTON */}
//             <button
//               onClick={() => setHidden(true)}
//               className="text-white font-bold text-xl px-2 cursor-pointer"
//             >
//               ×
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function DownloadBanner() {
  const [collapsed, setCollapsed] = useState(false);
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <div
      className={`
        fixed bottom-0 left-0 w-full bg-orange-600 text-white z-50 shadow-xl 
        transition-all duration-500 flex flex-col rounded-t-2xl
        ${collapsed ? "h-6.5" : "h-20"}   /* Correct height sizes */
      `}
    >
      {/* Collapse / Expand Button */}
      <div
        className="w-full flex justify-center cursor-pointer py-1"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <ChevronUp size={20} />
        ) : (
          <ChevronDown size={20} />
        )}
      </div>

      {/* Banner Content */}
      {!collapsed && (
        <div
          className="
            flex items-center justify-between 
            px-3 sm:px-8      
            pb-1
          "
        >
          <p className="text-xs sm:text-sm font-medium leading-tight">
            Download our app and get started instantly!
          </p>

          <div className="flex items-center gap-2">

            {/* GET NOW BUTTON */}
            <button
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.yourapp",
                  "_blank"
                )
              }
              className="
                bg-white text-orange-600 font-semibold 
                text-xs sm:text-sm 
                px-1 py-2 sm:px-4 sm:py-2 
                rounded-lg shadow hover:bg-gray-100 transition
              "
            >
              Get Now→
            </button>

            {/* CANCEL BUTTON */}
            <button
              onClick={() => setHidden(true)}
              className="text-white font-bold text-lg px-2"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

