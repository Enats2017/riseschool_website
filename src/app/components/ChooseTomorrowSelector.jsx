"use client";

import { useEffect, useState } from "react";
import ChooseTomorrow from "./ChooseTomorrow";
import ChooseTomorrowMobile from "./ChooseTomorrowMobile";

export default function ChooseTomorrowSelector() {
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
      {isMobile ? <ChooseTomorrowMobile/> : <ChooseTomorrow/> }


    </div>
  );
}