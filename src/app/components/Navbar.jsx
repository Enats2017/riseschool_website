"use client"
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { X } from "lucide-react";
import EnquiryModal from "./EnquiryModal";


const linksData = [
  { linkText: "Home", linkUrl: "/" },
  { linkText: "About Us", linkUrl: "/about-us" },
  { linkText: "Campus", linkUrl: "/campus" },
  { linkText: "Academics", linkUrl: "/academic-life" },
  { linkText: "Beyond Academics", linkUrl: "/beyond-academics" },
  { linkText: "Technology", linkUrl: "/technology" },
  { linkText: "Admissions", linkUrl: "/admissions" },
  { linkText: "Careers", linkUrl: "/career" },
  { linkText: "Blog", linkUrl: "/blog" },
]

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const logoRef = useRef(null);
  const buttonRef = useRef(null);
  const hasAppeared = useRef(false);
  const hamburgerRef = useRef([])

  // Mobile menu state
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Desktop scroll animation
  useGSAP(() => {
    const nav = navRef.current;
    const links = linksRef.current;
    const logo = logoRef.current;
    const button = buttonRef.current;

    const animteToTransparent = () => {
      gsap.to(nav, { y: 0, duration: 0.5, ease: "power2.out", backgroundColor: "transparent", boxShadow: "none" });
      gsap.to(links, { color: "#ffffff", duration: 0.5 });
      gsap.to(logo, { filter: "brightness(0) invert(1)", duration: 0.5 });
      gsap.to(button, { backgroundColor: "transparent", color: "#ffffff", duration: 0.5 });
      gsap.to(hamburgerRef.current, {
        backgroundColor: "#fff"
      })
    }

    const animateToWhite = () => {
      gsap.fromTo(
        nav,
        { y: -nav.offsetHeight, backgroundColor: "#ffffff", boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.08)" },
        { y: 0, duration: 1, ease: "power2.out" }
      );

      gsap.to(links, { color: "#000000", duration: 0 });
      gsap.to(logo, { filter: "none", duration: 0 });
      gsap.to(button, { backgroundColor: "#831719", color: "#ffffff", duration: 0 });
      gsap.to(hamburgerRef.current, {
        backgroundColor: "#121212"
      })
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // console.log("navbar called")
      // console.log(`${scrollY} - ${hasAppeared.current}`)

      if (scrollY > 60 && !hasAppeared.current) {


        animateToWhite()
        hasAppeared.current = true;
      } else if (scrollY <= 60 && hasAppeared.current) {


        hasAppeared.current = false;
        animteToTransparent()

      }
    };

    handleScroll()

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  useEffect(() => {
    if (isOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(prev => !prev);

    if (!isOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: "power2.out" });
    } else {
      gsap.to(menuRef.current, { x: "100%", duration: 0.5, ease: "power2.in" });
    }
  };

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-2 z-1005 transition-colors duration-500 "
        style={{ backgroundColor: "transparent", padding: ".8rem 1.2rem", }}
      >
        {/* Logo */}
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            width={220}
            height={45}
            ref={logoRef}
            className="w-[120px] md:w-[220px]"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex w-full">
          <div className="w-full flex justify-end ">
            <div className="mx-4 flex flex-wrap gap-5 items-center justify-start">
              {linksData.map((linkObj, i) => (
                <Link
                  key={i}
                  href={linkObj.linkUrl}
                  ref={el => (linksRef.current[i] = el)}
                  className="transition-colors duration-500 uppercase text-[16px] font-[500]"
                  style={{ color: "#ffffff" }}
                >
                  {linkObj.linkText}
                </Link>
              ))}
            </div>
          </div>
          {/* <Link href="#"> */}
          <button
            onClick={openModal}
            ref={buttonRef}
            className="cursor-pointer bg-[#831719] text-nowrap border px-8 rounded-4xl text-white transition-colors duration-500 text-[16px] h-[42px]"

          >
            School Tour
          </button>
          {/* </Link> */}
        </div>

        {/* Mobile Hamburger */}


        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="flex flex-col gap-1 w-10 p-2 md:w-16 md:gap-2"
            onMouseEnter={() => {
              // Top line animation (fast)
              gsap.fromTo(
                hamburgerRef.current[0],
                { scaleX: 1, transformOrigin: "right" },
                { scaleX: 0, duration: 0.25, transformOrigin: "right", yoyo: true, repeat: 1, ease: "power1.inOut" }
              );

              // Bottom line animation (slower)
              gsap.fromTo(
                hamburgerRef.current[1],
                { scaleX: 1, transformOrigin: "right" },
                { scaleX: 0, duration: 0.5, transformOrigin: "right", yoyo: true, repeat: 1, ease: "power1.inOut" }
              );
            }}
          >
            <span
              className="block w-full h-[2px] bg-white"
              ref={(el) => (hamburgerRef.current[0] = el)}
            ></span>
            <span
              className="block w-full h-[2px] bg-white"
              ref={(el) => (hamburgerRef.current[1] = el)}
            ></span>
          </button>
        </div>


        {/* {pathname === "/" && (
          <div className="absolute left-0 top-full w-full bg-[#F5C400] text-[#831719] text-center text-[12px] md:text-[20px] py-1 md:py-2 px-2">
            <span className="font-bold block md:inline">
              Launches Inaugural First Family Scholarship Upto 1 lac
            </span>
            <span className="hidden md:inline"> | </span>
            <span className="font-semibold block md:inline">
              Admissions Open | Limited Seats Only
            </span>
          </div>
        )} */}
      </nav>

      {/* Mobile Slide-in Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-full bg-[#831719] text-white shadow-lg transform translate-x-full flex flex-col gap-6 z-1010 lg:hidden p-10 overflow-y-auto"
      >

        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={180}
              height={50}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>

          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="flex items-center justify-center p-2 transition-transform duration-300 hover:rotate-90">
              <X size={36} /> {/* Now the icon will render at 50px */}
            </button>
          </div>

        </div>

        <div className="flex flex-col">

          {linksData.map((linkObj, i) => (
            <Link key={i} href={linkObj.linkUrl} className="text-lg font-semibold py-4 border-b-1 border-red-400 uppercase text-[18px]" onClick={toggleMenu}>
              {linkObj.linkText}
            </Link>
          ))}
          {/* <Link href="/apply"> */}
          <button
            onClick={() => {
              openModal();
              toggleMenu();
            }}
            className="cursor-pointer border px-6 py-4 my-5 w-full rounded-4xl text-xl bg-white text-red-700 font-semibold"
          >
            School Tour
          </button>
          {/* </Link> */}
        </div>
      </div>
      {/* Enquiry Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}