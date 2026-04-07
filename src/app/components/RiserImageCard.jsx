"use client"
import Image from "next/image"
import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { dinNext } from "../fonts"

export default function RiserImageCard({imagePath,number,title,desc,altText="img description"}) {
  const imageRef = useRef(null)
  const numberRef = useRef(null)
  const containerRef = useRef(null)

  const [hoveredBtn, setHoveredBtn] = useState(false)

  useGSAP(() => {
      const img = imageRef.current
      const num = numberRef.current

      // Hover IN
      containerRef.current.addEventListener("mouseenter", () => {
        gsap.to(img, {
          height: 450,
          y: -150,
          duration: 1,
          ease: "power1.inOut",
        })
        gsap.to(num, { color: "#fff", duration:1 })
      })

      // Hover OUT
      containerRef.current.addEventListener("mouseleave", () => {
        gsap.to(img, {
          height: 300,
          y: 0,
          duration: 1,
          ease: "power1.inOut",
        })
        gsap.to(num, { color: "#762123", duration:1 })
      })

  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "280px",
        margin: 5,
        marginTop:"5rem",
        // marginBottom:"5rem",
        alignItems: "flex-start",
        flexShrink:0
      }}
    >
      <p
        ref={numberRef}
        style={{
          fontSize: "50px",
          fontWeight: "400",
          margin: 0,
          color:"#762123",
          zIndex: 2,
        }}
        className={`${dinNext.className}`}
      >
        0{number+1}
      </p>

      <div style={{ width: "100%", height: "300px"}}>
        <Image
          ref={imageRef}
          src={`/images/${imagePath}`}
          width={280}
          height={300}
          alt={altText}
          style={{
            height: "300px",
            objectFit: "cover",
            transition: "none",
            display: "block",
          }}
        />
      </div>

      <p
        style={{
          color:"#762123",
          fontSize:"30px",
          fontWeight:"400",
          marginTop:".8rem",
          textTransform:"uppercase",
        }}
        className={`${dinNext.className}`}
      >
        {title}
      </p>
      <p 
        style={{
          width: "100%",
          textAlign: "left",
          color:"#1b1b1b",
          fontSize:"17px",
          marginTop:"0rem"
        }}
      >
       {desc}
      </p>

      {/* Animated Button */}
      {/* <button
        onMouseEnter={() => setHoveredBtn(true)}
        onMouseLeave={() => setHoveredBtn(false)}
        style={{
          position: "relative",
          overflow: "hidden",
          color: "#ffffff",
          backgroundColor: "#191919",
          padding: "17px 25px",
          marginTop: "1rem",
          fontSize: "14px",
          width: "180px",
          height: "52px",
        //   border: "3px solid #644cad",
          fontWeight: "bold",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 0,
            left: hoveredBtn ? 0 : "50%",
            right: hoveredBtn ? 0 : "50%",
            bottom: 0,
            backgroundColor: "#831719",
            zIndex: 0,
            transition: "all 0.5s ease",
          }}
        ></span>
        <span
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          LEARN MORE
        </span>
      </button> */}
    </div>
  )
}
