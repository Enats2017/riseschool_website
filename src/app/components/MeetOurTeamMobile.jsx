"use client";

import Image from "next/image";
import { dinNext } from "../fonts";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const team = [

    {
        id: 1,
        name: "PAYAL GABA",
        role: "President – Rising India School Excellence Management Private Limited",
        img: "/images/team/payal-gaba.webp",
    },
    {
        id: 2,
        name: "Aniket A Salunkhe",
        role: "Founding Principal",
        img: "/images/team/aniket.png",
    },
    {
        id: 6,
        name: "Zeenat Bandukwala",
        role: "Education Director",
        img: "/images/team/zeenat_bandukwala.jpeg",
    },
    // {
    //     id: 3,
    //     name: "Anu Monga",
    //     role: "Advisor - IB",
    //     img: "/images/team/anu_monga.png",
    // },
    // {
    //     id: 4,
    //     name: "SAMARESH SHAH",
    //     role: "Advisor - Entrepreneurial Mindset",
    //     img: "/images/team/samaresh-sir.png",
    // },
    
    // {
    //     id: 5,
    //     name: "Dr. Anuj Kacker",
    //     role: "Advisor - AI in Education",
    //     img: "/images/team/ANUJ.webp",
    // },

];


export default function MeetOurTeamMobile() {
  return (
    <div style={{ padding: "12px",transform:"translateY(-100px)" }}>
      {/* ✅ Heading above images, single line */}

      <div>

      <p
        className={`${dinNext.className}`}
        style={{
          fontSize: "20px",
          fontWeight: "500",
          color: "#831719",
          // marginBottom: "1.5rem",
          // textAlign: "center",
          transform:"translateY(12px)"
        }}
        >
        MEET OUR
      </p>

      <p style={{
        fontSize:"32px",
        fontWeight:"700",
        color:"#831719"
      }}>EXCELLENCE TEAM</p>
        </div>

      <div
        // style={{
        //   display: "flex",
        //   overflowX: "auto",
        //   gap: "1rem",
        //   paddingBottom: "1rem",
        //   scrollSnapType: "x mandatory",
        // }}
      >
        <Splide 
        options={{
          type:"loop",
          arrows:false,
          pagination:false,
          autoplay:true,
          interval:4000,
        }}
        >
        {team.map(({ id, name, role, img }) => (
          <SplideSlide key={id}>
          <div
            style={{
              flex: "0 0 auto",
              width: "280px",
              height: "420px",
              position: "relative",
              borderRadius: "1rem",
              overflow: "hidden",
              scrollSnapAlign: "center",
            }}
          >
            <Image src={img} alt={name} fill style={{ objectFit: "cover" }} />
            <div
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                color: "#fff",
                position: "absolute",
                bottom: "1rem",
                left: "1rem",
                right: "1rem",
                padding: "0.5rem 1rem",
                borderRadius: ".5rem",
                opacity: 1,
              }}
            >
              <p
                className={`${dinNext.className}`}
                style={{ fontSize: "20px", fontWeight: "500" }}
              >
                {name}
              </p>
              <p style={{ fontSize: "14px" }}>{role}</p>
            </div>
          </div>
          </SplideSlide>
        ))}
        </Splide>
      </div>
    </div>
  );
}
