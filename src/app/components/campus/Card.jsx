import Image from "next/image";

import { dinNext } from "@/app/fonts";

export const Card = ({ title, img }) => {
    return (
        <>
            {/* Outer full-width container (unchanged) */}
            <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[500px] xl:h-[550] overflow-hidden group">
                
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent"></div>

                        {/* Text content */}
                        <div
                            className={`${dinNext.className} font-[700] absolute bottom-0 w-full text-center text-white p-4  text-[24px] sm:text-[32px] md:text-[40px] -space-y-2 uppercase leading-[1]`}
                        >
                            <p>{title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
