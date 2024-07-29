import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "80%" },
    { name: "JAVASCRIPT", level: "60%" },
    { name: "CSS", level: "75%" },
    { name: "JQUERY", level: "65%" },
    { name: "WORDPRESS", level: "90%" },
    { name: "ANGULAR JS", level: "85%" },
    { name: "ILLUSTRATOR", level: "60%" },
    { name: "AFTER EFFECTS", level: "75%" },
    { name: "PHOTOSHOP", level: "80%" },
  ];

  return (
    <div className="w-full py-10 sm: px-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-color-Emperor">
        SKILLS
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-sm text-color-Emperor"
          >
            <span className="font-bold ">{skill.name}</span>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="bg-color-Atlantis h-2 rounded-full"
                style={{ width: skill.level }}
              ></div>
            </div>
            <span className="text-right w-full">{skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
