"use client";

import { X } from "lucide-react";

export default function EnquiryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl mx-4 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="bg-[#831719] text-white p-6 rounded-t-lg">
          <h2 className="text-2xl font-bold"> Schedule a Visit</h2>
          <p className="text-sm mt-1 opacity-90">Fill in your details and we'll get back to you</p>
        </div>

        {/* Iframe */}
        <div className="p-6">
          <iframe 
            src="https://riseinternational.simplyadmission.com/common/customizedRegistrationForm/Mg==" 
            id="simplyIframe"  
            width="100%" 
            height="500" 
            frameBorder="0"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
