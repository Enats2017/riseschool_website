"use client";
import Image from "next/image";
import Link from "next/link";
import { dinNext } from "@/app/fonts";

const posts = [
  {
    slug: "why-rise",
    title: "Why Rising: What Makes This the Right IB School for Your Child in Goa",
    excerpt:
      "An honest look at what sets Rising India School of Excellence apart — the IB curriculum, our 4D learning model, and why it might be the right fit for your child.",
    image: "/images/blog/why-rise-hero.jpg",
  },
  {
    slug: "pyp-programme",
    title: "The years that actually shape how a child thinks",
    excerpt:
      "Why the Primary Years Programme matters more than most parents realise — and how it shapes independent, curious thinkers from the very start.",
    image: "/images/blog/pyp-hero.png",
  },
];

export default function BlogPage() {
  return (
    <div className="overflow-x-hidden">
      <main data-bg-color="#fff">
        {/* Brand hero band */}
             <section
          style={{
            background:
              "radial-gradient(circle, rgb(189 180 180) 0%, #831719 100%)",
            position: "relative",
            overflow: "hidden",
            paddingTop: "0px",
            paddingBottom: "60px",
          }}
        >
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
            <img src="/images/pattern-2.svg" alt="" style={{ width: "100%" }} />
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
            <img src="/images/pattern-3.svg" alt="" style={{ width: "100%" }} />
          </div>

          {/* Content */}
          <div
            style={{
              width: "100%",
              maxWidth: "1520px",
              margin: "0 auto",
            }}
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch flex-wrap">
              
              {/* Left Image Section */}
              <div className="lg:w-7/12 w-full relative flex justify-center items-start lg:justify-end lg:pr-10">
                <img
                  src="/images/blog_banner_img.png"
                  alt="blog banner"
                  style={{ 
                    width: "100%", 
                    maxWidth: "1000px", 
                    height: "auto",
                    display: "block",
                  }}
                  className="mx-auto"
                />
                
                <h3
                  className="
                    absolute 
                    bottom-[10%] 
                    left-0
                    flex 
                    justify-start 
                    w-full 
                    text-white 
                    uppercase 
                    text-left 
                    transform 
                    lg:-translate-y-4
                    z-10
                  "
                >
                  <strong
                    className={`${dinNext.className} text-[62px] xs:text-[92px] sm:text-[132px] md:text-[112px]  xl:text-[160px] font-[700] pl-2  md:pl-6 lg:pl-8`}
                    style={{
                      lineHeight: 1,
                    }}
                  >
                    BLOGS
                  </strong>
                </h3>
              </div>

              {/* Right Text Section */}
              {/* Right Text Section */}
              {/* Right Text Section */}
              <div className="lg:w-5/12 w-full text-white lg:pl-20 xl:pl-24 px-4 z-20 text-left lg:text-left pr-0 md:pr-0 flex flex-col justify-start pt-[90px]">
                <h2
                  className={`${dinNext.className} font-[400] text-[24px] md:text-[28px] lg:text-[36px] leading-[1.3] uppercase tracking-[1px]`}
                >
                  IDEAS THAT SHAPE TOMORROW
                </h2>
                <h3
                  className={`${dinNext.className} font-[400] text-[18px] md:text-[20px] lg:text-[22px] mt-2 uppercase tracking-[1px] opacity-90`}
                >
                  INSIGHTS BEYOND THE CLASSROOM
                </h3>

                <div className="text-[17px] mt-6 space-y-4" style={{ color: "white", lineHeight: "30px", marginRight: "0px" }}>
                  <p>
                    Education is evolving, and so are the ideas that shape how children learn, think, and grow. Through the Rising India School of Excellence Blog, explore perspectives on future-ready learning, technology, innovation, creativity, leadership, parenting, and student experiences.
                  </p>
                  <p>
                    You’ll discover how learning comes alive through real-world experiences, collaboration, curiosity, and purposeful exploration — helping students build the skills and mindset they need for an ever-changing world.
                  </p>
                  <p>
                    Because education is not just about learning for today.<br />
                    It’s about preparing young minds to imagine, create, and shape tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Post cards — styled section instead of plain white */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            background:
              "linear-gradient(180deg, #e7bcb1 0%, #f4dbd7 45%, #ebd3d3 100%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-120px",
              right: "-160px",
              width: "480px",
              height: "480px",
              borderRadius: "9999px",
              background:
                "radial-gradient(circle, rgba(131,23,25,0.10) 0%, rgba(131,23,25,0) 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-100px",
              left: "-140px",
              width: "420px",
              height: "420px",
              borderRadius: "9999px",
              background:
                "radial-gradient(circle, rgba(131,23,25,0.08) 0%, rgba(131,23,25,0) 70%)",
              pointerEvents: "none",
            }}
          />

          <div className="relative mx-auto max-w-4xl px-4 py-14 sm:py-20">
            <div className="grid gap-8 sm:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-xl bg-white shadow-[0_2px_10px_rgba(131,23,25,0.08)] ring-1 ring-[#831719]/10 transition hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(131,23,25,0.18)] hover:ring-[#831719]/30"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-lg font-semibold leading-snug text-neutral-900">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#831719]">
                      Read more
                      <span className="transition-transform group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}