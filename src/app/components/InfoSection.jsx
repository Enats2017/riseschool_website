"use client";
import Image from "next/image";
import { dinNext } from "../fonts";

export default function InfoSection() {
  return (
    <section className="flex flex-col items-center text-center leading-[1.6] bg-[#831719] text-[#dad7d2] py-12">
      
      {/* Logo */}
      <Image
  src="/images/rise-lodha-logo-for-svg.svg"
  alt="rise-logo"
  width={120} // required by Next.js
  height={150} // required by Next.js
  className="w-[60px] h-[75px] sm:w-[80px] sm:h-[100px] md:w-[100px] md:h-[125px] lg:w-[120px] lg:h-[150px] translate-y-2 md:translate-y-8"
/>

      {/* Content */}
     <div className="w-[90%] md:w-[80%] lg:w-[60%] mt-0 flex flex-col items-center text-[14px] md:text-[20px] ">


        <div className="-translate-y-4">
          <p
            className={`${dinNext.className} text-[#dad7d2] text-[30px] md:text-[35px] lg:text-[40px] font-normal translate-y-[40px] md:translate-y-[3.5rem] lg:translate-y-[4.5rem]`}
          >
            SCHOOL OF
          </p>
          <p
            className={`${dinNext.className} text-[#fff]  text-[80px] md:text-[120px] lg:text-[160px]  font-bold`}
          >
            TOMORROW
          </p>
        </div>

        <div className="-translate-y-8  md:-translate-y-12">
          <p>
            At Rising India School of Excellence, you’ll discover a school built
            for <strong className="text-[#fff]">tomorrow</strong>, where
            learning goes beyond textbooks combining{" "}
            <strong className="text-[#fff]">academic excellence</strong> with{" "}
            <strong className="text-[#fff]">future-focused skills, global exposure,</strong>{" "}
            and <strong className="text-[#fff]">character development</strong>.
            You’ll find classrooms transformed into{" "}
            <strong className="text-[#fff]">innovation hubs</strong>, where
            applied knowledge meets <strong className="text-[#fff]">creativity, technology</strong>, 
            and real-world <strong className="text-[#fff]">problem-solving</strong>. 
            You’ll meet teachers who are <strong className="text-[#fff]">mentors</strong>, guiding each child personally.
            You’ll see students immersed in design, AI & Robotics, sustainability, entrepreneurship, sports, and arts.
          </p>

          <p className="mt-6">
            Here, we believe education is not about fitting into yesterday’s mold, but about rising to the{" "}
            <strong className="text-[#fff]">opportunities</strong> of tomorrow.
          </p>

          <p className="mt-6">
            We are not a traditional school.
          </p>

          <p>
            We are the <strong className="text-[#fff]">School of Tomorrow</strong>. Future-focused, Human-centered, and Globally Ready.
          </p>
        </div>
      </div>
    </section>
  );
}
