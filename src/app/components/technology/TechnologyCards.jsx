'use client';
import { Card2 } from '../Cards/Card2';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ScrollSmoother from 'gsap/dist/ScrollSmoother';
import { dinNext } from '@/app/fonts';

gsap.registerPlugin(ScrollSmoother,ScrollTrigger);

const data = [
  {
    id:1,
    imgSrc:"/images/Grand-Open-Entrance.webp",
    title:"Personalized Learning",
    desc:"iPads and Apple apps adapt to each child’s pace, interests, and strengths.",
  },
  {
    id:2,
    imgSrc:"/images/portfolio/Early-Years-Discovery-New.webp",
    title:"Creativity Unleashed",
    desc:"Tools like GarageBand, iMovie, and Keynote help children express themselves in music, film, design, and presentations.",
  },
  {
    id:3,
    imgSrc:"/images/portfolio/Early Years Funverse.webp",
    title:"Coding & Future Skills",
    desc:"With Swift Playgrounds, children learn coding in a fun, interactive way that builds logical thinking and problem-solving.",
  },
  {
    id:4,
    imgSrc:"/images/portfolio/Apple Enabled Classroom.webp",
    title:"Collaboration & Communication",
    desc:"Apple Classroom and iCloud allow seamless teamwork, idea-sharing, and real-time feedback.",
  },
  {
    id:5,
    imgSrc:"/images/portfolio/Innovation Lab.webp",
    title:"Accessibility for All",
    desc:"Built-in features ensure every learner, regardless of need, can participate fully.",
  },
  {
    id:6,
    imgSrc:"/images/portfolio/Music Room.webp",
    title:"Secure & Reliable",
    desc:"Apple’s commitment to privacy and safety ensures a trustworthy learning environment.",
  },
  {
    id:7,
    imgSrc:"/images/portfolio/Library.webp",
    title:"Future-Ready Competence",
    desc:"Students graduate with digital fluency, creative confidence, and global skill sets.",
  },
  
]


export default function TechnologyCards() {


  const wrapperRef = useRef(null)
  const contentRef = useRef(null)

  useGSAP(() => {

    const cards = gsap.utils.toArray(".card")

    cards.forEach((card,i)=>{

      gsap.to(card,{
        scale:0.6 + 0.2 * (i / (cards.length-1)),
        ease:"none",
        scrollTrigger:{
          trigger:card,
          // start:"top " + (100+ 35*i),
          start:"top " + (100),
          end:"bottom bottom",
          endTrigger:".portfolio-container",
          scrub:.5,
          pin:card,
          pinSpacing:false,
          invalidateOnRefresh:true,
          // markers:true,
        }
      })

    })



  });

  return (
    <>
    <div style={{
      textTransform:"uppercase",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      transform:"translateY(35px)"
    }}>
     
     <p className={`${dinNext.className} font-[700] text-[96px] transform translate-y-8`}><span className='text-[#831710]'>TECHNOLOGY IS</span> NOT AN ADD-ON</p>
     <p className={`${dinNext.className} text-[40px] text-[#121212]`}>BUT A BACKBONE OF TOMORROW’S LEARNING</p>

    </div>
    <section id='smooth-wrapper' 
    ref={wrapperRef}
    style={{
      height:"100%",
      width:"100%",
      overflow:"hidden",
    }}
    >
      <div id='smooth-content' ref={contentRef} style={{width:"100%",}}>
        <div className="spacer" style={{
          width:"100%",
          minHeight:"5vh"
        }}></div>
      <div className="portfolio-container" style={{
        width:"100%",
        minHeight:"100vh",
        display:"flex",
        flexDirection:'column',
        alignItems:"center",
        
      }}>
        <div className="stacked-cards" style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          width:"95%",
        }}>

          {data.map(({id,imgSrc,title,desc})=>(
<div className="card" style={{width:"100%",height:"75vh",borderRadius:"1rem",backgroundColor:"#fff",marginBottom:"10vh",overflow:'hidden'}} key={id}>
            <Card2 imgSrc={imgSrc} title={title} desc={desc} />
            </div>
          ))}

         <div className="card" style={{width:"100%",height:"75vh",borderRadius:"1rem",marginBottom:"10vh",overflow:'hidden'}}>
            </div> 
         
        </div>
      </div>
      </div>
    </section>
    </>
  );
}
