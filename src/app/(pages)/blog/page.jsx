"use client";
import Image from "next/image";
import Link from "next/link";
import { dinNext } from "@/app/fonts";

const posts = [
  {
    slug: "why-rise",
    title: "Why RISE: What Makes This the Right IB School for Your Child in Goa",
    excerpt:
      "An honest look at what sets Rising India School of Excellence apart \u2014 the IB curriculum, our 4D learning model, and why it might be the right fit for your child.",
    image: "/images/blog/why-rise-hero.jpg",
  },
  {
    slug: "pyp-programme",
    title: "The years that actually shape how a child thinks",
    excerpt:
      "Why the Primary Years Programme matters more than most parents realise \u2014 and how it shapes independent, curious thinkers from the very start.",
    image: "/images/blog/pyp-hero.jpg",
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
              "radial-gradient(circle, rgb(189 180 180) 0%, #831719 70%)",
            position: "relative",
            overflow: "hidden",
            paddingTop: "120px",
            paddingBottom: "64px",
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

          <div className="mx-auto max-w-4xl px-4 text-center text-white">
            <p
              className={`${dinNext.className} text-sm sm:text-base font-[700] uppercase tracking-[1px]`}
            >
              RISE Blog
            </p>
            <h1
              className={`${dinNext.className} mt-2 text-[40px] sm:text-[56px] font-[700]`}
              style={{ lineHeight: 1.1 }}
            >
              Blogs
            </h1>
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
          {/* soft decorative blur, echoes the hero's shape-blur asset */}
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
                    <span
                      className={`${dinNext.className} absolute left-4 top-4 rounded-full bg-[#831719] px-3 py-1 text-xs font-[700] uppercase tracking-wide text-white`}
                    >
                      RISE Blog
                    </span>
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