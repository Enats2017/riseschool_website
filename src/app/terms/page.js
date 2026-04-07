import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <main style={{
      overflowX: "hidden"
    }}>
      {/* Back to Home Button */}
      

      {/* Terms & Conditions Content */}
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div 
          className="py-20 text-center text-white"
          style={{ backgroundColor: "#831719" }}
        >
          <h1 className="text-5xl font-bold mb-4">Terms & Conditions</h1>
          <div className="flex items-center justify-center space-x-2 text-red-100">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Terms And Conditions</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-8 py-16">
          
          {/* Terms & Conditions Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold" style={{ color: "#831719" }}>
              Terms & Conditions
            </h2>
          </div>

          <div className="space-y-8">
            
            {/* Effective Date & Welcome */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderLeftColor: "#831719" }}>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Effective Date:</strong> 25 September 2025
              </p>
              <p className="text-gray-700 leading-relaxed text-sm mb-4">
                Welcome to <strong>Rising India School of Excellence (Yashvitaru Education Trust)</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                By accessing and using our website, services, and online payment facilities, you agree to comply with the following Terms and Conditions. Please read them carefully before proceeding.
              </p>
            </div>

            {/* 1. Admission Applications */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderLeftColor: "#831719" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#831719" }}>
                1. Admission Applications
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm space-y-2">
                <p>• Submission of the application form does not guarantee admission.</p>
                <p>• Admission decisions are made solely at the discretion of the school management, based on our admission policy and evaluation process.</p>
                <p>• The application fee is <strong>non-refundable</strong> unless otherwise explicitly stated in specific admission offers.</p>
              </div>
            </div>

            {/* 2. Payments */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderLeftColor: "#831719" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#831719" }}>
                2. Payments
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm space-y-2">
                <p>• All payments made through our website, QR code or payment links are processed via secure, encrypted payment gateways.</p>
                <p>• Parents/guardians are responsible for ensuring accuracy of details during payment.</p>
                <p>• The school will not be liable for delays or errors due to incorrect information entered or technical issues at the user's/bank's end.</p>
                <p>• Any refund if applicable will follow the school's official refund policy and may take up to 30 working days to process.</p>
              </div>
            </div>

            {/* 3. Use of School Services */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderLeftColor: "#831719" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#831719" }}>
                3. Use of School Services
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm space-y-2">
                <p>• Parents and students are expected to abide by the school's Code of Conduct, policies, and regulations as communicated from time to time.</p>
                <p>• Misuse of school property, technology or resources may lead to disciplinary action.</p>
              </div>
            </div>

            {/* 4. Intellectual Property */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderLeftColor: "#831719" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#831719" }}>
                4. Intellectual Property
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm space-y-2">
                <p>• All school content, including logos, curriculum material, brochures, and digital content on the website, is the property of <strong>Rising India School of Excellence</strong> and cannot be copied, reproduced, or distributed without prior written consent.</p>
              </div>
            </div>

            {/* 5. Data Protection */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderLeftColor: "#831719" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#831719" }}>
                5. Data Protection
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm space-y-2">
                <p>• Personal data collected during admission or while availing school services will be used only for academic and administrative purposes as outlined in our <strong>Privacy Policy</strong>.</p>
                <p>• We are committed to safeguarding this data in compliance with Indian laws.</p>
              </div>
            </div>

            {/* 6. Limitation of Liability */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderLeftColor: "#831719" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#831719" }}>
                6. Limitation of Liability
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm space-y-2">
                <p>• The school will make every effort to ensure accuracy of information shared on the website or during admissions. However, the school is not liable for inadvertent errors or technical glitches.</p>
                <p>• The school will not be responsible for any indirect or consequential loss arising from the use of its website, services, or facilities.</p>
              </div>
            </div>

            {/* 7. Changes to Terms */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderLeftColor: "#831719" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#831719" }}>
                7. Changes to Terms
              </h3>
              <div className="text-gray-700 leading-relaxed text-sm space-y-2">
                <p>• The school reserves the right to update or modify these Terms and Conditions at any time.</p>
                <p>• Updated terms will be published on this page and will apply immediately.</p>
                <p className="mt-4">For any queries regarding these Terms and Conditions, please contact: <strong>admissions@riseschool.in</strong></p>
              </div>
            </div>

          </div>

          {/* Footer Contact */}
          <div className="mt-16 text-center bg-white rounded-lg p-8 shadow-sm">
            <p className="text-gray-600">
              For any questions regarding these Terms and Conditions, please contact us at{" "}
              <a 
                href="mailto:admissions@riseschool.in" 
                className="font-medium hover:underline"
                style={{ color: "#831719" }}
              >
                admissions@riseschool.in
              </a>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
