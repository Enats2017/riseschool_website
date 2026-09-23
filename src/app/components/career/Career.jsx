"use client";
import { useState } from "react";
import { dinNext } from "@/app/fonts";

// Existing server file that already handles career applications.
// Override with NEXT_PUBLIC_CAREER_API in .env.development if you test locally.
const CAREER_API =
  process.env.NEXT_PUBLIC_CAREER_API || "https://riseschool.in/submit_registration.php";

const RED = "#831719";

const ROLES = [
  "Teacher",
  "Coordinator",
  "Administration",
  "Admissions",
  "HR",
  "Marketing",
  "Finance",
  "IT",
];

const PERKS = [
  {
    title: "A Future-Ready Learning Environment",
    text: "Work in an environment that inspires innovation; where technology, creativity, and pedagogy come together to shape tomorrow’s learners.",
  },
  {
    title: "Continuous Professional Growth",
    text: "Gain access to global training, IB & Apple certifications, mentorship programs, and professional development pathways designed to help you grow as an educator and leader.",
  },
  {
    title: "Competitive Compensation & Benefits",
    text: "We value our people. Expect industry-leading remuneration, recognition, and well-being benefits.",
  },
  {
    title: "Global Vision, Indian Values",
    text: "Be part of an institution that blends international best practices with the ethos of empathy, integrity, and purpose.",
  },
  {
    title: "A Dynamic, Collaborative Community",
    text: "Join a team of passionate, forward-thinking educators who share a common goal that is to make learning meaningful and impactful.",
  },
  {
    title: "Visionary Leadership",
    text: "Work under experienced academic leaders with international exposure, who believe in empowering teachers as true partners in change.",
  },
];

const inputClass =
  "w-full h-[55px] px-4 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent text-gray-900 placeholder-gray-400 text-[15px]";

const Red = ({ children }) => (
  <strong style={{ color: RED }}>{children}</strong>
);

