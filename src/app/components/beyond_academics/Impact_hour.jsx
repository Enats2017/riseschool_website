"use client";

import React from "react";
import Image from "next/image";
import { dinNext,montserrat } from "@/app/fonts";

export default function ImpactHourSpaces() {
  // Card Data
  const days = [
    { day: "MONDAY", title: "INNOVATION & DESIGN", img: "/images/Innovation and Design.png" },
    { day: "TUESDAY", title: "COMMUNITY, ACTION & SERVICE", img: "/images/Community action and service.png" },
    { day: "WEDNESDAY", title: "SPORTS & WELLNESS", img: "/images/Sports and Wellness.png" },
    { day: "THURSDAY", title: "GLOBAL CITIZENSHIP", img: "/images/Global Citizebship.png" },
    { day: "FRIDAY", title: (<>MUSIC &<br/> DRAMA</>), img: "/images/Music and Drama.png" },
  ];

  return (
    <section className={`bg-white py-16 md:py-24 `}>
      {/* Header Section */}
      <div className={` text-center px-4 md:px-6 max-w-5xl mx-auto mb-12 md:mb-16`}>
        <h1 className={`${dinNext.className} text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-[700] leading-[1]`}>
          IMPACT <span className="text-[#831719]">HOUR</span> SPACES
        </h1>
        <h2 className={`${dinNext.className} text-[24px] lxs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] uppercase font-[400]  text-[#121212] mb-2 transform -translate-y-2`}>
          WHERE INTERESTS CONVERT INTO MASTERY
        </h2>
        <p className="text-[#1b1b1b] text-[17px] leading-relaxed  mx-auto">
          Impact Hour is our signature innovation designed to nurture the whole child{" "}
          <span className="font-bold text-[#831719]">beyond academics.</span> Each week, learners immerse themselves
          in sports, music, design, community service, and global mindedness. This dedicated time helps them discover
          passions, build resilience, and develop empathy — shaping confident, well-rounded leaders of tomorrow.
        </p>
      </div>

      {/* Cards Section */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex justify-center md:justify-between lg:justify-center gap-8 px-4 md:px-8 lg:px-12 min-w-max md:min-w-full">
          {days.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0"
              style={{ width: "248px" }}
            >
              {/* Card Container */}
              <div className="relative overflow-hidden shadow-md group w-full h-[300px]">
                <div className="relative w-full h-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Small Gradient Strip Only Behind Text */}
                  <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                  {/* Title Text */}
                  <div className="absolute bottom-2 left-0 right-0 p-1 text-white">
                    <h3 className={`text-[24px] font-bold leading-snug text-center`}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Weekday Label (increased font size) */}
              <p
                className={`text-[30px] text-[#762123] w-full mt-2 ${dinNext.className}`}
              >
                {item.day}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar for All Browsers */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
