// import React, { useState, useEffect } from "react";
// import { ChevronUp } from "lucide-react";

// export default function ScrollToTop() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 200) setVisible(true);
//       else setVisible(false);
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   if (!visible) return null;

//   return (
//     <button
//       onClick={scrollToTop}
//       className="
//         fixed bottom-20 right-5 z-50
//         bg-orange-600 text-white p-3 rounded-full shadow-lg
//         hover:bg-orange-700 transition transform hover:scale-110
//       "
//     >
//       <ChevronUp size={22} />
//     </button>
//   );
// }
import React, { useState, useEffect } from "react";
import { ChevronUp, HelpCircle } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/918927899442?text=Hello%20WannaGonoW%20Team!",
      "_blank"
    );
  };

  if (!visible) return null;

  return (
    <>
      {/* SCROLL TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className=" cursor-pointer
          fixed bottom-24 right-5 z-50
          bg-orange-600 text-white p-3 rounded-full shadow-lg
          hover:bg-orange-700 transition transform hover:scale-110
        "
      >
        <ChevronUp size={22} />
      </button>

      {/* HELP BUTTON */}
      <button
        onClick={openWhatsApp}
        className="
          fixed bottom-6.5 right-5 z-50 cursor-pointer
          bg-green-500 text-white p-3 rounded-full shadow-lg
          hover:bg-green-600 transition transform hover:scale-110
        "
      >
        <HelpCircle size={22} />
      </button>
    </>
  );
}
