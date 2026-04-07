"use client"
import { dinNext } from "@/app/fonts";

export const Hero = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <main data-bg-color="#fff">
          <section
            style={{
              background:
                "radial-gradient(circle, rgb(189 180 180) 0%, #831719 70%)",
              zIndex: 1,
              overflow: "hidden",
              position: "relative",
              paddingTop: "120px",
              display: "flex",
              alignItems: "center",
              paddingBottom:"36px"
            }}
          >
            {/* Background Shapes */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                maxWidth: "370px",
                width: "100%",
                zIndex: -1,
                mixBlendMode: "difference",
                pointerEvents: "none",
              }}
            >
              <img
                src="/images/pattern-2.svg"
                alt="shape1"
                style={{ width: "100%" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                maxWidth: "370px",
                width: "100%",
                zIndex: -1,
                mixBlendMode: "difference",
                pointerEvents: "none",
              }}
            >
              <img
                src="/images/pattern-3.svg"
                alt="shape2"
                style={{ width: "100%" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                maxWidth: "915px",
                zIndex: -1,
              }}
            >
              <img
                src="/images/shape-blur.svg"
                alt="shape3"
                style={{ width: "100%" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                maxWidth: "915px",
                zIndex: -1,
                transform: "scale(-1)",
              }}
            >
              <img
                src="/images/shape-blur.svg"
                alt="shape4"
                style={{ width: "100%" }}
              />
            </div>

            {/* Content */}
            <div
            className="px-6 lg:px-0"
              style={{
                width: "100%",
                maxWidth: "1520px",
                margin: "0 auto",
              }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Left Section - Image with Title Overlay */}
                <div className="w-full lg:w-3/4 relative">
                  <img
                    src="/images/aboutus_banner.png"
                    alt="Students learning"
                    style={{ width: "100%", maxWidth: "800px" }}
                    className="mx-auto lg:mx-0 transform lg:translate-x-16 lg:-translate-y-12"
                  />
                  <h1
                    className={`${dinNext.className} text-white uppercase font-[700] text-[42px] xs:text-[64px] md:text-[96px] lg:text-[96px] transform translate-y-12 lg:translate-y-0 `}
                    style={{
                      position: "absolute",
                      bottom: "5%",
                      lineHeight: 1,
                      letterSpacing: "2px",
                      textShadow: "2px 2px 8px rgba(0,0,0,0.3)"
                    }}
                  >
                    THE SCHOOL OF<br />TOMORROW
                  </h1>
                </div>

                {/* Right Section - Text Points */}
                <div className="lg:w-1/2 w-full text-white space-y-6 mt-2 sm:mt-0">
                  <div className={`${dinNext.className} uppercase space-y-4 text-[24px] md:text-[36px]`}>
                    <p style={{lineHeight: 1.2, fontWeight: 400 }}>
                      WE ARE NOT A<br />
                      <strong style={{ fontWeight: 700 }}>TRADITIONAL SCHOOL.</strong>
                    </p>
                    <p style={{lineHeight: 1.2, fontWeight: 400 }}>
                      WE ARE THE<br />
                      <strong style={{ fontWeight: 700 }}>SCHOOL OF TOMORROW.</strong>
                    </p>
                    <p style={{lineHeight: 1.2, fontWeight: 700 }}>
                      FUTURE READY.
                    </p>
                    <p style={{lineHeight: 1.2, fontWeight: 700 }}>
                      HUMAN CENTERED.
                    </p>
                    <p style={{lineHeight: 1.2, fontWeight: 700 }}>
                      GLOBALLY READY.
                    </p>

                  </div>
                  <div className="relative mt-12"> 
                  <div className={` absolute left-[-12px] top-[-42px]  text-[28px] md:text-[32px] lg:text-[48px] text-[#fafafa7d] transform rotate-180 font-[800] z-100`}>"</div>
                    <div className={`${dinNext.className} text-[28px] md:text-[32px] lg:text-[48px] italic leading-[1]`}
                    style={{
                      border:"1px solid rgba(255, 255, 255, 0.24)",
                      borderRadius:"10px",
                      background:"rgba(255, 255, 255, 0.04)",
                      boxShadow:"0px 0px 4px 0px rgba(0, 42, 14, 0.16), 0px 2px 4px 0px rgba(0, 63, 21, 0.16)",
                      display:"inline-flex",
                      padding:"1rem 1.5rem 1rem 1.5rem",
                      backdropFilter:"blur(6px)",
                    }}
                    >
                      Innovatio Alit, Impactus Regit."
                    </div>
                    </div>

                </div>
              </div>
            </div>

          </section>
        </main>
      </div>
    </div>
  );
};