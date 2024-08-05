import ProjectCard from '../components/ProjectCard';

import Navbar from '../components/nav';

const projects = [
  {
    id: 1,
    name: "Project 1",
    description: "Short description of Project 1",
    image: "src/assets/services/frontend.jpg",
    figmaLink: "https://figma.com/project1",
    githubLink: "https://github.com/project1",
    deployedLink: "https://project1.com",
    categories: ["Front-end"]
  },
  {
    id: 1,
    name: "Project 1",
    description: "Short description of Project 1",
    image: "src/assets/services/frontend.jpg",
    figmaLink: "https://figma.com/project1",
    githubLink: "https://github.com/project1",
    deployedLink: "https://project1.com",
    categories: ["Mobile", "UX/UI", "Front-end"]
  },
  {
    id: 1,
    name: "Project 1",
    description: "Short description of Project 1",
    image: "src/assets/services/frontend.jpg",
    figmaLink: "https://figma.com/project1",
    githubLink: "https://github.com/project1",
    deployedLink: "https://project1.com",
    categories: ["Mobile", "UX/UI", "Front-end"]
  },
  {
    id: 1,
    name: "Project 1",
    description: "Short description of Project 1",
    image: "src/assets/services/frontend.jpg",
    figmaLink: "https://figma.com/project1",
    githubLink: "https://github.com/project1",
    deployedLink: "https://project1.com",
    categories: ["Mobile", "UX/UI", "Front-end"]
  },
  
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="page-settup font-bodyFont bg-color-Nero">
      <h2 className="section-title uppercase">
        MY <span className="text-color-Atlantis">PORTFOLIO</span>
      </h2>
      <p className="text-center uppercase text-xs sm:text-sm mb-4">
        A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default Projects;