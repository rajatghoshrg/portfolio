import { useEffect, useState } from "react";

const experiences = [
  {
    title: "Drone Project Internship",
    type: "Internship",
    description:
      "Worked on a defense-oriented drone system. Contributed to software development and mobile UI for controlling drone movements, real-time data visualization, and intelligent control features.",
  },
  {
    title: "Hackathons",
    type: "Experience",
    description:
      "Participated in multiple hackathons building AI-powered solutions like EduGenie, DisasterBuddy, and mental wellness chatbots with real-world problem-solving focus.",
  },
  {
    title: "Certifications",
    type: "Achievement",
    description:
      "Completed certifications in AI/ML, Python development, and web technologies, strengthening both theoretical and practical skills.",
  },
];

const Experience = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-[#0a0a0a] px-6 py-16">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Experience
        </h2>
        <p className="text-gray-400 mt-4">
          My journey through internships, hackathons, and continuous learning
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 to-purple-500"></div>

        {/* Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } transition-all duration-1000 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              
              {/* Content Card */}
              <div className="md:w-1/2 p-4">
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:scale-105 hover:border-purple-500/40 transition-all duration-300">
                  
                  <span className="text-xs text-cyan-400 uppercase tracking-wide">
                    {exp.type}
                  </span>

                  <h3 className="text-xl font-semibold text-white mt-2 mb-2">
                    {exp.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-[#0a0a0a]"></div>

              {/* Spacer */}
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;