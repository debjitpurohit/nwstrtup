import React from "react";
// import { Instagram, Linkedin, Youtube, Facebook, Twitter } from "lucide-react";
import { FaInstagram ,FaLinkedinIn , FaFacebook ,FaYoutube} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialLinksPage() {
    const socials = [
        {
            name: "Instagram",
            icon: <FaInstagram size={22} />,
            link: "https://instagram.com",
            color:"bg-red-400"
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedinIn size={22} />,
            link: "https://linkedin.com",
            color:"bg-blue-400"
        },
        {
            name: "Facebook",
            icon: <FaFacebook size={22} />,
            link: "https://facebook.com",
            color:"bg-blue-700"
        },
        {
            name: "Twitter",
            icon: <FaXTwitter size={22} />,
            link: "https://twitter.com",
            color:"bg-white"

        },

    ];

    return (
    <div className="w-full py-12 flex flex-col items-center px-4">

      {/* TOP LINE CENTERED */}
      <div className="w-[40vw] flex justify-center mb-6">
        <div className="w-[40vw] h-0.5 bg-orange-700 rounded-full"></div>
      </div>

      {/* LOGO GRID */}
      <div className="max-w-4xl w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {socials.map((s, index) => (
          <a
            key={index}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-2xl shadow-xl p-4 flex flex-col items-center gap-2 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-rotate-3 hover:shadow-2xl `}
          >
            <div className={`p-3 rounded-full shadow flex items-center justify-center transform transition-all duration-300 hover:rotate-6 ${s.color} `}>
              {s.icon}
            </div>
            <p className="text-md font-semibold text-center font-mono">{s.name}</p>
          </a>
        ))}
      </div>

      {/* BOTTOM LINE CENTERED */}
      <div className="w-[40vw] flex justify-center mt-6">
        <div className="w-[40vw] h-0.5 bg-orange-700 rounded-full"></div>
      </div>

    </div>
    );
}