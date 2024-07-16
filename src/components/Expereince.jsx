import React from "react";

const Experience = () => {
  const experiences = [
    {
      date: "June 2023- Present",
      role: "DIGITAL INNOVATIONS FELLOW",
      company: "GANZAFRICA",
      description:
        "Seconded at MINAGRI to support the ministry in making data-driven policies and solutions",
    },
    {
      date: "2014 - 2017",
      role: "WEB DEVELOPER",
      company: "TWITTER",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.",
    },
    {
      date: "2010 - 2014",
      role: "CONSULTANT",
      company: "GOOGLE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.",
    },
  ];

  const educations = [
    {
      date: "2007 - 2010",
      degree: "ENGINEERING DEGREE",
      institution: "ISTANBUL UNIVERSITY",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.",
    },
    {
      date: "2005 - 2007",
      degree: "MASTERS DEGREE",
      institution: "PARIS UNIVERSITY",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.",
    },
    {
      date: "2001 - 2005",
      degree: "BACHELOR DEGREE",
      institution: "MOSCOW HIGH SCHOOL",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.",
    },
  ];
  
  return (
    <section className="min-h-screen bg-color-lighter_Atlantis p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-4xl font-bold text-center text-color-Emperor mb-8">EXPERIENCE</h2>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {experiences.map((exp, index) => (
              <li key={index}>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className={`mb-10  text-color-Emperor ${index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end'}`}>
                  <time className="font-mono italic ">{exp.date}</time>
                  <div className="text-lg font-black">{exp.role}</div>
                  <div className="text-color-Atlantis">{exp.company}</div>
                  <p  className="text-sm">{exp.description}</p>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-4xl font-bold text-center mb-8 text-color-Emperor">EDUCATION</h2>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {educations.map((edu, index) => (
              <li key={index}>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className={`mb-10  text-color-Emperor ${index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end'}`}>
                  <time className="font-mono italic">{edu.date}</time>
                  <div className="text-lg font-black">{edu.degree}</div>
                  <div className="text-color-Atlantis">{edu.institution}</div>
                  <p className="text-sm">{edu.description}</p>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;