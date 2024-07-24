import omg from "../assets/omg.png";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const Details = () => {
  const personalInfo = [
    { label: "First Name", value: "Aimee Marie" },
    { label: "Last Name", value: "Ishimwe" },
    { label: "Education", value: "Bsc Computer Science" },
    { label: "Nationality", value: "Rwandan" },
    { label: "Address", value: "NR3 Gatsata" },
    { label: "Phone", value: "+250781490784" },
    // { label: "Email", value: "ishimweaime77@gmail.com" },
  ];
  const socialIcons = [
    { icon: "bxl-linkedin", href: "#" },
    { icon: "bxl-github", href: "#" },
    { icon: "bxl-behance", href: "#" },
  ];

  return (
    <div className="page-settup">
      <h2 className="section-title">
        ABOUT <span className="text-color-Atlantis">ME</span>
      </h2>
      <p className="text-center uppercase text-xs sm:text-sm mb-4">
        I design and code beautiful things, and I love what I do
      </p>
      <hr className="w-full mb-8" />
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-12 lg:px-16">
        {/* Image */}
        <div className="relative max-w-md w-full aspect-[3/4] mb-8 lg:mb-0">
          <div className="absolute top-[5%] left-[5%] border-8 w-[90%] h-[90%] border-color-Atlantis"></div>
          <div className="absolute top-0 left-0 w-[90%] h-[90%] overflow-hidden">
            <img
              src={omg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Tabs and their respective content */}
        <div className="flex flex-col gap-4 w-full py-2 lg:py-12 text-left justify-center">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 p-3">
            {personalInfo.map((item, index) => (
              <p
                key={index}
                className="text-sm sm:text-base text-color-Emperor"
              >
                <strong>{item.label}:</strong> {item.value}
              </p>
            ))}
          </div>
          <div className="p-3 text-color-Atlantis">
            <div className="flex flex-row justify-start items-center space-x-4">
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent border-2 border-color-Atlantis text-color-Atlantis transition-all duration-300 ease-in-out hover:bg-color-Atlantis group"
                >
                  <i
                    className={`bx ${item.icon} text-xl group-hover:text-white transition-colors duration-300`}
                  ></i>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-color-Atlantis text-white px-4 sm:px-6 py-3 rounded-full flex items-center text-sm sm:text-base transition duration-300 ease-in-out transform hover:bg-color-Emperor hover:scale-105 hover:shadow-lg">
              <i className="bx bxs-download mr-2"></i> DOWNLOAD MY CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
