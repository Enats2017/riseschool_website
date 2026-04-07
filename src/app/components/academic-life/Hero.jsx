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
                    src="/images/academics_banner.png"
                    alt="academicbanner"
                    style={{ width: "100%", maxWidth: "750px" }}
                    className="transform translate-x-2 lg:translate-x-16 xl:translate-x-24 mx-auto"
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
                        text-center lg:text-left
                        transform 
                        ml-2
                        lg:ml-8
                        lg:-translate-y-16
                      "
                    >
                      <strong
                        className={`${dinNext.className} text-[62px] xs:text-[92px] sm:text-[122px] md:text-[142px]  xl:text-[160px] font-[700]`}
                        style={{
                          lineHeight: 1,
                        }}
                      >
                       ACADEMIC LIFE
                      </strong>
                    </h3>
                  </div>
                </div>

                {/* Right Text Section */}
                <div className="lg:w-5/12 w-full text-white lg:pl-10 px-4 z-10 text-left lg:text-left text-[24px] sm:text-[32px] mt-24 lg:mt-0">
                  <p
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      display: "block",
                    }}
                    className={`${dinNext.className} font-[400] text-[24px] md:text-[28px] lg:text-[36px]`}
                  >
                    OUR STUDENTS THRIVE IN AN ACADEMIC ENRONMENT DEFINED BY <strong> INNOVATION, PERSONALIZATION & TECHNOLOGY-ENABLED</strong> LEARNING.
                  </p>
                  <p className="text-[17px]" style={{ color: "white", marginTop: "32px", marginRight: "30px", marginBottom: "16px" }}>
                    With unique best practices, our children not only demonstrate academic excellence but also future-ready skills of creativity, critical thinking, communication & collaboration by integrating modern curricula of financial literacy, entrepreneurship, AI & design into the regular school hours. Here there is a strong focus on building strong character, grounded values, and lifelong adaptability - preparing every learner to lead with confidence and purpose.
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
 