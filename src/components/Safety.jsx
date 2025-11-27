import React from "react";
import logo from "../assets/safe.webp"


export default function SafetyPage() {
    return (
        <div className="w-full flex justify-center px-4 py-16 ">
            {/* Clean container (NO blur, NO background color) */}
            <div className="p-6 max-w-6xl w-full">
                <div className="flex flex-col lg:flex-row items-center gap-6">
                    {/* LEFT TEXT */}
                    <div className="lg:w-1/2 flex flex-col">
                        <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4 font-sans">
                            Safety is Our Top Priority
                            <div className="flex justify-start mt-2">
                                <div className="w-24 h-1 bg-orange-700 rounded-full"></div>
                            </div>
                        </h2>


                        <p className="text-white text-lg mb-6 font-mono font-bold">
                            Your safety is always our top priority. Every ride is monitored, every driver is
                            verified, and every trip goes through multiple safety checks before you start your
                            journey.
                            Real‑time tracking, emergency support, trusted drivers, and advanced alert systems
                            ensure that you reach your destination safely every time.
                        </p>


                        <button className="w-32 bg-orange-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-orange-700 transition cursor-pointer">
                            Learn More →
                        </button>
                    </div>


                    {/* RIGHT IMAGE (NO tilt) */}
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src={logo}
                            alt="Safety First"
                            className="w-72 sm:w-auto rounded-2xl shadow-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}