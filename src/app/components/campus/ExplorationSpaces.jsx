"use client"
import { useRef } from "react";
import { dinNext } from "@/app/fonts";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css";

import LeftArrow from "../Icons/LeftArrow";
import RightArrow from "../Icons/RightArrow";
import { Card } from "./Card";


    const data = [
        { id:2,title: "EARLY YEARS FUNVERSE", img: "/images/Early Years Funverse.webp" },
        { id:3,title: "FOOTBALL COURT", img: "/images/Football court.webp" },
        { id:4,title: "BASKETBALL COURT", img: "/images/Basketball court.webp" },
        { id:5,title: "SKATING", img: "/images/Skating.webp" },
        { id:1,title: "GYMNASTICS", img: "/images/Gymnastics.jpg" },
    ];

export const  ExplorationSPaces = () => {
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
                <p className={`text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-[700] uppercase ${dinNext.className} leading-[1]`} ><span className="text-[#831719]">Exploration</span> Spaces</p>

                <p className={`text-[24px] lxs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] uppercase font-[400] ${dinNext.className} transform -translate-y-0 leading-[1]`} > Where curiosity sparks discovery </p>

                <p className="text-[#1b1b1b] ${montserrat.className} text-[17px] max-w-6xl mt-6 md:mt-8  mx-auto transform -translate-y-0">
                    
                    Designed to unlock every child's potential beyond the classroom, from the <span className="text-[#831719] font-bold">Funverse</span> that spark imagination, to the <span className="text-[#831719] font-bold">Champions Arena</span> and Arena of Sports Excellence that build strength and discipline, to the <span className="text-[#831719] font-bold">Leadership Lawns</span> that nurture confidence and teamwork—every space inspires exploration, resilience, and growth.
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