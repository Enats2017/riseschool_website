import Image from "next/image"
import Link from "next/link"

import { dinNext } from "@/app/fonts"

export const Card1 = ({ title, subtitle, desc, image }) => {
    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            borderLeft: "1px solid white",
            display: "flex",
            // paddingTop: "2.5rem",
            color: "#ffffff",
            flexShrink: 0,
            position: "relative", // required for Image fill
            overflow: "hidden",
            // backgroundColor: "rgba(135, 34, 47, 0.5)"
        }}>
            {/* Background Image */}
            <Image
                src={`${image}`}
                alt="background"
                fill
                style={{ objectFit: "cover", zIndex: -1 }}
                // style={{ zIndex: -1,backgroundSize:"cover",backgroundRepeat:'no-repeat',backgroundPosition:"center" }}
            />

            {/* Overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to right, #831719 0%, transparent 100%)",
                    zIndex: -1,
                }}
            />

            {/* Left side content */}
            <div style={{
                width: "70%",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent:"end",
                padding: "1rem",
                paddingLeft: "5rem",
                height: "100%",
                paddingBottom:"4rem",
                // backgroundColor:"rgba(135, 34, 47, 1)" 


            }}>
                <p 
                
                className={dinNext.className}

                style={{
                    position: "absolute",
                    fontSize: "32px",
                    fontWeight: "400",
                    top: "120px",
                    left: "60px",
                    transform: "rotate(90deg)",
                    transformOrigin: "top left",
                    whiteSpace: "nowrap",
                    textTransform: "uppercase"
                }}>
                    {title}
                </p>

                <div style={{
                    // backgroundColor: "rgba(135, 34, 47, 1)",
                    padding: "1rem",
                    borderRadius: "1rem"
                }}>

                    <p
                        className={`${dinNext.className} font-[700] text-[92px] uppercase`}
                        >{title}</p>

{
    subtitle !== "" ? (
                        <p
                        className={`${dinNext.className} font-[500] text-[40px] uppercase transform -translate-y-4`}
                       >{subtitle}</p>
                    ) : 
                    (
                        null
                    )

}
                    

                    <p className="text-[17px] mt-6">{desc}</p>
                </div>
            </div>

            {/* Right side left blank now (since bg covers all) */}
            <div style={{
                width: "30%",
            }} />
        </div>
    )
}
