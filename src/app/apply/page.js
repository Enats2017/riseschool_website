"use client";
import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
import { dinNext } from '../fonts';
import Link from 'next/link';
import Image from 'next/image';
import {
    Edit3,
    Users,
    Target,
    UserCheck,
    Lock,
    Calendar,
    GraduationCap,
    DollarSign,
    RotateCcw
} from 'lucide-react';



gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function ApplicationPage() {
    const containerRef = useRef();
    const heroRef = useRef();
    const textRef = useRef();
    const formRef = useRef();
    const navRef = useRef();
    const [isScrolled, setIsScrolled] = useState(false);

    // Navbar scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Letter-by-letter animation using SplitText
    useGSAP(() => {
        const headingElement = textRef.current?.querySelector('.main-heading');
        const subheadingElement = textRef.current?.querySelector('.sub-heading');

        if (headingElement && subheadingElement) {
            // Set the text content first
            headingElement.textContent = "MAKING INTERNATIONAL SCHOOLING ";
            subheadingElement.textContent = "ACCESSIBLE";

            // Split text into characters using SplitText
            const headingSplit = new SplitText(headingElement, { type: "chars" });
            const subheadingSplit = new SplitText(subheadingElement, { type: "chars" });

            // Set initial state for characters (hidden and positioned to the right)
            gsap.set(headingSplit.chars, { opacity: 0, x: 30 });
            gsap.set(subheadingSplit.chars, { opacity: 0, x: 50 });

            // Create timeline for sequential letter-by-letter animation
            const tl = gsap.timeline();
            const t2 = gsap.timeline()

            // Animate heading characters with stagger
            tl.to(headingSplit.chars, {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: "back.out(1.7)",
                stagger: 0.05 // delay between each character
            });

            t2.to(subheadingSplit.chars, {
                opacity: 1,
                x: 0,
                duration: 0.4,
                ease: "power2.out",
                stagger: 0.03
            }, "+=0.2");
        }
    }, { scope: containerRef });

    // Background image scroll animation
    useGSAP(() => {
        if (heroRef.current) {
            gsap.to(heroRef.current, {
                yPercent: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen bg-white">


            {/* Hero Section with Background Image */}
            <section className="relative h-[80vh] overflow-hidden">
                {/* Background Image */}
                <div
                    ref={heroRef}
                    className="absolute inset-0 w-full h-[120%]"
                    style={{
                        backgroundImage: `url('/images/StackImage3.jpeg')`,
                        backgroundSize: "cover",
                        // backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        // backgroundColor: '#2c3e50', // Fallback color if image doesn't load
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                {/* Animated Text Content */}
                <div
                    ref={textRef}
                    className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
                >
                    <h1
                        className={`main-heading ${dinNext.className} text-white font-bold text-[24px] sm:text-[30px] mb-4 transform translate-y-20`}
                        style={{
                            lineHeight: 1.2,
                            // maxWidth: '900px',
                            fontWeight: 400,
                        }}
                    >
                        {/* Text will be populated by GSAP SplitText */}
                    </h1>

                    <p
                        className={`sub-heading ${dinNext.className} text-white text-opacity-90 mb-10 text-[80px] sm:text-[100px]  transform translate-y-12`}
                        style={{

                            // maxWidth: '600px',
                            fontWeight: 700,
                        }}
                    >
                        {/* Text will be populated by GSAP SplitText */}
                    </p>

                    <div className="w-full max-w-2xl px-4 mb-10">
                        <Image
                            src="/images/international.webp"
                            alt="International Education"
                            width={650}
                            height={500}
                            className="w-full h-auto rounded-2xl shadow-xl"
                            priority
                        />
                    </div>

                    {/* Scroll Indicator */}
                    {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
                        </div>
                        <p className="text-white text-sm mt-2">Scroll Down</p>
                    </div> */}
                </div>
            </section>

            {/* Application Form Section */}
            <section ref={formRef} className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Left Side - Steps */}
                        <div className="pr-8">
                            <h2 className={`${dinNext.className} mb-8`} style={{ color: "#831719", fontWeight: 400, fontSize: "40px" }}>
                                Application Deadline: 18th October 2025
                            </h2>

                            {/* Founding Families Privileges */}
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-10">
                                <h3 className={`${dinNext.className} text-[20px] font-semibold mb-4`} style={{ color: "#831719" }}>
                                    “First 50 Founding Families” Exclusive Privileges
                                </h3>

                                <ul className="space-y-5 text-gray-700 text-[16px]">
                                    <li className="flex items-start space-x-3">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold" style={{ backgroundColor: "#831719" }}>
                                            1
                                        </div>
                                        <span>Be part of the <strong>Parent Advisory Circle</strong> to formulate some of the school policies.</span>
                                    </li>

                                    <li className="flex items-start space-x-3">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold" style={{ backgroundColor: "#831719" }}>
                                            2
                                        </div>
                                        <span>Enjoy a <strong>3-year Fees Lock</strong> – no escalation.</span>
                                    </li>

                                    <li className="flex items-start space-x-3">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold" style={{ backgroundColor: "#831719" }}>
                                            3
                                        </div>
                                        <span>Be eligible for <strong>International Schooling Founders’ Scholarship</strong> up to 30%.</span>
                                    </li>

                                    <li className="flex items-start space-x-3">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold" style={{ backgroundColor: "#831719" }}>
                                            4
                                        </div>
                                        <span>Families will get early access to <strong>exclusive workshops</strong> before the school opens for the Academic Year.</span>
                                    </li>

                                    <li className="flex items-start space-x-3">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold" style={{ backgroundColor: "#831719" }}>
                                            5
                                        </div>
                                        <span>Benefit from <strong>100% Refund Assurance</strong> of the registration fees in case of non-selection.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Founding Family Privileges */}
                            <div>
                                <h3 className={`${dinNext.className} text-[22px]  mb-6`} style={{ color: "#831719", fontWeight: 500, }}>
                                    Simple Steps to Be Part of the Exclusive Founding Families Club
                                </h3>
                                {/* Founding Families Privileges */}
                                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-10">
                                    {/* <h3 className={`${dinNext.className} text-[20px] font-semibold mb-4`} style={{ color: "#831719" }}>
                                        “First 50 Founding Families” Exclusive Privileges
                                    </h3> */}

                                    <ul className="space-y-5 text-gray-700 text-[16px]">
                                        <li className="flex items-start space-x-3">
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold" style={{ backgroundColor: "#831719" }}>
                                                1
                                            </div>
                                            <span><strong>APPLY</strong> now and secure your child’s place by just paying ₹2,500 and unlock eligibility for the International Schooling Founders’ Scholarship</span>
                                        </li>

                                        <li className="flex items-start space-x-3">
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold" style={{ backgroundColor: "#831719" }}>
                                                2
                                            </div>
                                            <span><strong>VISIT</strong> Goa’s Most Innovatively Designed School Campus during our Exclusive Orientation & Selection Week this November</span>
                                        </li>

                                        <li className="flex items-start space-x-3">
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold" style={{ backgroundColor: "#831719" }}>
                                                3
                                            </div>
                                            <span><strong>ENROL</strong> your child in Goa’s Most Future-ready International School as part of the elite Founding Families Club</span>
                                        </li>                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Application Form */}
                        <div className="relative">
                            {/* Extended APPLY NOW Banner */}
                            <div
                                className={`${dinNext.className} text-[28px] text-center text-white py-4 mb-6 `}
                                style={{ backgroundColor: "#831719", fontWeight: 400 }}
                            >
                                Enquire Now
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-lg min-h-[650px] -mt-6 pt-10">
                                <form className="space-y-8">
                                    {/* Parent Details */}
                                    <div>
                                        <h4
                                            className={`${dinNext.className} text-[24px] mb-4 `}
                                            style={{ color: "#831719" }}
                                        >
                                            PARENT DETAILS
                                        </h4>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-[16px]  mb-1">Parent's Full Name *</label>
                                                <input
                                                    type="text"
                                                    className="w-full p-2.5 text-sm border border-gray-300 rounded focus:ring-1 focus:border-transparent"
                                                    style={{
                                                        focusRingColor: "#831719",
                                                        '--tw-ring-color': '#831719'
                                                    }}
                                                    placeholder="Enter parent's full name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[16px]  mb-1">Mobile Number *</label>
                                                <input
                                                    type="tel"
                                                    className="w-full p-2.5 text-sm border border-gray-300 rounded focus:ring-1 focus:border-transparent"
                                                    style={{
                                                        focusRingColor: "#831719",
                                                        '--tw-ring-color': '#831719'
                                                    }}
                                                    placeholder="Enter mobile number"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <label className="block text-[16px]  mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                className="w-full p-2.5 text-sm border border-gray-300 rounded focus:ring-1 focus:border-transparent"
                                                style={{
                                                    focusRingColor: "#831719",
                                                    '--tw-ring-color': '#831719'
                                                }}
                                                placeholder="Enter email address"
                                            />
                                        </div>
                                    </div>

                                    {/* Child Details */}
                                    <div>
                                        <h4
                                            className={`${dinNext.className} text-[24px] mb-4 `}
                                            style={{ color: "#831719" }}
                                        >
                                            CHILD DETAILS
                                        </h4>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-[16px]  mb-1">Child's Full Name *</label>
                                                <input
                                                    type="text"
                                                    className="w-full p-2.5 text-sm border border-gray-300 rounded focus:ring-1 focus:border-transparent"
                                                    style={{
                                                        focusRingColor: "#831719",
                                                        '--tw-ring-color': '#831719'
                                                    }}
                                                    placeholder="Enter child's full name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[16px]  mb-1">Date of Birth *</label>
                                                <input
                                                    type="text"
                                                    className="w-full p-2.5 text-sm border border-gray-300 rounded focus:ring-1 focus:border-transparent"
                                                    style={{
                                                        focusRingColor: "#831719",
                                                        '--tw-ring-color': '#831719'
                                                    }}
                                                    placeholder="dd/mm/yyyy"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 mt-3">
                                            <div>
                                                <label className="block text-[16px]  mb-1">Grade Applying For *</label>
                                                <select
                                                    className="w-full p-2.5 text-sm border border-gray-300 rounded focus:ring-1 focus:border-transparent"
                                                    style={{
                                                        focusRingColor: "#831719",
                                                        '--tw-ring-color': '#831719'
                                                    }}
                                                >
                                                    <option>Select Grade</option>
                                                    <option>Pre-KG</option>
                                                    <option>LKG</option>
                                                    <option>UKG</option>
                                                    <option>Grade 1</option>
                                                    <option>Grade 2</option>
                                                    <option>Grade 3</option>
                                                    <option>Grade 4</option>
                                                    <option>Grade 5</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-[16px]  mb-1">Address *</label>
                                                <select
                                                    className="w-full p-2.5 text-sm border border-gray-300 rounded focus:ring-1 focus:border-transparent"
                                                    style={{
                                                        focusRingColor: "#831719",
                                                        '--tw-ring-color': '#831719'
                                                    }}
                                                >
                                                    <option>Select Area</option>
                                                    <option>Gurgaon</option>
                                                    <option>Delhi</option>
                                                    <option>Noida</option>
                                                    <option>Faridabad</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full text-white py-3 rounded font-bold text-[16px] transition-colors duration-300"
                                        style={{
                                            backgroundColor: "#831719",
                                            ':hover': { backgroundColor: "#2d2d86" }
                                        }}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = "#2d2d86"}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = "#831719"}
                                    >
                                        SUBMIT NOW
                                    </button>

                                    <p className="text-[14px] text-gray-500  mt-3">
                                        *A non-refundable application fee of INR 1000 is required to complete your application.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}