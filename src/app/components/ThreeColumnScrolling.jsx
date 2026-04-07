"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(CSSPlugin); // Just in case
// Columns of images

const columns = [
  [
    { id: 1, src: "/images/1.webp", alt: "Image 1" },
    { id: 2, src: "/images/2.webp", alt: "Image 2" },
    { id: 3, src: "/images/3.webp", alt: "Image 3" },
    { id: 4, src: "/images/4.webp", alt: "Image 4" },
    { id: 5, src: "/images/5.webp", alt: "Image 5" },
    { id: 6, src: "/images/6.webp", alt: "Image 6" },
  ],
  [
    { id: 7, src: "/images/7.webp", alt: "Image 7" },
    { id: 8, src: "/images/8.webp", alt: "Image 8" },
    { id: 9, src: "/images/9.webp", alt: "Image 9" },
    { id: 10, src: "/images/10.webp", alt: "Image 10" },
    { id: 11, src: "/images/11.webp", alt: "Image 11" },
    { id: 1, src: "/images/1.webp", alt: "Image 1" },
  ],
  
  [
    { id: 4, src: "/images/4.webp", alt: "Image 4" },
    { id: 5, src: "/images/5.webp", alt: "Image 5" },
    { id: 6, src: "/images/6.webp", alt: "Image 6" },
    { id: 7, src: "/images/7.webp", alt: "Image 7" },
    { id: 2, src: "/images/2.webp", alt: "Image 2" },
    { id: 3, src: "/images/3.webp", alt: "Image 3" },
  ],
  
];

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

export default function ScrollingSection() {
  const columnRefs = useRef([]);
  const [currentContent, setCurrentContent] = useState(0);

  // Content auto-switch
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // GSAP infinite scroll
  useEffect(() => {
  columnRefs.current.forEach((colRef, index) => {
    if (!colRef) return;

    const images = colRef.querySelectorAll(".scroll-image");
    if (!images.length) return;

    const imgHeight = images[0].offsetHeight + 12; // +px gap
    const totalHeight = imgHeight * images.length;

    // Set initial position
    gsap.set(images, { y: (i) => i * imgHeight });

    // Define different speeds per column (lower = faster)
    const speeds = [50, 120, 60]; // adjust as you like

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(images, {
      y: (i) => i * imgHeight - totalHeight,
      duration: speeds[index % speeds.length], // pick speed per column
      ease: "none",
    }).set(images, { y: (i) => i * imgHeight });
  });
}, []);


  // Render column with duplicated images
  const renderColumn = (images, colIndex) => {
    const duplicatedImages = [...images,...images]; // duplicate for seamless loop
    return (
      <div
        key={colIndex}
        className="flex-1 relative overflow-hidden h-[100vh] w-full"
        ref={(el) => (columnRefs.current[colIndex] = el)}
      >
        {duplicatedImages.map((img, idx) => (
          <div
            key={`${img.id}-${idx}`}
            className="scroll-image absolute top-0 left-1/2 w-[80%] h-[250px] -translate-x-1/2"
            style={{ marginBottom: "2px" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="pt-0 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 min-h-[100vh]">
          {/* Desktop: Left side 3 columns */}
          <div className="hidden md:flex w-3/5 gap-0 ">
            {columns.map((col, idx) => renderColumn(col, idx))}
          </div>

          {/* Right side: content vertically centered */}
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
        </div>
      </div>
    </section>
  );
}
