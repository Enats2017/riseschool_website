"use client";

import { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { gsap } from "gsap";
import LeftArrow from '../Icons/LeftArrow';
import RightArrow from '../Icons/RightArrow';
import { dinNext, montserrat } from '@/app/fonts';

export default function PedagogyOfTomorrow() {
    const [activeSlide, setActiveSlide] = useState(0);
    const contentRef = useRef(null);
    const splideRef = useRef(null);

    const slides = [
        {
            id: 1,
            title: "Inquiry Based",
            image: "/images/inquiry-based-learning.png",
            content: (
                <>
                    At the heart of each learning experience is <strong className="text-[#831719]">QUEST Inquiry Cycle</strong>, fully aligned with the IB philosophy. Our classrooms are designed to spark curiosity, ignite questions, and encourage students to explore concepts deeply and meaningfully. Every learning experience begins with wonder, as students generate authentic questions and pursue understanding through hands-on investigation and collaboration. They analyse, organize, and synthesize information, making connections across subjects, disciplines, and <strong className="text-[#831719]">Real-World Contexts.</strong> Understanding is demonstrated through creative <strong className="text-[#831719]">Projects, Presentations, and Exhibitions,</strong> and students are encouraged to take action in ways that positively impact their school, community, and beyond. Inquiry is not a linear process; it is cyclical, reflective, and student-driven
                </>
            ),
        },
        {
            id: 2,
            title: "Technology Enhanced",
            image: "/images/tech-based.png",
            content: (
                <>
                    Learning here is <strong className="text-[#831719]">Technology-enhanced,</strong> transforming classrooms into dynamic spaces for innovation and discovery. As an <strong className="text-[#831719]">Apple-enabled school,</strong> students leverage iPads, MacBooks, and a suite of creative tools to conduct research, visualize data, design solutions, and showcase understanding. Technology is seamlessly integrated at every stage of the QUEST cycle—from initial questioning and investigation to demonstrating learning and taking action—ensuring that <strong className="text-[#831719]">Digital Literacy, Creativity, and Critical Thinking </strong> are embedded in authentic learning experiences. It empowers students to collaborate globally, personalize their learning journeys, and explore ideas beyond traditional classroom boundaries.
                </>
            ),
        },
        {
            id: 3,
            title: "Student Agency",
            image: "/images/student-agency.png",
            content: (
                <>
                    Central to our approach is <strong className="text-[#831719]">Student agency.</strong> Students are encouraged to take ownership of their learning, make informed choices, and pursue passions that align with their interests and strengths. They determine what they want to learn, how they will investigate, and the ways in which they will demonstrate and apply their understanding. This sense of agency nurtures <strong className="text-[#831719]">Autonomy, Responsibility, and Self-Motivation,</strong> preparing learners to navigate complex challenges with confidence and integrity. Student agency, paired with inquiry and technology, ensures that learning is purposeful, relevant, and deeply engaging.
                </>
            ),
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
        <section className="bg-white">
            <div className="w-full mx-auto px-4">


                {/* Header */}
                <div className="text-center mb-4">
                    <h2 className={`text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-[700] uppercase ${dinNext.className} leading-[1]`}>
                        <span className="text-[#831719]">Pedagogy</span> of Tomorrow
                    </h2>
                    <h3 className={`text-[24px] lxs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] uppercase font-[400] ${dinNext.className} transform -translate-y-0 leading-[1]`}>
                        Not Just Instruction But Inspiration
                    </h3>
                    <p className={`text-[#1b1b1b] text-[17px] max-w-5xl mx-auto ${montserrat.className} mt-2 mb-8`}>
                        The three pedagogical pillars —{" "}
                        <strong className="text-[#831719]">Inquiry, Technology, and Student Agency</strong> — work together to create a{" "}
                        <strong className="text-[#831719]">School of Tomorrow</strong> where students not only adapt to the future but actively shape it.
                    </p>
                </div>

                {/* Content Section */}
                <div className=" flex justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-0 sm:px-20 h-full w-full max-w-[1536px]">
                    {/* Left: Slider */}
                    <div className="relative min-w-[60%] ">
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
                                    1024: { padding: "164px" ,},
                                    824: { padding: "100px" ,},
                                    768: { padding: "0px" ,},   
                                    480: { padding: "0px" ,},   
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

                    {/* Right: Dynamic Content */}
                    <div ref={contentRef} className=" min-w-[40%] h-full pl-0 lg:pl-10 mx-2 mt-12 sm:mt-24 lg:mt-12 ">
                        <p className={`${dinNext.className} text-[#831719] font-[400] tracking-tighter leading-[1] mb-2 text-[52px] xs:text-[64px] md:text-[96px] uppercase`}>{slides[activeSlide].title}</p>
                        <div className={`text-gray-700 text-[17px] leading-relaxed ${montserrat.className}`}>
                            {slides[activeSlide].content}
                        </div>

                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}
