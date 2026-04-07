import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main style={{
      overflowX: "hidden"
    }}>
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 z-50">
        {/* <Link 
          href="/"
          className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 group"
        > */}
          {/* <svg 
            className="w-5 h-5 text-gray-600 group-hover:text-red-800 transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg> */}
          
        {/* </Link> */}
      </div>

      {/* Privacy Policy Content */}
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div 
          className="py-20 text-center text-white"
          style={{ backgroundColor: "#831719" }}
        >
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <div className="flex items-center justify-center space-x-2 text-red-100">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
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
            
            {/* Effective Date */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderLeftColor: "#831719" }}>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Effective Date:</strong> 27 September 2025
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                At <strong>Rising India School of Excellence</strong>, we are committed to protecting the privacy of our 
                students, parents, and staff. This Privacy Policy explains how we collect, use, and secure 
                personal information in the course of providing high-quality education and related support 
                services.
              </p>
            </div>

            {/* 1. Data Collection */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderLeftColor: "#831719" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#831719" }}>
                1. Data Collection
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                We collect personal information such as student name, date of birth, grade, and previous 
                school details, along with parent/guardian names, contact details, and address. For fee 
                payments, we may collect limited financial information. Additionally, data related to 
                attendance, academic progress, health records (where required), and participation in school 
                activities may also be maintained.
              </p>
            </div>

            {/* 2. Purpose */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderLeftColor: "#831719" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#831719" }}>
                2. Purpose
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                The information collected is used solely for school operations. This includes processing 
                admissions, maintaining student records, monitoring academic progress, organizing school 
                events and extracurricular programs, ensuring student safety, managing transportation 
                services, and communicating important updates to parents and guardians.
              </p>
            </div>

            {/* 3. Security */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderLeftColor: "#831719" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#831719" }}>
                3. Security
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                We take data protection seriously. Physical records are stored securely and access is 
                restricted to authorized school staff only. We follow industry standard security practices in 
                accordance with the <strong>Information Technology Act, 2000</strong> to prevent unauthorized 
                misuse, or disclosure of data.
              </p>
            </div>

            {/* 4. Third-Party Access */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderLeftColor: "#831719" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#831719" }}>
                4. Third-Party Access
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                In certain cases, we may share information with trusted partners who support school 
                operations, such as examination providers, event organizers, technology service providers, 
                or educational collaborators. All such partners are required to follow strict confidentiality and 
                data protection standards.
              </p>
            </div>

            {/* 5. Payments & Transactions */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderLeftColor: "#831719" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#831719" }}>
                5. Payments & Transactions
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                For online payments, we use secure, encrypted payment gateways approved by the Reserve Bank of India. 
                School departments, we use secure and authorized payment gateways. We do not store 
                credit/debit card details on our servers. All transactions are encrypted and processed directly by the bank or 
                authorized payment provider in compliance with applicable laws and PCI DSS standards. 
                Parents/guardians will receive confirmations and receipts for all successful transactions.
              </p>
            </div>

            {/* 6. Cookies */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderLeftColor: "#831719" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#831719" }}>
                6. Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Our school website uses cookies to improve browsing performance and provide a better user 
                experience. These cookies do not collect personal information without consent. Parents and 
                visitors can control or disable cookies through their browser settings.
              </p>
            </div>

            {/* 7. Rights */}
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderLeftColor: "#831719" }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#831719" }}>
                7. Rights
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Parents and guardians have the right to request access to their child's records, update 
                personal details, or request deletion of data where legally permissible. For any queries or 
                data-related requests, please contact us at <strong>admissions@riseschool.in</strong>
              </p>
            </div>

          </div>

          {/* Footer Contact */}
          <div className="mt-16 text-center bg-white rounded-lg p-8 shadow-sm">
            <p className="text-gray-600">
              For any questions regarding this Privacy Policy, please contact us at{" "}
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
