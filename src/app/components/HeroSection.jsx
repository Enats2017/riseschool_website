"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AnimatedText from "./Icons/AnimatedText";
import KeepScrolling from "./KeepScrolling";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const overlayRef = useRef(null);
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=2500",
                scrub: 2,
                pin: true,
            },
        });

        // Overlay image animation
        tl.to(overlayRef.current, {
            scale: 5,
            opacity: 0,
            transformOrigin: "center center",
            // ease: "power1.inOut",
        });

        // AnimatedText fade in after overlay fades out
        tl.to(textRef.current, {
            opacity: 1,
            ease: "power1.inOut",
        }, "<"); // use "<" if you want it to start at the same time as overlay, 
        // or leave it without "<" if you want it after overlay finishes
    }, []);

    return (
        <div
            ref={sectionRef}
            style={{ position: "relative", height: "100vh", overflow: "hidden" }}
        >
            {/* Background video */}
            <video
                src="/videos/bg-video.mp4"
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline
               webkit-playsinline="true"
                disablePictureInPicture={true}
                 controls={false}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1,
                }}
            />
            <div
                ref={overlayRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            >
                <picture>
                    <source
                        srcSet="/images/for-mobile.png"
                        media="(max-width: 700px)"
                    />
                    <Image
                        src="/images/for.png"
                        alt="Overlay"
                        fill
                        style={{ objectFit: "cover", transform: "scale(1)", willChange: "transform, opacity" }}
                    />
                </picture>
            </div>

            {/* AnimatedText (controlled by GSAP) */}
            <div ref={textRef} style={{ opacity: 0, zIndex: 2 }}>
                <AnimatedText />
            </div>

            <KeepScrolling />
        </div>
    );
}
