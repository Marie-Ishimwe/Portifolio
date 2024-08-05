import omg from "../assets/omg.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalInfo from "./PersonalInfo";
import Qualifications from "./Qualifications";
import Experience from "./Expereince";

const Details = () => {
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
        {/* Tabs */}
        <div className="flex-1 w-full ">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full md:grid-cols-3">
              <TabsTrigger value="personal" className="w-[200px] md:w-auto">Personal Info</TabsTrigger>
              <TabsTrigger value="qualifications" className="w-[200px] md:w-auto">Qualifications</TabsTrigger>
              <TabsTrigger value="experience" className="w-[200px] md:w-auto">Experience</TabsTrigger>
            </TabsList>
            <div className="mt-12 xl:mt-8">
            <TabsContent value="personal">
              <PersonalInfo />
            </TabsContent>
            <TabsContent value="qualifications">
              <Qualifications />
            </TabsContent>
            <TabsContent value="experience">
              <Experience />
            </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Details;