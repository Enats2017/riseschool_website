"use client";

import { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { gsap } from "gsap";
import LeftArrow from "../Icons/LeftArrow";
import RightArrow from "../Icons/RightArrow";
import { dinNext, montserrat } from "@/app/fonts";

export default function UniquePracticesOfTomorrow() {
    const [activeSlide, setActiveSlide] = useState(0);
    const contentRef = useRef(null);
    const splideRef = useRef(null);

    const slides = [
        {
            id: 1,
            title: "Creator Hours",
            image: "/images/Creator Hours.png",
            content: (<>You’ll find children creating <strong className='text-[#831719]'>projects and portfolios</strong>  through investigations, explorations, adventures and quests which help them build connections between the knowledge they gain and the skills they develop to solve real-world problems.</>),
        },
        {
            id: 2,
            title: "TechXplore",
            image: "/images/TechXplore.png",
            content: (<>As an <strong className='text-[#831719]'>Apple-Enabled School</strong>, we use technology as a powerful tool that is intentionally integrated into our education program to foster independent & <strong className='text-[#831719]'>Personalized Learning.</strong>As a school that places high value on innovation, you’ll find our campus on the cutting edge of technology and constantly looking for new ways to enhance our students’ learning.</>),
        },
        {
            id: 3,
            title: "MyPath",
            image: "/images/MyPath.png",
            content: (<>We move away from the <strong className='text-[#831719]'>"One-Size-Fits-All"</strong> model and embrace learning paths that are personalized to each  <strong className='text-[#831719]'>Student’s Pace, Interests, and Strengths. </strong>Through learner profiles, adaptive technology, and continuous mentorship, students not only gain mastery in academics but also feel seen, valued, and empowered to achieve their personal best.</>),
        },
        {
            id: 4,
            title: "SETU",
            image: "/images/SETU.png",
            content: (<>We serve as a bridge for true <strong className='text-[#831719]'>global exposure.</strong> You’ll experience our children participate in international student collaborations, <strong className='text-[#831719]'>cultural exchange programs, global competitions and model UNs,</strong>to let them engage with diverse perspectives, solve global challenges, and build the confidence to lead with innovation and empathy on the world stage.</>),
        },
        {
            id: 5,
            title: "Impact Hour",
            image: "/images/Impact Hour.png",
            content: (<>We want our children to thrive holistically with this unique concept of ‘Impact Hour’ – dedicated to inculcate passion for <strong className='text-[#831719]'>Sports, Music, Community Service, Innovation & Design and Global Mindedness</strong></>),
        },
    ];

    useEffect(() => {
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
            );
        }
    }, [activeSlide]);

    const handlePrev = () => splideRef.current?.splide?.go("<");
    const handleNext = () => splideRef.current?.splide?.go(">");

    return (
        <section className="bg-white mt-6 sm:mt-8 lg:mt-16 mb-8">
            <div className="w-full mx-auto px-4">
                {/* Header */}

                <div className="text-center mb-6 ">
                    <h2 className={`text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-bold uppercase ${dinNext.className} leading-[1]`}>
                        <span className="text-[#831719]">Unique Practices</span> of Tomorrow
                    </h2>
                    <h3 className={`text-[24px] lxs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] uppercase font-[400] ${dinNext.className} transform -translate-y-0 leading-[1]`}>
                        Not Just Routines But Revolutions
                    </h3>
                    <p className={`text-[#1b1b1b] text-[17px] max-w-4xl mx-auto ${montserrat.className} transform -translate-y-0 mt-2 mb-4 `}>
                        Here learning goes beyond convention. we make learning deeper, more personal, and globally connected,
                        nurturing holistic growth beyond classrooms.
                    </p>
                </div>

                {/* Content Section */}
                <div className=" flex justify-center ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-0 sm:px-20 h-full w-full max-w-[1536px]">
                        {/* Left: Text */}
                        <div ref={contentRef} className=" min-w-[45%] h-full pr-0 lg:pr-10 mx-2  flex flex-col justify-center">
                            <p className={`${dinNext.className} text-[#831719] font-[400] tracking-tighter leading-[1] mb-2 text-[52px] xs:text-[64px] md:text-[96px] uppercase`}>{slides[activeSlide].title}</p>
                            <div className={`text-gray-700 text-[17px] leading-relaxed ${montserrat.className}`}>
                                {slides[activeSlide].content}
                            </div>

                        </div>
                        {/* Right: Slider */}
                        <div className="relative min-w-[55%] mt-8 md:mt-6 lg:mt-0">
                            <Splide
                                ref={splideRef}
                                options={{
                                    type: "loop",
                                    perPage: 1,
                                    padding: "164px",
                                    focus: "center",
                                    gap: "20px",
                                    arrows: false,
                                    pagination: false,
                                    // autoplay: true,
                                    // interval: 3000,
                                    speed: 400,
                                    pauseOnHover: false,
                                    breakpoints: {
                                        1280: { padding: "120px", },
                                        1180: { padding: "120px", },
                                        1024: { padding: "164px", },
                                        824: { padding: "100px", },
                                        768: { padding: "0px", },
                                        480: { padding: "0px", },
                                    },
                                }}
                                onMoved={(splide) => {
                                    const realIndex = splide.Components.Slides.getAt(splide.index).index;
                                    setActiveSlide(realIndex);
                                }}
                                onMounted={(splide) => {
                                    const realIndex = splide.Components.Slides.getAt(splide.index).index;
                                    setActiveSlide(realIndex);
                                }}
                                className="overflow-hidden"
                            >
                                {slides.map((slide, i) => (
                                    <SplideSlide key={slide.id}>
                                        <div
                                            className={`overflow-hidden bg-[#831719] transition-transform duration-500 ${i === activeSlide ? "opacity-100 shadow-xl" : "opacity-60"
                                                }`}
                                        >
                                            <div className="relative h-[480px]  xss:h-[500px] xs:h-[600px] md:h-[480px] lmd:h-[500px] lg:h-[400px] xl:h-[430px] xlg:h-[500px]">
                                                <img
                                                    src={slide.image}
                                                    alt={slide.title}
                                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 object-contain"
                                                />
                                            </div>
                                        </div>
                                        {/* Title below card */}


                                        <h3
                                            className={`text-center mt-4 text-[48px] font-[700] uppercase transition-colors duration-300 leading-[1]  ${dinNext.className} ${i === activeSlide ? "text-[#831719]" : "text-gray-400"
                                                }`}
                                        >
                                            {slide.title}
                                        </h3>

                                    </SplideSlide>
                                ))}
                            </Splide>

                            {/* Custom Arrows */}
                            {/* Custom Navigation Arrows */}
                            <div className="tp-testimonial-navigation">
                                <button
                                    onClick={handlePrev}
                                    className="tp-campus-prev  absolute left-6 top-1/2 -translate-y-1/2 z-10"
                                    aria-label="Previous slide"
                                >
                                    <div className="w-[90px] h-[90px] rounded-full flex items-center justify-center border-2 border-white md:border-[#831719] hover:bg-white md:hover:bg-[#831719] group transition-colors duration-200">
                                        <LeftArrow className="text-white md:text-[#831719] group-hover:text-[#831719] md:group-hover:text-white transition-colors duration-200" />
                                    </div>
                                </button>

                                <button
                                    onClick={handleNext}
                                    className="tp-campus-next  absolute right-6 top-1/2 -translate-y-1/2 z-10"
                                    aria-label="Next slide"
                                >
                                    <div className=" w-[90px] h-[90px] rounded-full flex items-center justify-center border-2 text-white md:border-[#831719] hover:bg-white md:hover:bg-[#831719] group transition-colors duration-200">
                                        <RightArrow className="text-white md:text-[#831719] group-hover:text-[#831719] md:group-hover:text-white transition-colors duration-200" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}