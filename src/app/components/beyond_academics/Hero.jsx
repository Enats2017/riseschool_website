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
                <div className="lg:w-7/12 w-full relative text-left lg:text-right transform translate-y-16 xl:translate-y-0">
                  <img
                    src="/images/Banner_Cutout.png"
                    alt="academicbanner"
                    style={{ width: "100%", maxWidth: "800px" }}
                    className="transform translate-x-2 lg:translate-x-16 xl:translate-x-16 mx-auto"
                  />
                  <div style={{ position: "relative" }}>
                    <h3
                      className="
                        absolute 
                        bottom-[10%] 
                        flex 
                        justify-start lg:justify-start 
                        w-full 
                        text-white 
                        uppercase 
                        text-left lg:text-left
                        transform 
                        lg:-translate-y-4
                      "
                    >
                      <strong
                        className={`${dinNext.className} text-[62px] xs:text-[92px] sm:text-[132px] md:text-[112px]  xl:text-[160px] font-[700] pl-2  md:pl-6 lg:pl-8`}
                        style={{
                          lineHeight: 1,
                        }}
                      >
                       BEYOND ACADEMICS
                      </strong>
                    </h3>
                  </div>
                </div>

                {/* Right Text Section */}
                <div className="lg:w-5/12 w-full text-white lg:pl-10 px-4 mt-20 lg:mt-10 z-10 text-left lg:text-left text-[24px] sm:text-[32px] pr-0 md:pr-10">
                 <p
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      display: "block",
                    }}
                    className={`${dinNext.className} font-[400] text-[24px] md:text-[28px] lg:text-[36px] leading-[1.3]`}
                  >
                    OUR STUDENTS FLOURISH IN A DYNAMIC ENVIRONMENT WHERE <strong>CREATIVITY, COLLABORATION & COMPASSION</strong> COME ALIVE
                  </p>

                  <p className="text-[17px]" style={{ color: "white", marginTop: "32px", marginRight: "20px", marginBottom: "16px" ,lineHeight:"30px"}}>
                  Here, education transcends classrooms. From performing arts and sports to innovation labs, global collaborations, and community impact, every experience broadens horizons. Students cultivate creativity, leadership, resilience, and empathy — gaining the confidence to explore passions and the vision to shape meaningful futures. Beyond academics, they discover who they are meant to be.
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
 