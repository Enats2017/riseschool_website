"use client";

import { useEffect, useState } from "react";
import MeetOurTeamDesktop from "./MeetOurTeamDesktop";
import MeetOurTeamMobile from "./MeetOurTeamMobile";
import { dinNext } from "../fonts";

export default function MeetOurTeam() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      {isMobile ? <MeetOurTeamMobile /> : <MeetOurTeamDesktop />}
    </>
  );
}