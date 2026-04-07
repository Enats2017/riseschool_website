"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const imageData = [
  {
    imagePath: "/images/StckImage1.jpeg",
    title: "EduLabs & Smart Classrooms",
    description:
      "Interactive environments with immersive digital tools that make concepts come alive.",
  },
  {
    imagePath: "/images/stackImage2.jpeg",
    title: "Exploratoriums",
    description:
      "Collaborative spaces where curiosity and teamwork lead to discovery.",
  },
  {
    imagePath: "/images/StackImage3.jpeg",
    title: "Library & Learning Commons",
    description:
      "Comprehensive library with digital resources, quiet study areas, and collaborative spaces.",
  },
  {
    imagePath: "/images/StcakImage4.jpg",
    title: "Sports & Recreation Facilities",
    description:
      "Multi-purpose sports complex promoting physical wellness and healthy lifestyle habits.",
  },
];

export default function ScrollingImageSection() {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const images = imagesRef.current;

    // Set initial state: all cards except first below the viewport
    images.forEach((img, i) => {
      if (i !== 0) gsap.set(img, { y: "100%", scale: 1.05, zIndex: images.length - i });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${imageData.length * 100}vh`,
        scrub: true,
        pin: true,
      },
    });

    images.forEach((img, i) => {
      if (i === 0) return;

      // Bring current card to top
      tl.set(img, { zIndex: images.length });

      // Animate card into view
      tl.to(img, { y: "0%", scale: 1, duration: 1 }, i);

      // Scale down previous card slightly
      tl.to(images[i - 1], { scale: 0.95, duration: 1 }, i);
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{
        height: `${imageData.length * 100}vh`,
        paddingTop: "80px", // offset for navbar
      }}
    >
      <div className="sticky top-[80px] h-[80vh]">
        {imageData.map((data, index) => (
          <div
            key={index}
            ref={(el) => el && (imagesRef.current[index] = el)}
            className="absolute left-1/2 top-0 w-[90vw] h-[70vh] -translate-x-1/2 rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src={data.imagePath}
              alt={data.title}
              fill
              className="object-cover rounded-3xl"
              priority={index === 0}
            />
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end text-center px-8 pb-8 z-20">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                {data.title}
              </h3>
              <p className="text-base md:text-lg text-white/95 max-w-2xl leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
