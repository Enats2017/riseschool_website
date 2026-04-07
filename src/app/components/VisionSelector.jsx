"use client";

import { useEffect, useState } from "react";
import { Vision } from "./Vision";
import ThreeColumnScrolling from "./ThreeColumnScrolling";
import { dinNext } from "../fonts";

export default function VisionSelector() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div
    >
      {isMobile ? <Vision/> : <ThreeColumnScrolling/>}
    </div>
  );
}