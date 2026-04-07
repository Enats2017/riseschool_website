"use client";
import Image from "next/image";
import { dinNext } from "@/app/fonts";

export const About = () => {
  return (
    <section className="flex flex-col items-center text-center leading-[1.6]  py-12">
      
      {/* Logo */}
      <Image
  src="/images/rise-lodha-logo-for-svg.svg"
  alt="rise-logo"
  width={120} // required by Next.js
  height={150} // required by Next.js
  className="w-[60px] h-[75px] sm:w-[80px] sm:h-[100px] md:w-[100px] md:h-[125px] lg:w-[120px] lg:h-[150px] translate-y-2 md:translate-y-8"
/>

      {/* Content */}
     <div className="w-[90%] md:w-[90%] lg:w-[80%] xl:w-[60%] mt-0 flex flex-col items-center text-[14px] md:text-[20px] ">


        <div className="">
             <p
            className={`${dinNext.className} text-[#831719] text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-[700] uppercase transform translate-y-8 md:translate-y-12`}
          >
            About
          </p>
          <p
            className={`${dinNext.className} text-[#121212]  text-[32px] md:text-[36px] lg:text-[40px] mt-2`}
          >
            Primary Years Programme
          </p>
         
        </div>

        <div className="text-[16px] sm:text-[20px] text-black mt-6">
          <p>
            The <strong className="text-[#831719]">IB Primary Years Programme at RISE</strong> cultivates <strong className="text-[#831719]">curiosity, creativity, and compassion</strong>. Students inquire, think critically, and make meaningful connections with the world around them. Our classrooms are places of exploration, collaboration, and reflection where every child is encouraged to be a confident communicator, a caring friend, and a curious thinker.
          </p>

          <p className="mt-6">
            The programme lays the foundation for lifelong learning and <strong className="text-[#831719]">global citizenship</strong>, helping students see themselves as active participants in their communities and beyond.
          </p>

        </div>
      </div>
    </section>
  );
}
