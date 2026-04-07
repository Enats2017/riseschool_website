'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { dinNext } from '@/app/fonts';

gsap.registerPlugin(ScrollTrigger);

const GalleryGrid = () => {


    const images = [
        { src: "/images/Early-Years-Prog.webp", alt: "Early Years", className: "wide" },
        { src: "/images/Early-Years-Prog.webp", alt: "Early Years", className: "wide" },
        { src: "/images/High-School-Prog.webp", alt: "High School", className: "tall" },
        { src: "/images/Early-Years-Prog.webp", alt: "Early Years", className: "wide" },
        { src: "/images/Primary-Years.webp", alt: "Primary School" },
        { src: "/images/classrooms-as-class-labs.jpg", alt: "Class Labs", className: "tall" },
        { src: "/images/Innovative.webp", alt: "Innovative", className: "big" },
        { src: "/images/Reflective_1.webp", alt: "Reflective" },
        { src: "/images/Performing-Arts.webp", alt: "Performing Arts", className: "big" },
        { src: "/images/Middle-School-Prog.webp", alt: "Makers Lab", className: "tall" },
        { src: "/images/Football court.webp", alt: "Football Court" },
        { src: "/images/Early Years STEM Lab.jpg", alt: "STEM Lab" },
        { src: "/images/Primary-Years.webp", alt: "Primary Years" },
        { src: "/images/Excellence-Driven.webp", alt: "Excellence Driven" },
        { src: "/images/Gymnastics.jpg", alt: "Entrance", className: "wide" },
        { src: "/images/Early Years Funverse.webp", alt: "Funverse", className: "wide" },
    ];

    return (
       // Update the main section and grid container
<section className="gallery-section min-h-screen w-full py-8 px-0 bg-white flex flex-col">
<div className="text-center mb-8 px-4">
  <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 ${dinNext.className}`}>
    <span className="text-[#831719]">Apple-Enabled</span> Learning
  </h2>
  <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
    Classrooms are transformed into innovation hubs empowering students not just to use technology, but to create with it.
  </p>
</div>

  <div className="flex-1 w-full overflow-auto">
    <div className="grid-wrapper w-full max-w-[1800px] mx-auto px-4">
      <div className="grid-container">
        {images.map((img, index) => (
          <div
            key={index}
            className={`grid-item ${img.className || ''}`}
          >
            <div className="image-container">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="image"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                priority={index < 4}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  <style jsx>{`
    .gallery-section {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .grid-wrapper {
      width: 100%;
      height: 100%;
      padding: 0 1rem;
    }

    .grid-container {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-auto-rows: 140px;
      gap: 6px;
      width: 100%;
    }

    .grid-item {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
    }

    .image-container {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .grid-item:hover .image {
      transform: scale(1.05);
    }

    .wide { grid-column: span 2; }
    .tall { grid-row: span 2; }
    .big { 
      grid-column: span 2;
      grid-row: span 2;
    }

    @media (max-width: 1200px) {
      .grid-container {
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 120px;
      }
    }

    @media (max-width: 768px) {
      .grid-container {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 100px;
      }
      .wide, .tall, .big {
        grid-column: span 1 !important;
        grid-row: span 1 !important;
      }
    }

    @media (max-width: 480px) {
      .grid-container {
        grid-template-columns: 1fr;
        grid-auto-rows: 80px;
      }
    }
  `}</style>
</section>


    );
};

export default GalleryGrid;
