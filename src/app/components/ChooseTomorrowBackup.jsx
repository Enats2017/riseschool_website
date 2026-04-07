"use client";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
// import { ReactLenis } from '@studio-freight/react-lenis';

import { dinNext } from '../fonts';
gsap.registerPlugin(useGSAP, ScrollTrigger);

import Image from 'next/image';

const Card = ({ title, copy, img, index }) => {
  return (
    <div
      className=""
      id={`card-choose${index + 1}`}
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      <div
        className="card-inner-choose flex flex-col lg:flex-row  py-6 px-2 md:px-10"
        style={{
          position: "relative",
          willChange: "transform",
          width: "80%",
          maxWidth: 1350,
          height: "100%",
          // padding: "2em 3em",
          display: "flex",
          borderTop: "1px dashed #dc2626",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="card-content-choose flex-1 px-6 lg:px-0 bg-white relative z-20 w-full lg:w-[60%] min-w-full lg:min-w-[60%]">
  <h2
    className={`${dinNext.className} text-black uppercase mb-8  text-[25px] md:text-[40px] font-[400] tracking-[-0.02em] leading-[1.1] whitespace-nowrap`}>
    {title}
  </h2>
  <p
    className="text-[15px] md:text-[17px] font-normal text-[#1b1b1b] leading-relaxed m-0"
  >
    {copy}
  </p>
</div>

        <div
          className="card-img  min-w-[40%] mt-6 lg:mt-0"
          
        >

          <div className="">

            <Image
              src={img}
              alt={title}
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


const cards = [
  {
    title: "Project-based learning",
    copy: "Our unique ‘Creator Hours’ let children dive into explorations, adventures, and quests—connecting knowledge with skills to solve real-world problems",
    img: "/images/Project-based-learning.webp"
  },
  {
    title: "Technology-enhanced learning",
    copy: "As an Apple-enabled school, we harness technology to drive personalized, independent learning—keeping our campus on the cutting edge of innovation.",
    img: "/images/Technology-enhanced-learning.webp"
  },
  {
    title: "Personalized growth",
    copy: "Respecting every child’s unique pace, passions, and purpose, ensuring no one is left behind.",
    img: "/images/Personalised-Growth.webp"
  },
  {
    title: "Global Mindedness",
    copy: "Connecting every child to the world beyond borders through collaborations, experiences, and ideas.",
    img: "/images/Global-Mindness.webp"
  },
  {
    title: "Impact hour",
    copy: "For our children we have created the concept of ‘Impact Hour’ - dedicated to inculcate passion for sports, music, community service, innovation & design thinking and global mindedness in our children. ",
    img: "/images/Impact-Hour.webp"
  },
  {
    title: "Joyful Learning",
    copy: "Creating classrooms where curiosity is celebrated and learning is joyous.",
    img: "/images/Joyful-learning.webp"
  },
  {
    title: "Holistic Excellence",
    copy: "Keeping academic mastery at the core while balancing with skills, arts, sports, and well-being.",
    img: "/images/Holistic-Excellence.webp"
  },
];

export default function ChooseTomorrow() {

 
  const wrapperRef = useRef(null)
  const contentRef = useRef(null)

  useGSAP(() => {

    const cards = gsap.utils.toArray(".card-choose")

    cards.forEach((card, i) => {

      gsap.to(card, {
        // ease:"none",
        scrollTrigger: {
          trigger: card,
          start: "top " + (100 + 80 * i),
          //   start:"top " + (100) ,
          endTrigger: ".choose-container",
          // end:"bottom bottom",
          end:"bottom+=20% bottom",
          // end: `bottom+=${i == cards.length - 1 ? '20%' : '20%'} bottom`,

          scrub: true,
          pin: card,
          pinSpacing: false,
          invalidateOnRefresh: true,
          // markers:true,
        }
      })

    })



  });

  return (
    <>
      <div style={{
        textTransform: "uppercase",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transform: "translateY(60px)"
      }}>
        <p
          className={`${dinNext.className} text-[24px] sm:text-[32px] md:text-[40px] translate-y-7 md:translate-y-12`}
          style={{
            color: "#121212",
            // fontSize: "40px",
            fontWeight: 400,
            // transform: "translateY(50px)"
          }}>CHOOSE THE SCHOOL OF</p>

          
        <p
          className={`${dinNext.className} text-[80px] sm:text-[100px] md:text-[160px]  `}
          style={{
            color: "#831719",
            // fontSize: "160px",
            fontWeight: "700"
          }}>Tomorrow</p>
      </div>
      <section id='smooth-wrapper-choose'
        ref={wrapperRef}
        className=" h-full w-full   mb-[900px] sm:mb-[1100px] md:mb-[1200px] lg:mb-[500px]"
      >
        <div id='smooth-content-choose' ref={contentRef} style={{ width: "100%", }}>
          <div className="spacer" style={{
            width: "100%",
            minHeight: "5vh"
          }}>
            
          </div>
          <div className="choose-container" style={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",

          }}>
            <div className="stacked-cards" style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "95%",
            }}>

              {cards.map(({ title, copy, img }, id) => (
                <div className="card-choose" style={{ width: "100%", borderRadius: "1rem", backgroundColor: "#fff", marginBottom: "0vh", overflow: 'hidden' }} key={id}>
                  <Card img={img} title={title} copy={copy} index={id} />
                </div> 
              ))}



              {/* <div className="card-choose" style={{width: "100%", height: "50vh", borderRadius: "1rem", marginBottom: "0vh", overflow: 'hidden' }}></div> */}
            </div>
          </div>
        </div> 
      </section>
    </>
  );
}