export const Career = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: ROLES[0],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", text: "" });

    try {
      const res = await fetch(CAREER_API, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData),
      });

      const raw = await res.text();
      let data = null;
      try {
        data = JSON.parse(raw);
      } catch {
        /* server may return HTML, that's fine */
      }

      if (!res.ok || (data && data.success === false)) {
        throw new Error((data && data.message) || "Failed to submit. Please try again.");
      }

      setStatus({
        type: "success",
        text: "Thank you! Your application has been received. Our team will contact you soon.",
      });
      setFormData({ name: "", email: "", phone: "", subject: ROLES[0], message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        text: err.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section
        style={{
          background: "radial-gradient(circle, rgb(189 180 180) 0%, #831719 70%)",
          zIndex: 1,
          overflow: "hidden",
          position: "relative",
          paddingTop: "120px",
        }}
      >
        {/* Background shapes */}
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
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            maxWidth: "915px",
            zIndex: -1,
          }}
        >
          <img src="/images/shape-blur.svg" alt="" style={{ width: "100%" }} />
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
          <img src="/images/shape-blur.svg" alt="" style={{ width: "100%" }} />
        </div>

        {/* Content */}
        <div style={{ width: "100%", maxWidth: "1520px", margin: "0 auto" }}>
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            {/* Left: banner + CAREERS */}
            <div className="lg:w-7/12 w-full relative">
              <img
                src="/images/careers-banner.png"
                alt="Careers at Rising India School of Excellence"
                className="w-full max-w-[750px] h-auto object-contain mx-auto lg:mx-0"
              />
              <div className="absolute bottom-[2%] left-0 w-full flex justify-center lg:justify-end lg:pr-8 text-white uppercase pointer-events-none">
                <span
                  className={`${dinNext.className} font-[700] leading-none text-[64px] sm:text-[110px] lg:text-[150px]`}
                >
                  Careers
                </span>
              </div>
            </div>

            {/* Right: heading */}
            <div className="lg:w-5/12 w-full px-6 lg:pr-16 pt-8 pb-12 lg:pb-0 lg:pt-36 text-center lg:text-right text-white uppercase">
              <p
                className={`${dinNext.className} font-[500] leading-tight text-[24px] sm:text-[36px] lg:text-[44px]`}
              >
                Where Educators RISE to Inspire
              </p>
              <p
                className={`${dinNext.className} font-[700] leading-none mt-3 text-[56px] sm:text-[84px] lg:text-[100px]`}
              >
                the FUTURE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= JOIN THE SCHOOL OF TOMORROW ================= */}
      <section className="bg-white px-6 pt-16 md:pt-24">
        <div className="max-w-[900px] mx-auto text-center">
          <h2
            className={`${dinNext.className} uppercase font-[700] leading-[1.05] text-[48px] sm:text-[72px] lg:text-[100px] mb-8`}
            style={{ color: "#121212" }}
          >
            Join the School <span style={{ color: RED }}>of Tomorrow</span>
          </h2>

          <div className="text-[16px] md:text-[18px] leading-8 text-[#121212] space-y-5">
            <p>
              <Red>
                Be part of a movement that’s redefining education for the age of innovation,
                empathy, and global citizenship.
              </Red>
            </p>
            <p>
              At <Red>Rising India School of Excellence</Red>, we believe that great schools are
              not built by infrastructure or curriculum alone — they’re built by{" "}
              <Red>visionary educators</Red> who bring learning to life every single day.
            </p>
            <p>
              We’re looking for passionate teachers, innovators, and mentors who see education as
              a calling, not just a career. Those who can spark curiosity, nurture creativity,
              and shape young minds to thrive in a world defined by change, technology, and
              opportunity.
            </p>
            <p>
              When you join here, you join a <Red>purpose-driven community</Red> — one that
              values collaboration, growth, and innovation. Our teachers are equipped with{" "}
              <Red>global teaching methodologies, Apple-enabled classrooms,</Red> and{" "}
              <Red>continuous professional learning programs</Red>, empowering them to be
              lifelong learners and changemakers.
            </p>
            <p>
              <Red>Begin your journey and RISE above.</Red>
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHAT AWAITS YOU + APPLY ================= */}
      <section id="apply" className="bg-white px-6 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* ---------- Left: accordion ---------- */}
          <div>
            <h2
              className={`${dinNext.className} uppercase font-[400] text-[34px] md:text-[46px] leading-tight mb-8`}
              style={{ color: "#121212" }}
            >
              What awaits you <span style={{ color: RED }}>at Rise</span>
            </h2>

            <div className="border-t border-gray-800">
              {PERKS.map((perk, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={perk.title} className="border-b border-gray-800">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 py-6 text-left cursor-pointer"
                    >
                      <span
                        className={`${dinNext.className} font-[400] text-[24px] md:text-[30px] leading-tight`}
                        style={{ color: RED }}
                      >
                        {i + 1}. {perk.title}
                      </span>
                      <svg
                        className="w-6 h-6 shrink-0 text-black"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <line x1="4" y1="12" x2="20" y2="12" />
                        {!isOpen && <line x1="12" y1="4" x2="12" y2="20" />}
                      </svg>
                    </button>

                    <div
                      className="grid transition-all duration-300 ease-in-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-8 pr-10 max-w-[560px] text-[16px] md:text-[18px] leading-7 text-[#121212]">
                          {perk.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ---------- Right: form ---------- */}
          <div>
            <h2
              className={`${dinNext.className} uppercase font-[400] text-[34px] md:text-[46px] leading-tight mb-8`}
              style={{ color: "#121212" }}
            >
              Ready to begin <span style={{ color: RED }}>your journey!</span>
            </h2>

            <div className="border border-gray-200 shadow-sm bg-white">
              <div className="py-5 text-center text-white" style={{ backgroundColor: RED }}>
                <h3 className={`${dinNext.className} uppercase font-[400] text-[30px] md:text-[34px] leading-none`}>
                  Apply for Job
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="p-6 md:p-10">
                <h4
                  className={`${dinNext.className} uppercase font-[400] text-[26px] mb-6`}
                  style={{ color: RED }}
                >
                  Contact / Apply
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6">
                  <div>
                    <label htmlFor="career_name" className="block text-[16px] text-gray-800 mb-2">
                      Full Name <span>*</span>
                    </label>
                    <input
                      id="career_name"
                      type="text"
                      name="name"
                      placeholder="Enter Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="career_email" className="block text-[16px] text-gray-800 mb-2">
                      Email Address <span>*</span>
                    </label>
                    <input
                      id="career_email"
                      type="email"
                      name="email"
                      placeholder="Enter Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="career_phone" className="block text-[16px] text-gray-800 mb-2">
                      Phone Number <span>*</span>
                    </label>
                    <input
                      id="career_phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="career_function" className="block text-[16px] text-gray-800 mb-2">
                      Function
                    </label>
                    <div className="relative">
                      <select
                        id="career_function"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none pr-10`}
                      >
                        {ROLES.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none text-gray-700"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="career_message" className="block text-[16px] text-gray-800 mb-2">
                      Comment
                    </label>
                    <textarea
                      id="career_message"
                      name="message"
                      rows={2}
                      placeholder="Write your message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent text-gray-900 placeholder-gray-400 text-[15px] resize-y"
                    />
                  </div>
                </div>

                {status.text && (
                  <p
                    role="alert"
                    className={`mt-5 text-sm font-medium ${
                      status.type === "success" ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {status.text}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 w-full h-[56px] text-white font-bold uppercase rounded-md transition-all duration-300 hover:shadow-lg hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  style={{ backgroundColor: RED }}
                >
                  {isSubmitting ? "Submitting..." : "Submit Now"}
                </button>
              </form>
            </div>

            <div className="text-center mt-10">
              <p className={`${dinNext.className} uppercase text-[26px] font-[400] mb-6`}>Or</p>
              <p className={`${dinNext.className} text-[22px] md:text-[28px] font-[400] break-words`}>
                Mail your résumé to{" "}
                <a href="mailto:jyotsna.hiwalkar@riseschool.in" className="hover:underline" style={{ color: "#121212" }}>
                  jyotsna.hiwalkar@riseschool.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};