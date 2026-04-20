import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [active, setActive] = useState("web");

  const filteredProjects = projects.filter(
    (project) => project.category === active
  );

  const tabs = [
    { name: "Web Dev", value: "web" },
    { name: "Data Analysis", value: "data" },
    { name: "Mini Projects", value: "mini" },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0a0a0a] px-4 md:px-6 lg:px-12 py-20"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          My Projects
        </h2>
        <p className="text-gray-400 mt-4">
          Explore my work across different domains
        </p>
      </div>

      {/* FILTER NAVBAR */}
      <div className="flex justify-center mb-10">
        <div className="flex gap-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full p-1 shadow-inner">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              className={`relative px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                active === tab.value
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md scale-105"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.name}

              {active === tab.value && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* PROJECT LIST */}
      <div
        key={active}
        className="w-full px-2 md:px-6 lg:px-16 flex flex-col gap-4 md:gap-5 transition-all duration-500 ease-in-out"
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.title} className="transition-all duration-500">
              <ProjectCard project={project} />
            </div>
          ))
        ) : (
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;