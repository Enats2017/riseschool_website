"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { dinNext } from "../fonts";


const data = [
    {
        title: "Project-based learning",
        copy: "Our unique ‘Creator Hours’ let children dive into explorations, adventures, and quests—connecting knowledge with skills to solve real-world problems",
        img: "/images/Project-based-learning.webp"
    },
    {
        title: "Technology-enhanced learning",
        copy: "As an Apple-enabled school, we harness technology to drive personalized, independent learning—keeping our campus on the cutting edge of innovation.",
        img: "/images/Technology-enhanced-learning.webp"
    },
    {
        title: "Personalized growth",
        copy: "Respecting every child’s unique pace, passions, and purpose, ensuring no one is left behind.",
        img: "/images/Personalised-Growth.webp"
    },
    {
        title: "Global Mindedness",
        copy: "Connecting every child to the world beyond borders through collaborations, experiences, and ideas.",
        img: "/images/Global-Mindness.webp"
    },
    {
        title: "Impact hour",
        copy: "For our children we have created the concept of ‘Impact Hour’ - dedicated to inculcate passion for sports, music, community service, innovation & design thinking and global mindedness in our children. ",
        img: "/images/Impact-Hour.webp"
    },
    {
        title: "Joyful Learning",
        copy: "Creating classrooms where curiosity is celebrated and learning is joyous.",
        img: "/images/Joyful-learning.webp"
    },
    {
        title: "Holistic Excellence",
        copy: "Keeping academic mastery at the core while balancing with skills, arts, sports, and well-being.",
        img: "/images/Holistic-Excellence.webp"
    },
];



export default function ChooseTomorrowMobile() {
    const cardRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleCard = (index) => {
        if (activeIndex === index) {
            // Close the current card
            gsap.to(cardRefs.current[index], {
                height: "80px",
                duration: 0.5,
                ease: "power2.inOut",
            });
            setActiveIndex(null);
        } else {
            // Close previous card if any
            if (activeIndex !== null) {
                gsap.to(cardRefs.current[activeIndex], {
                    height: "80px",
                    duration: 0.5,
                    ease: "power2.inOut",
                });
            }
            // Open the clicked card
            gsap.to(cardRefs.current[index], {
                height: "auto",
                duration: 0.5,
                ease: "power2.inOut",
            });
            setActiveIndex(index);
        }
    };

    return (
        <div style={{ padding: "1rem" }}>


            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>

                <p
                    className={`${dinNext.className} text-[#121212] text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-normal translate-y-6 sm:translate-y-8 md:translate-y-12 lg:translate-y-14`}
                >
                    CHOOSE THE SCHOOL OF
                </p>

                <p className={`${dinNext.className} text-[#831719] text-[84px]  sm:text-[110px] md:text-[132px] lg:text-[160px] font-bold`}>
                    TOMORROW
                </p>

            </div>


            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", borderBottom: "1px dashed #dc2626" }}>
                {data.map(({ title, copy, img }, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el)}
                        onClick={() => toggleCard(index)}
                        style={{
                            width: "100%",
                            height: "80px", // collapsed height
                            overflow: "hidden",
                            position: "relative",
                            cursor: "pointer",
                            borderTop: "1px dashed #dc2626",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            // backgroundColor:"red",
                            paddingBottom:"30px"
                        }}
                    >

                        <h2
                            className={`${dinNext.className} text-black uppercase mb-8  text-[25px] md:text-[40px] font-[400] tracking-[-0.02em] leading-[2] whitespace-nowrap mt-6`}>
                            {title}
                        </h2>

                        <div>
                            <p
                                className="text-[15px] md:text-[17px] font-normal text-[#1b1b1b] leading-relaxed m-0"
                            >
                                {copy}
                            </p>
                            <div
                                className="card-img  min-w-[40%]  mt-6 lg:mt-0"

                            >

                                <Image
                                    src={img}
                                    alt={title}
                                    width={455}
                                    height={284}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        //   objectFit: "cover",
                                    }}
                                />
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}
