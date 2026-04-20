import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFlask,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { AiOutlineBarChart } from "react-icons/ai";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 69, icon: <FaReact className="text-cyan-400" /> },
      { name: "HTML", level: 91, icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS / Tailwind", level: 69, icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "JavaScript", level: 49, icon: <FaJs className="text-yellow-400" /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", level: 88, icon: <FaPython className="text-yellow-300" /> },
      { name: "Flask", level: 69, icon: <SiFlask className="text-gray-300" /> },
    ],
  },
  {
    category: "Data Analysis",
    skills: [
      { name: "Pandas", level: 79, icon: <FaPython className="text-yellow-300" /> },
      { name: "NumPy", level: 92, icon: <FaPython className="text-blue-300" /> },
      { name: "Matplotlib", level: 85, icon: <AiOutlineBarChart className="text-green-400" /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", level: 65, icon: <FaGitAlt className="text-orange-500" /> },
      { name: "VS Code", level: 90, icon: <VscVscode className="text-blue-400" /> },
      // { name: "Postman", level: 70, icon: <SiPostman className="text-orange-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0a] px-6 py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          My Skills
        </h2>
        <p className="text-gray-400 mt-4">
          A curated stack of technologies and tools I use to craft intelligent, scalable, and modern digital experiences.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-2 hover:border-purple-500/40 transition-all duration-300 shadow-lg"
          >
            {/* Category Title */}
            <h3 className="text-xl font-semibold mb-6 text-white">
              {category.category}
            </h3>

            {/* Skills */}
            <div className="space-y-4">
              {category.skills.map((skill, idx) => (
                <div key={idx}>
                  {/* Skill Header */}
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-300 flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;