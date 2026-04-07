"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { dinNext } from "../fonts";

const infrastructureData = [
  {
    imagePath: "/images/StckImage1.jpeg",
    title: "Project-based learning",
    description: "You’ll find children getting involved in investigations, explorations, adventures and quests during ‘Creator hours’"
  },
  {
    imagePath: "/images/horizontalScroll1/2.jpeg",
    title: "Technology-enhanced learning",
    description: "You’ll find our campus on the cutting edge of technology as an Apple-enabled school"
  },
  {
    imagePath: "/images/StackImage3.jpeg",
    title: "Personalized learning",
    description: "Moving away from the “one-size-fits-all” model and embracing learning paths that are personalized to each student’s pace, interests, and strengths."
  },
  {
    imagePath:"/images/horizontalScroll1/4.jpeg",
    title: "Global Classrooms",
    description: "You’ll experience our children participate in international student collaborations, cultural exchange programs, global competitions and MUNs"
  },
  {
    imagePath: "/images/StcakImage4.jpg",
    title: "Impact Hour",
    description: "You’ll experience our children inculcating passion for sports, music, community service, innovation & design during ‘Impact Hour’."
  }
];

export default function CampusInfrastructure() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        const imageContainer = card.querySelector('.image-container');
        const contentOverlay = card.querySelector('.content-overlay');

        gsap.set(contentOverlay, {
          opacity: 0,
          y: 20,
          display: "none"
        });

        // Hover animations
        const handleMouseEnter = () => {
          // Animate the hovered card to expand its flex-grow and width
          gsap.to(card, {
            flexGrow: 2, // Grow to take up more space
            width: "45%", // A new, expanded width
            zIndex: 10,
            duration: 0.4,
            ease: "power2.out"
          });

          // Make other cards shrink to accommodate the hovered card
          gsap.to(cardsRef.current.filter(el => el !== card), {
            flexGrow: 1, // Shrink
            width: "10%", // A new, smaller width
            duration: 0.4,
            ease: "power2.out"
          });

          // Show content overlay
          gsap.set(contentOverlay, { display: "block" });
          gsap.to(contentOverlay, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          // Revert all cards to their initial flex-grow and width
          gsap.to(cardsRef.current, {
            flexGrow: 1, // Revert to initial
            width: "20%", // Revert to initial width
            zIndex: 1,
            duration: 0.3,
            ease: "power2.out"
          });

          // Hide content overlay
          gsap.to(contentOverlay, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
              gsap.set(contentOverlay, { display: "none" });
            }
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          card.removeEventListener('mouseenter', handleMouseEnter);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });


  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-white">
      <div className="w-full px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className={`${dinNext.className}`} style={{
            fontSize:"140px",
            fontWeight:"700",
            color:"#831719",
            transform:"translateY(65px)"

          }}>
           THE X-FACTOR
          </h2>
          <h2 className={`${dinNext.className}`} style={{
            color:"#121212",
            fontSize:"40px",
            fontWeight:"400",
          }}>
            Best Practices that Propel
          </h2>
        </div>

        {/* Image Cards - Single Row */}
        <div className="flex items-center gap-4 py-4 w-full max-w-[1550px] mx-auto">
          {infrastructureData.map((item, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="relative cursor-pointer"
              style={{
                width: "20%", // Initial width
                height: "550px",
                flexGrow: 1
              }}
            >
              {/* Image Container */}
              <div
                className="image-container relative rounded-2xl overflow-hidden"
                style={{
                  height: "100%",
                }}
              >
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="310px"
                />
              </div>

              {/* Content Overlay - appears on top of the expanded image */}
              <div className="content-overlay absolute bottom-8 left-8 right-8 bg-white p-8 rounded-3xl shadow-xl z-20">
                <h3 className={`${dinNext.className}`}
                style={{
                   color: "#831719" ,
                   fontSize:"30px",
                   fontWeight:"400"
                   }}>
                  {item.title}
                </h3>
                <p
                style={{
                  color:"#0f0f0f",
                  fontSize:"16px",
                  fontWeight:"400"
                }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}