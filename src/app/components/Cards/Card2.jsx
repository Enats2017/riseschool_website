'use client'
import Image from 'next/image';
import { dinNext } from '@/app/fonts';

export const Card2 = ({ imgSrc, title, desc }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: "1rem",
      }}
    >
      {/* Image covering the whole div */}
      <Image
        src={imgSrc}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
      />

      {/* Dark overlay with gradient at the bottom */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to top, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Title at the bottom center */}
     <div className="absolute bottom-5 left-1/2 w-full -translate-x-1/2 text-center z-20 px-4 ">
        <p
          className={`${dinNext.className} text-white text-nowrap text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-normal uppercase`}
        >
          {title}
        </p>
        <p className=" text-[15px] text-white  w-full sm:text-[17px] transform -translate-y-2">
          {desc}
        </p>
      </div>

    </div>
  );
};
