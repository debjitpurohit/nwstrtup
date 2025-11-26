// Navbar.jsx
import React from "react";
import { useState, useEffect } from "react";
// import "./Navbar.css"; // We'll create the glass effect styles here
import logo from "../assets/wgwlogo2.png"; // Replace with your logo path

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");
  const [isExpired, setIsExpired] = useState(false);

  const targetDate = new Date("December 30, 2025 00:00:00").getTime();
  const playStoreURL = "https://play.google.com/store/apps/details?id=yourAppId";


  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setIsExpired(true);
        setTimeLeft("");
        clearInterval(timer);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    if (isExpired) {
      window.open(playStoreURL, "_blank");
    }
  };
  return (
    <nav className="fixed w-full border-b border-amber-600 z-20 top-0 left-0 bg-white/30 backdrop-blur-md shadow-md ">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} onClick={() => scrollToSection("home")} className="h-10 sm:h-8 md:h-10 w-auto" alt="Logo" />
          <span className="hidden xs:inline text-sm sm:text-xl md:text-xl font-semibold text-black">WannaGonoW</span>
        </a>

        {/* Buttons */}
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button
            onClick={handleClick}
            disabled={!isExpired}
            className={`text-white font-small rounded-md text-sm  px-1 py-2 focus:outline-none focus:ring-2 
            ${isExpired
                ? "bg-green-500 hover:bg-green-600 focus:ring-green-400"
                : "bg-orange-500 cursor-not-allowed"
              }`}
          >
            {isExpired ? "Get Now" : `${timeLeft}`}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-md md:hidden hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`${isOpen ? "" : "hidden"} w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 font-medium">
            <li onClick={() => scrollToSection("home")} className="font-mono font-bold block py-2 px-3 text-black rounded hover:bg-orange-500 hover:text-white md:hover:bg-transparent md:hover:text-orange-500 md:p-0 cursor-pointer">Home</li>
            <li onClick={() => scrollToSection("services")} className="font-mono font-bold cursor-pointer block py-2 px-3 text-black rounded hover:bg-orange-500 hover:text-white md:hover:bg-transparent md:hover:text-orange-500 md:p-0">Services</li>
            <li onClick={() => scrollToSection("safety")} className="font-mono font-bold cursor-pointer block py-2 px-3 text-black rounded hover:bg-orange-500 hover:text-white md:hover:bg-transparent md:hover:text-orange-500 md:p-0">Safety</li>
            <li onClick={() => scrollToSection("earn")} className="font-mono font-bold cursor-pointer block py-2 px-3 text-black rounded hover:bg-orange-500 hover:text-white md:hover:bg-transparent md:hover:text-orange-500 md:p-0">About</li>
            <li onClick={() => scrollToSection("connect")} className="font-mono font-bold cursor-pointer block py-2 px-3 text-black rounded hover:bg-orange-500 hover:text-white md:hover:bg-transparent md:hover:text-orange-500 md:p-0">Connect</li>

          </ul>
        </div>
      </div>
    </nav>



  );
};

export default Navbar;
