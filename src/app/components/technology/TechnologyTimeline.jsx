import { dinNext } from "@/app/fonts";
import { FaUserGraduate, FaPalette, FaLaptopCode, FaUsers, FaUniversalAccess, FaShieldAlt, FaRocket } from "react-icons/fa";

export default function TechnologyTimeline() {
  const features = [
    {
      id: 1,
      title: "Personalized Learning",
      description:
        "iPads and Apple apps adapt to each child's pace, interests, and strengths.",
      icon: <FaUserGraduate />,
    },
    {
      id: 2,
      title: "Creativity Unleashed",
      description:
        "Tools like GarageBand, iMovie, and Keynote help children express themselves in music, film, design, and presentations.",
      icon: <FaPalette />,
    },
    {
      id: 3,
      title: "Coding & Future Skills",
      description:
        "With Swift Playgrounds, children learn coding in a fun, interactive way that builds logical thinking and problem-solving.",
      icon: <FaLaptopCode />,
    },
    {
      id: 4,
      title: "Collaboration & Communication",
      description:
        "Apple Classroom and iCloud allow seamless teamwork, idea-sharing, and real-time feedback.",
      icon: <FaUsers />,
    },
    {
      id: 5,
      title: "Accessibility for All",
      description:
        "Built-in features ensure every learner, regardless of need, can participate fully.",
      icon: <FaUniversalAccess />,
    },
    {
      id: 6,
      title: "Secure & Reliable",
      description:
        "Apple’s commitment to privacy and safety ensures a trustworthy learning environment.",
      icon: <FaShieldAlt />,
    },
    {
      id: 7,
      title: "Future-Ready Competence",
      description:
        "Students graduate with digital fluency, creative confidence, and global skill sets.",
      icon: <FaRocket />,
    },
  ];

  return (
    <>
      <div className="text-center mt-8 lg:mt-16">
        <h2 className={`text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-[700] uppercase ${dinNext.className} leading-[1]`}>
          <span className="text-[#831719]">TECHNOLOGY IS </span> NOT AN ADD-ON
        </h2>
        <h3 className={`text-[24px] lxs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] uppercase font-[400] ${dinNext.className} transform -translate-y-0 leading-[1]`}>
          BUT A BACKBONE OF TOMORROW’S LEARNING
        </h3>

      <div className="lg:hidden">
        <div className="flex flex-col items-end sm:items-center px-4">
          {features
            .map((feature) => (
              <MobileIconCard id={feature.id} title={feature.title} description={feature.description} key={feature.id} icon={feature.icon} />
            ))}
        </div>
</div>
      </div>
      <div className="hidden lg:block">
        <div className="w-full flex flex-col items-center py-16 px-2">
          {/* Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
            {features
              .filter((f) => [1, 3, 5, 7].includes(f.id))
              .map((feature) => (
                <BottomIconCard id={feature.id} title={feature.title} description={feature.description} key={feature.id} icon={feature.icon} />
              ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            {features
              .filter((f) => [2, 4, 6].includes(f.id))
              .map((feature) => (
                <UpIconCard id={feature.id} title={feature.title} description={feature.description} key={feature.id} icon={feature.icon} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

function MobileIconCard({ id, title, description, icon }) {
  return (
    <div
  className={`text-white rounded-4xl shadow-lg p-1 h-[200px] w-[264px] flex flex-col items-center relative bg-[#831719] my-4`}
>
  <div className="flex flex-row h-full">
    <div className="text-center min-w-[16%] text-[32px] font-bold flex items-center justify-center">{id}</div>
    <div className="bg-white text-[#831719] rounded-4xl pl-4 pr-2 pt-4 h-full">
      <p className={`${dinNext.className} font-[700] text-[30px] leading-[1]`}>{title}</p>
      <p className="text-[14px] font-medium text-black mt-2 mb-2">{description}</p>
    </div>
  </div>

      {/* Vertical line connecting to icon */}
      <div className="absolute bottom-1/3 -left-[16px] xss:-left-[42px] xs:-left-[64px] sm:-left-[82px] transform translate-y">
        {icon && (
          <div className="absolute bottom-[-28px] left-0 transform -translate-x-3/4 flex flex-row items-center justify-center">
            <div className="bg-white rounded-full shadow-lg p-4 xs:p-8 text-[#831719] flex items-center justify-center mt-4 text-[24px] xss:text-[36px]">
              {icon}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function BottomIconCard({ id, title, description, icon }) {
  return (
    <div
      className={`text-white rounded-4xl shadow-lg p-1 min-h-[180px] w-[300px] lg:w-[242px] llg:w-[264px] xl:w-[300px] xlg:w-[320px] flex flex-col items-center relative bg-[#831719] group`}
    >
      <div className="flex flex-row h-full">
        <div className="text-center min-w-[16%] text-[32px] font-bold flex items-center justify-center">{id}</div>
        <div className="bg-white text-[#831719] rounded-4xl pl-4 pr-2 pt-4 ">
          <p className={`${dinNext.className} font-[700] text-[30px] leading-[1]`}>{title}</p>
          <p className="text-[14px] font-medium text-black mt-2 mb-2 ">{description}</p>
        </div>
      </div>

      {/* Vertical line connecting to icon */}
      <div className="absolute bottom-0 transform translate-y-40 hidden lg:block">
        {icon && (
          <div className="absolute bottom-[-28px] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="w-[6px] h-[33px] bg-[#831719] rounded-full"></div> {/* Vertical line */}
            <div className="bg-white rounded-full shadow-lg p-8 text-[#831719] flex items-center justify-center mt-4 text-[64px]  group-hover:text-white group-hover:bg-[#831719] transition duration-300">
              {icon}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function UpIconCard({ id, title, description, color = "#8B0000", icon }) {
  return (
    <div className="relative flex flex-col items-center group">

      {/* Icon above card */}
      <div className="hidden lg:block">
        {icon && (
          <div className="flex flex-col items-center mb-[-16px] z-10 ">
            {/* Vertical line pointing down */}
            {/* Icon */}
            <div className="bg-white rounded-full shadow-lg p-8 text-[#831719] flex items-center justify-center mt-2 text-[64px] group-hover:text-white group-hover:bg-[#831719] transition duration-300">
              {icon}
            </div>
            <div className="w-[6px] h-8 bg-[#831719] mt-4 rounded-full"></div>
          </div>
        )}

      </div>

      {/* Card */}
      <div
        className="text-white rounded-4xl shadow-lg p-1 min-h-[180px] w-[300px] lg:w-[242px] llg:w-[264px] xl:w-[300px] xlg:w-[320px] flex flex-col items-center relative bg-[#831719] transform translate-y-8"
        style={{ backgroundColor: color }}
      >
        {/* Card Content */}
        <div className="flex flex-row h-full">
          <div className="text-center min-w-[16%] text-[32px] font-bold flex items-center justify-center ">{id}</div>
          <div className="bg-white text-[#831719] rounded-4xl pl-4 pr-2 pt-4 ">
            <p className={`${dinNext.className} font-[700] text-[30px] leading-[1]`}>{title}</p>
            <p className="text-[14px] font-medium text-black mt-2 mb-2">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


