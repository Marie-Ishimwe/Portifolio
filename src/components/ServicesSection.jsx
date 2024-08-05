
import { motion } from "framer-motion";

const services = [
    {
      title: "Frontend Development",
      description: "Building interactive and dynamic user interfaces using modern technologies.",
      image: "src/assets/services/frontend.jpg"
    },
    {
      title: "Backend Development",
      description: "Developing robust server-side applications, APIs, and databases to power your web applications.",
      image: "src/assets/services/mobile.jpg"
    },
    {
      title: "UI/UX Design",
      description: "Conduct user research, create wireframes and prototypes, and design visually appealing interfaces that delight users.",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Mobile Development",
      description: "Developing native or cross-platform mobile applications for iOS and Android.",
      image: "src/assets/services/mobile_dev.jpg"
    },
    {
        title: "AR/VR Development",
        description: "Creating immersive augmented and virtual reality experiences for various platforms and industries.",
        image: "src/assets/services/vr.jpg"
      },
      {
        title: "Game Design",
        description: "Designing engaging and interactive mobile, video, and board games using cutting-edge game engines.",
        image: "src/assets/services/game.jpg"
      }
    
  ];

const ServicesSection = () => {
  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:px-24 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-6"
          >
            <img src={service.image} alt={service.title} className="w-64 h-48 mb-4 rounded-lg" />
            <h4 className="text-xl font-bold text-color-Atlantis mb-2">{service.title}</h4>
            <p className="text-color-Emperor">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;