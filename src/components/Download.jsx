import React from "react";


export default function DownloadNowPage() {
    return (
        <div className="w-full h-[40vh] bg-amber-950 flex flex-col items-center justify-center px-4 py-16">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-12 font-mono">
                Download noW !
            </h1>


            {/* App Images */}
            <div className="flex flex-col sm:flex-row items-center gap-8">
                {/* User App */}
                <a href="https://play.google.com/store/apps/details?id=com.userapp" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Download User App"
                        className="w-40 sm:w-48 hover:scale-105 transform transition-all duration-300"
                    />
                </a>


                {/* Driver App */}
                <a href="https://play.google.com/store/apps/details?id=com.driverapp" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Download Driver App"
                        className="w-40 sm:w-48 hover:scale-105 transform transition-all duration-300"
                    />
                </a>
            </div>
        </div>
    );
}