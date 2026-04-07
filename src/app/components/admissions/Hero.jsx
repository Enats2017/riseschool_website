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
              <div className="flex flex-col lg:flex-row items-center lg:items-center flex-wrap">
                {/* Left Image Section */}
                <div className="lg:w-7/12 w-full relative text-center lg:text-right transform translate-y-16 xl:translate-y-0">
                  <img
                    src="/images/admission_banner.png"
                    alt="academicbanner"
                    style={{ width: "100%", maxWidth: "750px" }}
                    className="transform translate-x-2 lg:translate-x-16 xl:translate-x-24 mx-auto"
                  />
                  <div className="relative">
                    <h3
                      className="
                        absolute 
                        bottom-[10%] 
                        flex 
                        w-full
                        justify-center
                        text-white 
                        uppercase 
                        text-center
                        transform 

                        lg:translate-x-36
                        
                        -translate-y-12
                        
                      "
                    >
                      <strong
                        className={`${dinNext.className}  text-[62px] xs:text-[92px] sm:text-[122px] md:text-[142px]  xl:text-[160px] font-[700]`}
                        style={{
                          lineHeight: 1,
                        }}
                      >
                       Admission
                      </strong>
                    </h3>
                  </div>
                </div>

                {/* Right Text Section */}
                <div className="lg:w-5/12 w-full text-white lg:pl-10 px-4 z-10 text-right pr-12 lg:pr-[64px] transform translate-y-2 lg:-translate-y-12 leading-[1.2] mt-6 lg:mt-0 mb-2">
                 <p className={`${dinNext.className} text-[28px] xs:text-[32px] sm:text-[40px]`}>YOU WANT THE BEST FOR YOUR CHILD.</p>
                 <p className={`${dinNext.className} text-[52px] xss:text-[64px] xs:text-[76px] sm:text-[90px] font-[700]`}>SO DO WE!</p>
                </div>
              </div>
            </div>


          </section>
        </main>
      </div>
    </div>
  );
};
 