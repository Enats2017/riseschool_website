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
              // minHeight:"100vh"
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
                    src="/images/primary-banner-Photoroom.png"
                    alt="academicbanner"
                    style={{ width: "100%", maxWidth: "750px" }}
                    className="transform translate-x-2 lg:translate-x-8 xl:translate-x-16 -translate-y-12 sm:-translate-y-0 mx-auto"
                  />
                  <div style={{ position: "relative" }}>
                    <h3
                      className=" 
                        absolute 
                        bottom-[10%] 
                        flex 
                        w-full 
                        text-white 
                        uppercase 
                        text-left lg:text-left
                        pl-2
                        transform 
                        ml-2
                        lg:ml-8
                        
                        translate-y-12
                        lg:-translate-y-4
                      "
                    >
                      <strong
                        className={`${dinNext.className} text-[52px] sm:text-[72px]  xl:text-[80px] font-[700] mb-8`}
                        style={{
                          lineHeight: 1,
                        }}
                      >
                       Primary Years Programme
                      </strong>
                    </h3>
                  </div>
                </div>

                {/* Right Text Section */}
                <div className="lg:w-5/12 w-full text-white lg:pl-10 px-4 z-10 text-left lg:text-left text-[24px] sm:text-[32px] mt-24 mb-4">
                  <p
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      display: "block",
                    }}
                    className={`${dinNext.className} font-[700] text-[24px] md:text-[28px] lg:text-[36px] leadinh-[1]`}
                  >
                    WHERE CURIOSITY BECOMES CONFIDENCE
                  </p>
                  <p className="text-[17px] mt-8 mr-8">
                    Primary School, is where curiosity blossoms into confidence. Through the <strong>IB Primary Years Programme (PYP)</strong>, children explore, question, and connect ideas through inquiry-based learning that builds strong academic foundations and a lifelong love for learning.
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
 