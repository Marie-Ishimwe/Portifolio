
import { motion } from "framer-motion";
import ServicesSection from "./ServicesSection";
import SkillsSection from "./SkillsSection";

const Skills = () => {
  return (
    <div className="w-full px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto justify-center text-center"
      >
        <h2 className="section-title uppercase">
      Services <span className="text-color-Atlantis">& Skills</span>
      </h2>
      <p className="text-center uppercase text-xs sm:text-sm mb-4">
        I design and code beautiful things, and I love what I do
      </p>
      <hr className="w-full mb-8" />
        
        <ServicesSection />
        <SkillsSection />
      </motion.div>
    </div>
  );
};

export default Skills;