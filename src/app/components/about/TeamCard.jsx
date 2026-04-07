"use client"
import { dinNext } from "@/app/fonts"
import { useState } from "react"

export const TeamCard = ({ title, name, img, summary, content, quote }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className=" relative my-2 lg:my-4 xl:my-8 mt-[80px] md:mt-[0px]">
            <div className="bg-[#831719] absolute top-[-60px] md:top-[30px] left-1/2 md:left-[0px] -translate-x-1/2 md:-translate-x-0 h-[200px]  md:h-[220px] aspect-square overflow-hidden rounded-[20px] "><img src={img} alt={name} /></div>
            <div
                // className=" shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-[24px] p-[32px] flex flex-col ml-[110px] pl-[150px]" 
                className=" shadow-[0_16px_50px_-12px_rgba(0,0,0,0.15)] rounded-[24px] p-[32px] flex flex-col md:ml-[110px] md:pl-[142px] pt-[132px]  md:pt-[0px]"

                style={{
                    transition: "all .4s ease"
                }}>
                <p className="text-[#999999] text-[14px] mt-4">{title}</p>
                <p className={`${dinNext.className} text-[30px] font-[400] text-[#831719] mt-1`}>{name}</p>
                <p className="text-[17px] text-[#1b1b1b] mt-2">{summary}</p>
                {
                    isOpen
                    &&
                    <div className="text-[17px] mt-12">
                        <div>
                            {content}
                        </div>
                        <p className="mt-[20px] pl-[20px] italic border-l-[3px] border-l-[#80191b] border-solid p-4">"{quote}"</p>
                    </div>

                }

                <div>
                    <button
                        className=" text-nowrap inline-block mt-5 px-[30px] py-4
         bg-gradient-to-r from-[#bd5153] to-[#80191b]
         text-white text-[14px] font-medium tracking-[0.5px] uppercase 
         no-underline rounded-[50px]
         shadow-[0_10px_25px_rgba(247,117,65,0.25)]
         transition-all duration-300 ease-in-out
         cursor-pointer"
                        onClick={() => setIsOpen(prev => !prev)}
                    >{isOpen ? 'Show Less' : 'Read More'}</button>
                </div>
            </div>
        </div>
    )
}