"use client"

import { dinNext } from "@/app/fonts";
import Link from "next/link";
import EnquiryModal from "../EnquiryModal";
import { useState } from "react";

export const ChooseRise = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <section className="mt-0 mb-4 mx-4 sm:mx-8 md:mx-12 lg:mx-0  p-0 xl:p-4 h-auto lg:h-[600px] flex flex-col lg:flex-row justify-center items-center" >

                <div className="relative mb-4 lg:mb-0 w-full sm:w-[80%] lg:w-auto px-2 h-full transform translate-y-18 sm:translate-y-22 lg:translate-y-0">
                    <p
                        className={`${dinNext.className} text-[#831719] lg:text-right text-[42px] xss:text-[52px] xs:text-[64px] lxs:text-[74px] sm:text-[78px] md:text-[96px] lg:text-[64px] llg:text-[75px]  xl:text-[92px] xlg:text-[103px] uppercase font-[700] transform -translate-y-4 text-nowrap`}
                    >
                        Choose the <span className="lg:hidden">School</span>
                    </p>

                    <p className={`${dinNext.className} text-[#121212]  text-[42px] xss:text-[52px] xs:text-[64px] lxs:text-[74px] sm:text-[78px] md:text-[96px] lg:text-[52px] llg:text-[64px]  xl:text-[72px] xlg:text-[88px]  uppercase font-[700] transform   -translate-y-10 xs:-translate-y-12 lxs:-translate-y-14 lg:-translate-y-8 xl:-translate-y-12 text-nowrap `} >
                        of Tomorrow
                    </p>

                </div>



                <div className="relative  bg-[#831719] w-full sm:w-[80%] lg:w-[460px] h-[400px] xs:h-[500px] sm:h-[600px] lg:h-full overflow-hidden px-4">
                    {/* Text */}
                    <p
                        className={`${dinNext.className} hidden lg:block text-white text-[48px] lg:text-[64px] llg:text-[75px]  xl:text-[92px] xlg:text-[103px] uppercase font-[700] relative z-10 transform -translate-y-4 sm:-translate-y-4`}
                    >
                        School
                    </p>

                    {/* Image */}
                    <img
                        src="/images/chooserise.png"
                        alt="choose-rise"
                        className="absolute -bottom-10 left-0 w-full h-full object-contain z-10 hover:scale-110 transition-transform duration-500"
                    />
                </div>

                <div className=" lg:pl-6 w-full sm:w-[80%] lg:w-[400px] h-full text-[17px]">
                    <p className="mt-8 text-[#1b1b1b] text-[17px]"><span className="text-[#831719] font-bold">Choose Rising India School of Excellence because your child deserves more than just education</span>  they deserve innovation, global exposure, and holistic growth. A future-ready international school with a 4D learning model, world-class teachers, Apple-enabled innovation, small class sizes, and a campus designed as a living hub of learning. Here, tomorrow begins today. We invite you to experience the future of education.</p>
                    {/* <Link href="/apply"> */}
                        <button onClick={()=>openModal()} className="mt-8 lg:mt-16 h-[46px] w-[192px] rounded-full font-semibold bg-[#831719] text-white text-[20px]">
                           School Tour
                        </button>
                    {/* </Link> */}
                </div>

            </section>
           <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};
