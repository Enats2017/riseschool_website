"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { dinNext, montserrat } from '@/app/fonts';
import LeftArrow from '../Icons/LeftArrow';
import RightArrow from '../Icons/RightArrow';

export default function LearningInnovationSpaces() {
    // Card data
    const learningCards = [
        { title: "EARLY YEARS HOMEROOMS AS DISCOVERY ZONES", img: "/images/early-years-homerooms.jpg" },
        { title: "CLASSROOMS AS CLASS LABS", img: "/images/classrooms-as-class-labs.jpg" },
        { title: "LIBRARY-CUM-RESEARCH HUB", img: "/images/library-as-research-hub.jpg" },
        { title: "CORRIDORS AS LEARNING COMMONS", img: "/images/corridors-as-learning.jpg" }
    ];

    const explorationCards = [
        { title: "GYMNASTICS", img: "/images/Gymnastics.jpg" },
        { title: "EARLY YEARS FUNVERSE", img: "/images/Early Years Funverse.webp" },
        { title: "FOOTBALL COURT", img: "/images/Football court.webp" },
        { title: "BASKETBALL COURT", img: "/images/Basketball court.webp" },
        { title: "SKATING", img: "/images/Skating.webp" },
    ];

    const expressionCards = [
        { title: "TEDX ROOM", img: "/images/TEDxRoom.jpg" },
        { title: "PERFORMING ARTS", img: "/images/Early Years Performing Arts.jpg" },
        { title: "INSTRUMENTAL MUSIC ROOM", img: "/images/Instrumental Music Room.jpg" },
        { title: "VOCAL MUSIC ROOM", img: "/images/Vocal Music Room.jpg" },
        { title: "DANCE & THEATRE", img: "/images/Dance & Theatre.jpg" }
    ];

    const futureCards = [
        { title: "FINANCIAL LITERACY & ENTERPENURSHIP HUB", img: "/images/Financial Literacy & Entrepreneurship Hub.jpg" },
        { title: (<>EARLY YEARS<br/> STEM LAB</>), img: "/images/Early Years STEM Lab.jpg" },
        { title: "PRIMARY SCHOOL INNOVATION HUB", img: "/images/Primary School Innovation Lab.jpg" },
        { title: "MIDDLE & HIGH SCHOOL MAKERS HUB", img: "/images/Middle & High school Makers Lab.jpg" }
    ];

    // Card Component
    const Card = ({ title, img }) => (
        <div className="group transition-all duration-350 flex-shrink-0 w-full sm:w-[300px] md:w-[340px] lg:w-[380px]">
            <div className="relative overflow-hidden p-1.5 sm:p-2 border border-transparent transition-all duration-350 group-hover:border-[#831719] group-hover:border-[1.5px]">
                <div className="relative h-[400px] sm:h-[420px] md:h-[450px] w-full overflow-hidden">
                    <Image
                        src={img}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ filter: 'brightness(100%)' }}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
                    <div className={`${dinNext.className} font-[700] absolute bottom-4 w-full text-center text-white px-2 text-[40px]  -space-y-2 uppercase leading-[1]`}>
                        {title}
                    </div>
                </div>
            </div>
        </div>
    );

    // Function to render mobile-stacked header
    // const StackedHeader = ({ title }) => {
    //     return (
    //         <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold leading-tight md:leading-[1.1] text-black ${dinNext.className}`}>
    //             {typeof title === "string" ? (
    //                 title.split(" ").map((word, i) => (
    //                     <span key={i} className="block sm:inline mr-1">{word}</span>
    //                 ))
    //             ) : (
    //                 React.Children.map(title.props.children, (child, i) => (
    //                     <span key={i} className="block sm:inline mr-1">{child}</span>
    //                 ))
    //             )}
    //         </h1>
    //     );
    // };
    const StackedHeader = ({ title }) => {
        return (
            <h1 className={`text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-[700] uppercase ${dinNext.className} leading-[1]`} >
                {title}
            </h1>
        );
    };

    // Carousel Section Component
    const CardSection = ({ title, subtitle, description, cards }) => {
        const scrollRef = useRef();

        const scroll = (direction) => {
            if (scrollRef.current) {
                const card = scrollRef.current.firstChild;
                const cardWidth = card.offsetWidth + 16;
                const scrollAmount = direction === "right" ? cardWidth : -cardWidth;
                scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

                setTimeout(() => {
                    if (direction === "right") {
                        const firstCard = scrollRef.current.firstChild;
                        scrollRef.current.appendChild(firstCard);
                    } else {
                        const lastCard = scrollRef.current.lastChild;
                        scrollRef.current.prepend(lastCard);
                    }
                    scrollRef.current.scrollTo({ left: 0, behavior: "instant" });
                }, 400);
            }
        };

        return (
            <div className="mb-16 md:mb-24 lg:mb-32">
                <div className="text-center mb-8 md:mb-12 px-4 md:px-6">
                    <StackedHeader title={title} />
                    <h2 className={`text-[24px] lxs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] uppercase font-[400] ${dinNext.className} transform -translate-y-0 leading-[1]`} >
                        {subtitle}
                    </h2>
                    <p className={`text-[#1b1b1b] ${montserrat.className} text-[17px] max-w-5xl mt-6 md:mt-8  mx-auto transform -translate-y-0`}>
                        {description}
                    </p>
                </div>

                <div className="relative w-full max-w-[90%] sm:max-w-[95%] md:max-w-[1200px] mx-auto px-2 sm:px-4 md:px-6">
                    <button
                        onClick={() => scroll("left")}
                        className="hidden sm:block absolute -left-10 md:-left-12 top-1/2 -translate-y-1/2 z-10"
                    >
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 border-[#831719] hover:bg-[#831719] group transition-colors duration-200">
                            <LeftArrow className="text-[#831719] group-hover:text-white transition-colors duration-200" />
                        </div>
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide gap-2 sm:gap-4 md:gap-6"
                    >
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="snap-start flex-shrink-0 w-full sm:w-[300px] md:w-[340px] lg:w-[360px]"
                            >
                                <Card {...card} />
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll("right")}
                        className="hidden sm:block absolute -right-10 md:-right-12 top-1/2 -translate-y-1/2 z-10"
                    >
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 border-[#831719] hover:bg-[#831719] group transition-colors duration-200">
                            <RightArrow className="text-[#831719] group-hover:text-white transition-colors duration-200" />
                        </div>
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className={`min-h-screen bg-white mt-12 mb-5 ${dinNext.className}`}>
            <CardSection
                title={<>LEARNING <span className="text-[#831719]">INNOVATION</span> SPACES</>}
                subtitle="WHERE KNOWLEDGE TRANSFORMS INTO INNOVATION"
                description={<>You'll find children turning curiosity into experiments in our <span className="text-[#831719] font-bold"> Class labs</span> and young minds growing in our <span className="text-[#831719] font-bold">Library of Inquiry Research</span>. You'll see collaboration come alive in our <span className="text-[#831719] font-bold">Learning Commons</span> and our little ones discovering while engaging themselves in play & pretend, dance & music and STEM innovation.</>}
                cards={learningCards}
            />

            <CardSection
                title={<> <span className="text-[#831719]">EXPLORATION</span> SPACES </>}
                subtitle="WHERE CURIOSITY SPARKS DISCOVERY"
                description={<>Designed to unlock every child's potential beyond the classroom, from the <span className="text-[#831719] font-bold">Funverse</span> that spark imagination, to the <span className="text-[#831719] font-bold">Champions Arena</span> and Arena of Sports Excellence that build strength and discipline, to the <span className="text-[#831719] font-bold">Leadership Lawns</span> that nurture confidence and teamwork—every space inspires exploration, resilience, and growth.</>}
                cards={explorationCards}
            />

            <CardSection
                title={<> <span className="text-[#831719]">EXPRESSION</span> SPACES </>}
                subtitle="WHERE TALENTS ARE MASTERED"
                description={<>Here, every child finds a stage, a rhythm, a voice. From theatre and dance to <span className="text-[#831719] font-bold">TEDx talks</span>, from the gentle notes of the <span className="text-[#831719] font-bold">Melody Room</span> to the vibrant energy of the <span className="text-[#831719] font-bold">Rhythm & Rhyme Room</span> and the grandeur of the <span className="text-[#831719] font-bold">Harmony Hall</span>, our spaces echo with creativity, confidence, and self-expression.</>}
                cards={expressionCards}
            />

            <CardSection
                title={<> FUTURE <span className="text-[#831719]">MAKER</span> SPACES </>}
                subtitle="WHERE IDEAS CREATE BREAKTHROUGHS"
                description={<>Our Future Innovation Excellence spaces ignite curiosity and equip students to shape tomorrow with confidence. In the <span className="text-[#831719] font-bold">Little Tinker Lab</span>, small hands bring big ideas to life, while the <span className="text-[#831719] font-bold">Spark Hub</span> lights the path of imagination for our young explorers. As they grow, the <span className="text-[#831719] font-bold">Future Makers Lab</span> empowers them to invent solutions for the world ahead, and the <span className="text-[#831719] font-bold">Innovation Studio</span> becomes a launchpad to design, create, and transform. From <span className="text-[#831719] font-bold">STEM to Robotics to AI</span>, these spaces nurture thinkers, doers, and pioneers of the future.</>}
                cards={futureCards}
            />

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .snap-x {
                    scroll-snap-type: x mandatory;
                }
                .snap-center {
                    scroll-snap-align: center;
                }
            `}</style>
        </div>
    );
}
