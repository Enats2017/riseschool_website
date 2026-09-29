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
        name: "PAYAL GABA",
        role: "President – Rising India School Excellence Management Private Limited",
        img: "/images/team/payal-gaba.png",
    },
    {
        id: 2,
        name: "Aniket A Salunkhe",
        role: "Founding Principal",
        img: "/images/team/aniket.png",
    },
    {
        id: 3,
        name: "Zeenat Bandukwala",
        role: "Education Director",
        img: "/images/team/zeenat_bandukwala.png",
    },
    {
        id: 4,
        name: "Remi Rajan",
        role: "PYPC Coordinator",
        img: "/images/team/remi_rajan.png",
    },
    // {
    //     id: 5,
    //     name: "Anu Monga",
    //     role: "Advisor - IB",
    //     img: "/images/team/anu_monga.png",
    // },
    // {
    //     id: 6,
    //     name: "SAMARESH SHAH",
    //     role: "Advisor - Entrepreneurial Mindset",
    //     img: "/images/team/samaresh-sir.png",
    // },
    // {
    //     id: 7,
    //     name: "Dr. Anuj Kacker",
    //     role: "Advisor - AI in Education",
    //     img: "/images/team/ANUJ.webp",
    // },
];


export default function MeetOurTeam() {

    const cardsRef = useRef([]);
    const overlayRefs = useRef([]);

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardsRef.current[0], // start when first card hits viewport
                start: "top 15%",
                end: "bottom 20%",
                scrub: 1,
                // markers: true,
            },
        });

        // Position/entry stagger — cards slide in one after another
        tl.to(cardsRef.current, {
            transform: "translateX(0%) translateY(0%)",
            stagger: 0.2,
        })
            // Size change happens for ALL cards at the same time — no stagger,
            // so no card can ever be caught mid-resize while others are done.
            .to(
                cardsRef.current,
                {
                    width: "320px",
                    borderRadius: "1rem",
                    duration: 0.4,
                },
                "<" // start alongside the position tween above
            )
            .to(
                overlayRefs.current,
                {
                    opacity: 1,
                    stagger: 0.2, // match the position stagger
                    duration: 0.5,
                    ease: "power1.inOut",
                },
                "-=0.3" // slight overlap with previous animation
            );

    }, []);

    return (
        <div style={{
            margin: "2rem 4rem",
            display: "flex",
            flexDirection: "column",
            marginTop: "5rem",
            padding: "0rem 0rem 0rem 0rem",
            transform: "translateY(-80px)",
        }}>
            <div
                className={`${dinNext.className} text-[140px] xl:text-[160px]`}
                style={{
                    fontWeight: "700",
                    color: "#831719",
                    lineHeight: "1",
                }}>
                <p style={{
                    fontSize: "40px",
                    fontWeight: "400",
                    transform: "translateX(10px) translateY(10px)"
                }}>MEET OUR</p>
                <p>EXCELLENCE</p>
                <p>TEAM</p>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "4rem"
            }}>

                {
                    team.map(({ id, name, role, img }) => (
                        <div
                            key={id}
                            ref={(el) => (cardsRef.current[id - 1] = el)}
                            style={{
                                width: "100px",
                                height: "450px",
                                position: "relative",
                                borderRadius: "8rem",
                                overflow: "hidden",
                                margin: "5px",
                                transform: `translateX(calc(300% + ${id * 5}%)) translateY(-100%)`,
                            }}
                        >
                            <Image
                                src={img}
                                alt="scroll image"
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
                                    padding: "0.5rem 1.2rem",
                                    borderRadius: ".5rem",
                                    opacity: 0,
                                }}>
                                <p className={dinNext.className} style={{ fontSize: "26px", fontWeight: "400" }}>{name}</p>
                                <p style={{ fontSize: "16px" }}>{role}</p>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    );
}