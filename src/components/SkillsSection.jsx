
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', icon: 'bxl-javascript' },
  { name: 'React', icon: 'bxl-react' },
  { name: 'Redux', icon: 'bxl-redux' },
  { name: 'Node.js', icon: 'bxl-nodejs' },
  { name: 'MongoDB', icon: 'bxl-mongodb' },
  { name: 'Git', icon: 'bxl-git' },
  { name: 'Figma', icon: 'bxl-figma' },
  { name: 'HTML5', icon: 'bxl-html5' },
  { name: 'CSS3', icon: 'bxl-css3' },
  { name: 'TypeScript', icon: 'bxl-typescript' },
  { name: 'Python', icon: 'bxl-python' },
  { name: 'PHP', icon: 'bxl-php' },
  { name: 'Material UI', icon: 'bxl-material-ui' },
  { name: 'Tailwind CSS', icon: 'bxl-tailwind-css' },
  { name: 'Flutter', icon: 'bxl-flutter' },
  { name: 'Sass', icon: 'bxl-sass' },
  { name: 'Unity', icon: 'bxl-unity' },
  { name: 'Unreal Engine', icon: 'bx-cube-alt' },
  { name: 'C#', icon: 'bxl-c-plus-plus' },
  { name: 'Blender', icon: 'bxs-cube' },
];

const SkillsSection = () => {
  return (
    <div className="flex flex-col md:flex-row p-8 bg-color-lighter_Atlantis">
      <motion.div 
        className="w-1/3 pr-8 hidden lg:flex lg:flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center md:text-left">My Skills</h2>
        <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Crafting Digital Experiences</h3>
        <p className="mb-4 text-center md:text-left">
          With a diverse skill set encompassing various programming languages and tools,
          I bring a comprehensive approach to software development. My expertise allows
          me to create robust, scalable, and user-friendly applications across different
          platforms and technologies.
        </p>
      </motion.div>
      <div className="sm:w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center bg-white text-color-Atlantis p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <i className={`bx ${skill.icon} text-4xl mb-2`}></i>
            <span className="text-sm font-medium text-center">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;