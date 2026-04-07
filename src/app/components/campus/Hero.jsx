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
              style={{
                width: "100%",
                maxWidth: "1520px",
                margin: "0 auto",
                // padding: "0 42px",
                // background:"red"
              }}
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start flex-wrap">
                {/* Left Image Section */}
                <div className="lg:w-7/12 w-full relative text-center lg:text-right transform translate-y-16 xl:translate-y-0">
                  <img
                    src="/images/banner.png"
                    alt="Campus banner"
                    style={{ width: "100%", maxWidth: "720px" }}
                    className="transform translate-x-2 lg:translate-x-16 xl:translate-x-16 mx-auto"
                  />
                  <div style={{ position: "relative" }}>
                    <div
                      className="
                        absolute 
                        bottom-[10%]
                        left-[18px]
                        flex
                        text-white 
                        uppercase 
                        transform 
                        -translate-y-24
                        lg:-translate-y-42
                      "
                    >

                      <span
                        className={`${dinNext.className} text-[62px] xs:text-[92px] sm:text-[96px] xl:text-[96px] font-[700]`}
                        // className={`${dinNext.className} text-[24px] xs:text-[36px] xl:text-[56px] font-[400]`}
                        style={{
                          textAlign: "right",
                          paddingRight: "16px",
                          lineHeight: 1,
                          letterSpacing: "1px",
                        }}
                      >
                        Campus
                      </span>
                      <span
                        className={`${dinNext.className} text-[24px] xs:text-[32px] sm:text-[60px] xl:text-[60px] font-[400] transform translate-y-16 xs:translate-y-20 sm:translate-y-24  -translate-x-18 sm:-translate-x-38 xl:-translate-x-28`}
                        // className={`${dinNext.className} text-[62px] xs:text-[92px] sm:text-[132px] xl:text-[160px] font-[700]`}
                        style={{
                          lineHeight: 1,
                        }}
                      >
                        of Tomorrow
                      </span>
                    </div>
                  </div>
                </div>

               <div className="lg:w-5/12 w-full text-white lg:pl-10 px-2 z-10 text-left lg:text-left text-[24px] sm:text-[32px] mt-12  lg:pr-10 ">
                  <span
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      display: "block",
                    }}

                    className={`${dinNext.className} font-[400] text-[24px] md:text-[28px] lg:text-[36px] leading-[1.2]`}
                  >
                    Not just <strong className="font-bold">Infrastructure</strong> but a nurturing
                    ground for <strong className="font-bold">global citizens</strong>
                  </span>
                  <p className="text-[17px] lg:pr-[3rem] px-2 lg:px-0" style={{ lineHeight:"30px",color: "white", marginTop: "32px", marginBottom: "16px" }}>
                    Scientifically designed by World’s best school architects, at Rising India School of Excellence, you’ll find more than classrooms and buildings, you’ll experience spaces designed to spark imagination, collaboration, and innovation. You’ll find children exploring in discovery zones, expressing themselves in creative studios, experimenting in innovation labs, and shaping the future in tech-driven spaces. Every corner is a learning ecosystem that nurtures curiosity, confidence, and character. This is not just a school campus - it is a vibrant, future-ready environment where young minds grow into global citizens of tomorrow.
                  </p>
                </div>
              </div>
            </div>


          </section>
        </main>
      </div>
    </div>
  );
};
 