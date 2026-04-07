"use client"
import { useRef } from "react";
import { dinNext } from "@/app/fonts";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css";

import LeftArrow from "../Icons/LeftArrow";
import RightArrow from "../Icons/RightArrow";
import { Card } from "./Card";


const data = [
    { id:2,title: "PERFORMING ARTS", img: "/images/Early Years Performing Arts.jpg" },
    { id:3,title: "INSTRUMENTAL MUSIC ROOM", img: "/images/Instrumental Music Room.jpg" },
    { id:4,title: "VOCAL MUSIC ROOM", img: "/images/Vocal Music Room.jpg" },
    { id:5,title: "DANCE & THEATRE", img: "/images/Dance & Theatre.jpg" },
    { id:1,title: "TEDX ROOM", img: "/images/TEDxRoom.jpg" },
    ];

export const ExpressionSpaces = () => {
    const splideRef = useRef(null);

    const handlePrev = () => splideRef.current?.splide?.go("<");
    const handleNext = () => splideRef.current?.splide?.go(">");
    return (
        <section className="mb-10 mt-16" style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>

            <div className="w-[90%] max-w-[1380px] text-center mb-8">
                <p className={`text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-[700] uppercase ${dinNext.className} leading-[1]`} ><span className="text-[#831719]">Expression </span> Spaces </p>

                <p className={`text-[24px] lxs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] uppercase font-[400] ${dinNext.className} transform -translate-y-0 leading-[1]`} > Where talents are mastered </p>

                <p className="text-[#1b1b1b] ${montserrat.className} text-[17px] max-w-5xl mt-6 md:mt-8  mx-auto transform -translate-y-0">
                    
                    Here, every child finds a stage, a rhythm, a voice. From theatre and dance to <span className="text-[#831719] font-bold">TEDx talks</span>, from the gentle notes of the <span className="text-[#831719] font-bold">Melody Room</span> to the vibrant energy of the <span className="text-[#831719] font-bold">Rhythm & Rhyme Room</span> and the grandeur of the <span className="text-[#831719] font-bold">Harmony Hall</span>, our spaces echo with creativity, confidence, and self-expression. This is where talent takes flight and individuality finds its song.
                    </p>
            </div>

            <div className="flex justify-center relative  w-full">


                <div className="relative w-[90%] sm:w-2/3 lg:w-[90%] max-w-[1380px]">

                    <button onClick={handlePrev} className="bg-transparent border-2 border-[#831719] w-[64px] md:w-[90px] h-[64px] md:h-[90px] absolute left-4 top-1/2 transform -translate-y-1/2 z-20 flex justify-center items-center rounded-full group hover:bg-[#831719]">

                        <LeftArrow
                            className="group-hover:text-white"
                        />
                    </button>
                    <button onClick={handleNext} className="bg-transparent border-2 border-[#831719] w-[64px] md:w-[90px] h-[64px] md:h-[90px] absolute right-4 top-1/2 transform -translate-y-1/2 z-20 flex justify-center items-center rounded-full group hover:bg-[#831719]">

                        <RightArrow
                            className="group-hover:text-white"
                        />
                    </button>

                    <Splide
                        ref={splideRef}
                        options={{
                            type: "loop",
                            perPage: 3,
                            perMove: 1,
                            gap: "20px",
                            focus: "center",
                            drag: "free",
                            snap: true,
                            pagination: false,
                            arrows: false,
                            breakpoints: {
                                1280:{gap:"0px"},
                                1024: { perPage: 1 },
                            }
                        }}

                    >
                        {data.map(ele => (
                            <SplideSlide key={ele.id}><Card title={ele.title} subTitle={ele.subTitle} img={ele.img} /></SplideSlide>
                        ))}

                    </Splide>
                </div>
            </div>

        </section>
    )
}