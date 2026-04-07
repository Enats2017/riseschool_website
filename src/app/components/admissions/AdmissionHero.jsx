"use client";
import { useState } from "react";
import { dinNext , Montserrat} from "@/app/fonts";
import Link from "next/link";
import { Plus,Minus } from "lucide-react";

export default function AdmissionProcess() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const handleAccordionToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "Early Years (Ages 3-6)",
      content: (
        <>
          <p>
            Children will undergo a Creative Readiness Assessment through Observation-based activities in play, curiosity, interaction, cognitive & language awareness (30 mins).
          </p>
          <p className=" mt-2">
            Parent Interaction with the school management team to introduce the Discovery Mind curriculum & alignment with school philosophy & values.
          </p>
        </>
      ),
    },
    {
      title: "Primary (Grades 1-5)",
      content: (
        <>
          <p>
            Children will undergo a Holistic Potential Assessment covering foundational literacy & numeracy, analytical & problem-solving, creativity, collaboration, and communication (45 mins).
          </p>
          <p className=" mt-2">
            Parent Interaction with the school management team to introduce the IB-PYP curriculum & alignment with school philosophy & values.
          </p>
        </>
      ),
    },
    {
      title: "Secondary (Grades 6-10)",
      content: (
        <>
          <p>
            Children will undergo Future-ready Evaluation covering core academic assessment, critical thinking, innovation project/portfolio review (1 hour).
          </p>
          <p className=" mt-2">
            Parent Interaction with the school management team to introduce the IB-MYP & CBSE curriculum and alignment with school philosophy & values.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2">
          {/* Title */}
          <h2 className={`${dinNext.className} text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-[700] text-black uppercase leading-[1]`}>
            ADMISSION <span className="text-[#831719]">PROCESS</span>
          </h2>
          <p className="text-[#929298] lg:text-black text-[16px] md:text-[20px] mt-4 ">
            We believe admissions are not just about enrolling a child, but about welcoming families who share the same vision of education. Our process is simple and transparent through which we look forward to getting to know you and your child through.
          </p>

          {/* Step 1 */}
          <div className="border-t-[14px] border-gray-400 mt-10 pt-6">
            <p className="uppercase text-[16px] text-[#414145] font-[500] mb-2">Step 1</p>
            <h3 className={`${dinNext.className} text-[36px] md:text-[40px] lg:text-[50px] xl:text-[56px] font-[400] text-[#831719] leading-[1] tracking-tight`}>Connect with us</h3>
            <p className="text-[#5d5d63] text-[17px]">
              Relationships are key to Rising India School of Excellence, and ours begins when you reach out to us. Please complete our inquiry form and create an account with us to initiate our journey.
            </p>

            <Link
              href="/registration-form"
            >
            <button
              className=" bg-[#831719] text-white text-[20px] font-[600] mt-4 md:mt-8 px-12 py-2 rounded-full hover:bg-[#6b1215] transition"
              >
              Enquire Now
              </button>
            </Link>
          </div>

          {/* Step 2 */}
          <div className="border-t-[14px] border-gray-400 mt-4 pt-6">
            <p className="uppercase text-[16px] text-[#414145] font-[500] mb-2">Step 2</p>
            <h3 className={`${dinNext.className} text-[36px] md:text-[40px] lg:text-[50px] xl:text-[56px] font-[400] text-[#831719] leading-[1] tracking-tight`}>
              Complete Application & Submit Forms
            </h3>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Start your online application by paying a fee of INR 2500. Your login ID shall be generated and sent to you to fill necessary details and upload mandatory documents.
            </p>
          </div>

          {/* Step 3 */}
          <div className="border-t-[14px] border-gray-400 mt-10 pt-6">
            <p className="uppercase text-[16px] text-[#414145] font-[500] mb-2">Step 3</p>
            <h3 className={`${dinNext.className} text-[36px] md:text-[40px] lg:text-[50px] xl:text-[56px] font-[400] text-[#831719] leading-[1] tracking-tight`}>
              Visit the School for Selection Process
            </h3>

            <div className="mt-4 ">
              {accordionData.map((item, index) => (
                <div key={index} className="border border-gray-300 mb-2 rounded-md overflow-hidden">
                  <button
                    onClick={() => handleAccordionToggle(index)}
                    className={`w-full text-left px-4 py-3 flex justify-between items-center font-semibold ${
                      activeAccordion === index ? "bg-[#831719] text-white" : "bg-white text-black"
                    }`}
                  >
                    {item.title}
                    <span>{activeAccordion === index ? <Minus /> :<Plus />}</span>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden  ${
                      activeAccordion === index ? "max-h-[400px]" : "max-h-0"
                    }`}
                  >
                    <div className="p-2 sm:p-4 text-[#5d5d63]">

                    {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 4 */}
          <div className="border-t-[14px] border-gray-400 mt-10 pt-6">
            <p className="uppercase text-[16px] text-[#414145] font-[500] mb-2">Step 4</p>
            <h3 className={`${dinNext.className} text-[36px] md:text-[40px] lg:text-[50px] xl:text-[56px] font-[400] text-[#831719] leading-[1] tracking-tight`}>
              Track your Application Progress
            </h3>
            <p className="text-[#5d5d63] text-[17px] mt-2 mb-4 md:mb-4">
              You can log into your account and track the progress of your application.
            </p>
            <ol className="list-decimal ml-6 text-[#1b1b1b] text-[16px] mt-3 space-y-2 p-4">
              <li>
                Admission Committee Review based on child observation/evaluation and parent alignment shall be communicated within 48 hours.
              </li>
              <li>
                Parents will need to confirm the admission by completing admission formalities and making the initial payment as per the below fee payment guidelines:
                <ul className="list-disc ml-4 mt-2 text-sm space-y-1 px-2">
                  <li>Admission Confirmation Fee: One-time fees + 10% of tuition fees (Nov 2025 onward)</li>
                  <li>Installment 1: 40% of tuition fees (March 2026)</li>
                  <li>Installment 2 & 3: 25% (Aug 2026) + 25% (Dec 2026)</li>
                </ul>
              </li>
            </ol>
          </div>

          {/* Bottom Banner */}
          
        </div>

        {/* RIGHT SIDE - STICKY FORM */}
        <div className="lg:col-span-1">
            <h3 className={`${dinNext.className} text-[28px] bg-[#831719] text-white text-center uppercase  py-2`}>
              Apply Now 
            </h3>
          <div className="sticky top-24 bg-white shadow-lg border border-gray-200 p-6">
            <iframe 
              src="https://riseinternational.simplyadmission.com/common/customizedRegistrationForm/MQ==" 
              id="simplyIframe"  
              width="100%" 
              height="500" 
              frameBorder="0"
              className="w-full"
            ></iframe>
          </div>
        </div>
        
      </div>
    </section>
  );
}
