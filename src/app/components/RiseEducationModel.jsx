// components/MeetOurTeam.jsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

import { dinNext } from "../fonts";

gsap.registerPlugin(ScrollTrigger);


const team = [
    {
        id: 1,
        name: "Applied Knowledge",
        img: "/images/horizontalScroll1/1.jpeg",
    },
    {
        id: 2,
        name: "Meta-Skills",
        img: "/images/horizontalScroll1/3.jpeg",
    },
    {
        id: 3,
        name: "Character Excellence",
        img: "/images/horizontalScroll1/4.jpeg",
    },
    {
        id: 4,
        name: "Learning Agility",
        img: "/images/horizontalScroll1/2.jpeg",
    },
];

export default function RiseEducationModel() {

    const cardsRef = useRef([])
    const overlayRefs = useRef([]);

    useGSAP(() => {

        gsap.timeline({
            scrollTrigger: {
                trigger: cardsRef.current[0], // start when first card hits viewport
                start: "top 15%",
                end: "bottom 20%",
                scrub: 1,
                // markers: true,
            },
        })
            .to(cardsRef.current, {
                transform: "translateX(0%) translateY(0%)",
                width: "320px",
                borderRadius: "1rem",
                stagger: 0.2, // delay between cards
            })
            .to(
                overlayRefs.current,
                {
                    opacity: 1,
                    stagger: 0.2, // match the card stagger
                    duration: 0.5,
                    ease: "power1.inOut",
                },
                "-=0.3" // slight overlap with previous animation
            );


    }, [])

    return (
        <div style={{
            margin: "8rem 4rem",
            display: "flex",
            flexDirection: "column",
        }}>
            <div 
            className={dinNext.className}
            style={{
                fontSize: "130px",
                fontWeight: "700",
                color: "#831719",
                lineHeight: "1", 
            }}>
                <p>RISE</p>
                <p>EDUCATION</p>
                <p>MODEL</p>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop:"4rem"
            }}>

                {
                    team.map(({ id, name,img }) => (
                        <div style={{ width: "320px", height: "450px", position: "relative", borderRadius: "1rem", overflow: "hidden", margin: "5px", transform: "translateX(300%) translateY(-120%)", width: "100px", borderRadius: "8rem" }} key={id} ref={(el) => (cardsRef.current[id - 1] = el)}>
                            <Image
                                src={img}
                                alt={`${name} image`}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                            <div
                                ref={(el) => (overlayRefs.current[id - 1] = el)}
                                style={{
                                    background: "rgba(255, 255, 255, 0.2)",
                                    backdropFilter: "blur(10px)",
                                    WebkitBackdropFilter: "blur(10px)",
                                    color: "#fff",
                                    position: "absolute",
                                    bottom: "1rem",
                                    left: "1rem",
                                    right: "1rem",
                                    padding: "1rem 1rem",
                                    borderRadius: ".5rem",
                                    opacity: 0,
                                }}>
                                <p style={{ fontSize: "1.3rem", fontWeight: "500",textAlign:"center" }}>{name}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
