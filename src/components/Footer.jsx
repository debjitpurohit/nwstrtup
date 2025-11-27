import React from "react";
import logo from "../assets/wgwlogo2.webp";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-amber-800 text-white px-6 py-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
                {/* Left Side - Office Address */}
                                <div className="flex flex-col md:items-start gap-4 mt-6">
                    <img src={logo} alt="WannaGonoW Logo" className="w-[15vw] mb-2 " />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-xl font-mono">Our Office</h2>
                    {/* <p className="font-serif font-bold">Address:</p> <p className="font-mono">Bhadrapara Rd,Kotulpur,West Bengal 722141,India</p>
                    <p className="font-serif font-bold">Phone:</p> <p className="font-mono"> +91 9609439493 </p> */}
                    <div className="flex flex-wrap gap-2">
    <p className="font-serif font-bold">Address:</p>
    <p className="font-mono">
      Bhadrapara Rd, Kotulpur, West Bengal 722141, India
    </p>
  </div>

  <div className="flex flex-wrap gap-2">
    <p className="font-serif font-bold">Phone:</p>
    <p className="font-mono">+91 9609439493</p>
  </div>
                </div>

                {/* Right Side - Logo and Links */}

            </div>

            {/* Bottom Copyright */}
            <div className="mt-4 text-center text-sm text-white">
                © 2025 WannaGonoW — Made with ❤️. Fast & Affordable Ride Booking Service. All rights reserved.
            </div>
        </footer>
    );
}
