"use client";

import { useEffect, useState } from "react";
import { HorizontalScrollingSection1 } from "./HorizontalScrollingSection1";
import CurriculumMobile from "./CurriculumMobile";
import { dinNext } from "../fonts";

export default function Curriculum() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div
      style={{
        // display: "flex",
        // flexDirection: "column",
        // marginTop: "10rem",
      }}
    >
      {isMobile ? <CurriculumMobile/> : <HorizontalScrollingSection1/> }


    </div>
  );
}