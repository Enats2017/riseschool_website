"use client"
import { useRef } from "react";
import { dinNext } from "@/app/fonts";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css";
import Link from "next/link";

import Image from "next/image";
import LeftArrow from "../Icons/LeftArrow";
import RightArrow from "../Icons/RightArrow";

const Card = ({ title, subTitle, img }) => {
    return (
        <>
            {/* Outer full-width container (unchanged) */}
            <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[500px] overflow-hidden group">
                
                {/* Inner div that has the hover border effect */}
                <div className="absolute inset-0 border border-transparent p-1.5 sm:p-2.5 transition-all duration-350 group-hover:border-[#831719] group-hover:border-[1.5px]">
                    
                    {/* Image container */}
                    <div className="relative w-full h-full overflow-hidden">
                        <Image
                            src={img}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            style={{ filter: 'brightness(100%)' }}
                            priority
                        />

                        {/* Black gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                        {/* Text content */}
                        <div
                            className={`${dinNext.className} font-[700] absolute bottom-0 w-full text-center text-white p-4 text-[40px] -space-y-2 uppercase leading-[1]`}
                        >
                            <p>{title}</p>
                            <p>{subTitle}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Button */}
            <div className="flex justify-center items-center my-10">
                <Link href={title === "EARLY School" ? "/early" : "/primary"}>
                <button className="bg-[#831719] text-white text-[20px] h-[46px] px-4 rounded-full cursor-pointer transition-transform duration-300 hover:scale-105">
                    Discover More
                </button>
                </Link>
            </div>
        </>
    );
};


const data = [
    {
        id: 1,
        title: "EARLY School",
        subTitle: "(AGES 3-6)",
        img: "/images/Early Years Funverse.webp",
    },
    {
        id: 2,
        title: "Primary School",
        subTitle: "(Grade 1-5)",
        img: "/images/Football court.webp",
    },
    {
        id: 3,
        title: "Middle School",
        subTitle: "(Grade 6-10)",
        img: "/images/Basketball court.webp",
    },
    {
        id: 4,
        title: "High School",
        subTitle: "(Grade 11-12)",
        img: "/images/Skating.webp",
    },
]

export const ProgressiveCards = () => {
    const splideRef = useRef(null);

    const handlePrev = () => splideRef.current?.splide?.go("<");
    const handleNext = () => splideRef.current?.splide?.go(">");
    return (
        <section className="mb-10 mt-16 flex flex-col items-center">

            <div className="w-[90%] max-w-[1380px] text-center mb-8">
                <p className={`text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-bold uppercase ${dinNext.className} leading-[1]`} ><span className="text-[#831719]">PROGRESSIVE CURRICULUM</span> OF <br className="hidden lg:block" />TOMORROW</p>

                <p className={`text-[24px] lxs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] uppercase font-[400] ${dinNext.className} transform -translate-y-0 leading-[1]`} >NOT JUST ACADEMIC EXCELLENCE BUT FUTURE-READY GLOBAL CITIZENS</p>

                <p className="text-[17px] text-[#1b1b1b] mt-4">
                    We follow <span className="text[#831719] font-bold">International Curriculum </span> and provide an option of <span className="text[#831719] font-bold">CBSE</span> starting Grade 6. It is not just a curriculum, but a transformational journey designed to shape curious learners into compassionate leaders, equipped with the skills, values, and confidence to thrive in an ever-changing world.</p>
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