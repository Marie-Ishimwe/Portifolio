import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="relative overflow-hidden group rounded-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image (visible by default, hidden on hover) */}
      <img 
        src={project.image} 
        alt={project.name} 
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />

      {/* Badges (visible by default, hidden on hover) */}
      <div className="absolute top-2 left-2 flex flex-wrap gap-2 transition-opacity duration-300 group-hover:opacity-0">
        {project.categories.map((category, index) => (
          <span key={index} className="px-3 py-2 bg-color-Atlantis text-color-Nero text-xs rounded-full">
            {category}
          </span>
        ))}
      </div>

      {/* Atlantis card content (hidden by default, visible on hover) */}
      <div className="absolute inset-0 bg-color-Atlantis flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-lg font-bold text-center mb-2">{project.name}</h3>
        <p className="text-white text-sm text-center mb-4">{project.description}</p>
        <div className="flex justify-center space-x-4">
          <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-opacity-80">
            <i className='bx bxl-figma text-2xl'></i>
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-opacity-80">
            <i className='bx bxl-github text-2xl'></i>
          </a>
          <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-opacity-80">
            <i className='bx bx-link-external text-2xl'></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    figmaLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    deployedLink: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProjectCard;