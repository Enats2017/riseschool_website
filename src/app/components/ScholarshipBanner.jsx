"use client";

import Image from "next/image";
import Link from "next/link";

export default function ScholarshipBanner() {
  return (
    <section className="relative p-0 m-0 w-full min-h-[450px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/StckImage1.jpeg"
          alt="International schooling background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ filter: "blur(2px) brightness(0.4)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center px-4">
        {/* Scholarship Image with Border Radius */}
        <div className="relative w-full max-w-[500px]">
          <Image
            src="/images/international.webp"
            alt="Scholarship Badge"
            width={400}
            height={180}
            priority
            className="rounded-2xl object-contain w-full h-auto"
          />
        </div>

        {/* Apply Now Button */}
        <div className="mt-6">
          <Link href="/apply">
          <button
            className={`bg-white text-[#6F0E11] font-semibold px-8 py-3 rounded-full text-lg md:text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105`}
            style={{
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            Enquire Now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
