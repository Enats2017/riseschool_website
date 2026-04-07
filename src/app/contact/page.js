import Link from "next/link";

import { ContactUs } from "../components/ContactUs";
import StickyAdmissionButton from "../components/StickyAdmissionButton";
import ModalPortal from "../components/ModalPortal";

export default function ContactPage() {
  return (
    <main style={{
      overflowX: "hidden"
    }}>
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 z-50">
        <Link 
          href="/"
          className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 group"
        >
          <svg 
            className="w-5 h-5 text-gray-600 group-hover:text-red-800 transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-gray-700 font-medium group-hover:text-red-800 transition-colors">
            Back to Home
          </span>
        </Link>
      </div>

      <StickyAdmissionButton />
      <ModalPortal />
      <ContactUs />
    </main>
  );
}
