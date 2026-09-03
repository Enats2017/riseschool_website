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
        img: "/images/team/payal-gaba.webp",
    },
    {
        id: 2,
        name: "Aniket A Salunkhe",
        role: "Founding Principal",
        img: "/images/team/aniket.png",
    },
    {
        id: 6,
        name: "Zeenat Bandukwala",
        role: "Education Director",
        img: "/images/team/zeenat_bandukwala.jpeg",
    },
    {
        id:7 ,
        name: "Remi Rajan",
        role: "PYPC Coordinator",
        img: "/images/team/remi_rajan.png",
    },
    // {
    //     id: 3,
    //     name: "Anu Monga",
    //     role: "Advisor - IB",
    //     img: "/images/team/anu_monga.png",
    // },
    // {
    //     id: 4,
    //     name: "SAMARESH SHAH",
    //     role: "Advisor - Entrepreneurial Mindset",
    //     img: "/images/team/samaresh-sir.png",
    // },
    
    // {
    //     id: 5,
    //     name: "Dr. Anuj Kacker",
    //     role: "Advisor - AI in Education",
    //     img: "/images/team/ANUJ.webp",
    // },

];



export default function MeetOurTeam() {

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
            margin: "2rem 4rem",
            display: "flex",
            flexDirection: "column",
            marginTop: "5rem",
            padding: "0rem 0rem 0rem 0rem",
            transform: "translateY(-80px)",
            // background:"red"
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
                        <div style={{ width: "320px", height: "450px", position: "relative", borderRadius: "1rem", overflow: "hidden", margin: "5px", transform: `translateX(calc(300% + ${id * 5}%)) translateY(-100%)`, width: "100px", borderRadius: "8rem" }} key={id} ref={(el) => (cardsRef.current[id - 1] = el)}>
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
                                    // background: "rgba(0, 0, 0, 0.1)",
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
                                <p className={`${dinNext.className}`} style={{ fontSize: "26px", fontWeight: "400" }}>{name}</p>
                                <p style={{ fontSize: "16px" }}>{role}</p>
                            </div>
                        </div>
                    ))
                }

            </div>


        </div>
    )
}
