import { dinNext } from "@/app/fonts";

export const AppleLearningSection = () => {
  return (
    <section className="container mx-auto max-w-[1520px] pb-24 px-4 mt-8">
      {/* Heading */}
      <div className="text-center mb-4">
                          <h2 className={`text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-[700] uppercase ${dinNext.className} leading-[1]`}>
                              <span className="text-[#831719]">Apple-enabled</span> learning
                          </h2>
                         
                          <p className={`text-[#1b1b1b] text-[17px] max-w-8xl mx-auto transform -translate-y-0`}>
                             With Apple-enabled learning, classrooms are transformed into innovation hubs empowering students not just to use technology, but to create with it.
                          </p>
                      </div>

      {/* Grid */}
      <div
        className="grid gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-6"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(390px, 1fr))",
          gridAutoRows: "350px",
        }}
      >
        {/* Grid items */}
        <div className="relative overflow-hidden rounded-md">
          <img
            src="/images/technology1.png"
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>

        <div className="relative overflow-hidden rounded-md">
          <img
            src="/images/Technology4.png"
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>

        {/* Tall item */}
        <div
          className="relative overflow-hidden rounded-md"
          style={{ gridRow: "span 2" }}
        >
          <img
            src="/images/technology3.png"
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>

        {/* Wide item */}
        <div
          className="relative overflow-hidden rounded-md col-span-2 sm:col-span-2"
          style={{ gridColumn: "span 2" }}
        >
          <img
            src="/images/technology2.png"
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>

      {/* Responsive adjustments for small screens */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="gridRow: span 2"] {
              grid-row: span 1 !important;
            }
            div[style*="gridColumn: span 2"] {
              grid-column: span 2 !important;
            }
          }
        `}
      </style>
    </section>
  );
};

