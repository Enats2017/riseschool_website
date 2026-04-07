"use client"

import Image from "next/image";
import { useState,useEffect } from "react";

// Content data
const contentData = [
  {
    id: "vision",
    heading: "VISION",
    text: "Where India's Future Leaders learn to shape the World's Future – Through Innovation, Integrity and Impact",
  },
  {
    id: "motto",
    heading: "MOTTO",
    text: "INNOVATIO ALIT, IMPACTUS REGIT Innovation Fuels Us, Impact Drives Us.",
  },
];


export const Vision = () => {

      const [currentContent, setCurrentContent] = useState(0);
    
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentContent((prev) => (prev + 1) % contentData.length);
          }, 5000);
          return () => clearInterval(interval);
        }, []);
      

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 2rem", // reduced horizontal margin
        marginBottom:"2rem"
      }}
    >
      <div className="w-full md:w-2/5 flex flex-col justify-center">
            <h2 className="text-6xl font-bold text-[#831719] mb-6">
              {contentData[currentContent].heading}
            </h2>
            <p className="text-lg text-gray-600">
              {contentData[currentContent].text}
            </p>

            {/* Indicators */}
            <div className="mt-8 flex gap-3">
              {contentData.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-opacity duration-300 ${
                    idx === currentContent
                      ? "opacity-100 bg-[#831719]"
                      : "opacity-30 bg-[#831719]"
                  }`}
                ></span>
              ))}
            </div>
          </div>
    </section>
  );
};
