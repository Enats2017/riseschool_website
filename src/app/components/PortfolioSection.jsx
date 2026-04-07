'use client';
import { Card2 } from './Cards/Card2';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ScrollSmoother from 'gsap/dist/ScrollSmoother';
import { dinNext } from '../fonts';

gsap.registerPlugin(ScrollSmoother,ScrollTrigger);

const data = [
  {
    id:1,
    imgSrc:"/images/portfolio/Grand-Open-Entrance.webp",
    title:"THE GRAND ENTRANCE",
    desc:"The first step into tomorrow’s education",
  },
  {
    id:2,
    imgSrc:"/images/portfolio/Early-Years-Discovery-New.webp",
    title:"EARLY YEARS DISCOVERY LABS",
    desc:"Early learning reimagined through discovery and play.",
  },
  {
    id:3,
    imgSrc:"/images/portfolio/Early Years Funverse.webp",
    title:"EARLY YEARS FUNVERSE",
    desc:"A playful universe where little minds explore big ideas.",
  },
  {
    id:4,
    imgSrc:"/images/portfolio/Apple Enabled Classroom.webp",
    title:"Apple Enabled Smart Classroom",
    desc:"Apple-enabled spaces that personalize every child’s journey.",
  },
  {
    id:5,
    imgSrc:"/images/portfolio/Innovation Lab.webp",
    title:"INNOVATION LABS",
    desc:"Labs that spark problem-solving, design, and discovery",
  },
  {
    id:6,
    imgSrc:"/images/portfolio/Music Room.webp",
    title:"HARMONY HALL: ORCHESTRA STUDIOS",
    desc:"A stage for harmony, creativity, and expression",
  },
  {
    id:7,
    imgSrc:"/images/portfolio/Library.webp",
    title:"Library-cum-research hub",
    desc:"More than books, it's a launchpad for ideas and the heart of learning, thinking, and creating",
  },
  {
    id:8,
    imgSrc:"/images/portfolio/Sports-Arena.webp",
    title:"THE CHAMPIONS ARENA: Sports Arena ",
    desc:"Where effort meets victory",
  },
  {
    id:9,
    imgSrc:"/images/portfolio/TedX-Room.webp",
    title:"THE TEDx ROOM ",
    desc:"Building storytellers, leaders, and changemakers.",
  },
  {
    id:10,
    imgSrc:"/images/portfolio/Learning-Common-Rooms.webp",
    title:"LEARNING COMMONS",
    desc:" A common ground for uncommon ideas where ideas connect and learners collaborate",
  },
]


export default function PortfolioSection() {


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
      transform:"translateY(60px)"
    }}>
     <p
  className={`${dinNext.className} text-[#121212] text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-normal translate-y-6 sm:translate-y-8 md:translate-y-12 lg:translate-y-14`}
>
  Experience The School of
</p>

     <p className={`${dinNext.className} text-[#831719] text-[84px]  sm:text-[110px] md:text-[132px] lg:text-[160px] font-bold`}>
  Tomorrow
</p>

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
<div className="card" style={{width:"100%",height:"75vh",borderRadius:"1rem",backgroundColor:"#fff",marginBottom:"5vh",overflow:'hidden'}} key={id}>
            <Card2 imgSrc={imgSrc} title={title} desc={desc} />
            </div>
          ))}
{/* 
         <div className="card" style={{width:"100%",height:"75vh",borderRadius:"1rem",marginBottom:"10vh",overflow:'hidden'}}>
            </div>  */}
         
        </div>
      </div>
      </div>
    </section>
    </>
  );
}
