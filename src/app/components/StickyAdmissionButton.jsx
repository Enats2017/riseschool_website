// components/StickyAdmissionButton.jsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const StickyAdmissionButton = () => {
    const pathname = usePathname();

    // Hide on the Future 100 page
    if (pathname === "/future-100" || pathname === "/future-100/") return null;

    return (
        <Link href="/admissions">
            <button 
            className="
        fixed right-0 top-1/3 
        bg-[#d62828] text-white 
        text-center
        p-2 md:p-3 cursor-pointer z-2000
        shadow-lg
        transition-all duration-300 
        writing-vertical-rl font-medium  text-[12px] sm:text-[14px] md:text-[16px]
        hover:bg-[#831719] -rotate-90 origin-bottom-right
      "
      >
                ADMISSIONS
            </button>
        </Link>
    );
};

export default StickyAdmissionButton;
