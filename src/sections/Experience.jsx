import { useEffect, useState } from "react";

const experiences = [
  {
    title: "NIIT Foundation",
    type: "Internship",
    duration: "Nov 2025 - Jan 2026",
    subtitle: "Cyber Security Essentials",
    image: "/images/experience/internship_niit.jpeg",
    description:
      "Gained foundational knowledge of cybersecurity principles and best practices. Learned basics of network security, cyber threats, malware, and phishing attacks.",
  },
  {
    title: "Digontom Pvt. Ltd.",
    type: "Internship",
    duration: "April,2026 - May,2026",
    subtitle: "Web Development",
    image: "/images/experience/internship_digontom.jpeg",
    description:
      "Developed responsive web applications using React and integrated APIs for dynamic data handling. Built reusable UI components and improved overall user experience. Collaborated with the team and performed manual testing to identify and fix bugs. Gained hands-on experience in real-world development, debugging, and version control.",
  },
  {
    title: "Hackathons",
    type: "Achievements",
    duration: "2024 - Present",
    image: "/images/experience/sih_hackathon.jpeg",
    certificates: [
      "/images/experience/hackathon1.jpeg",
      "/images/experience/hackathon2.jpeg",
      "/images/experience/hackathon3.jpeg",
    ],
    description:
      "Participated in several competitive hackathons including NSHM Innovathon and IEM HackOasis 2.0, where I collaborated with teams to build innovative, real-world solutions under time constraints. Demonstrated strong problem-solving, teamwork, and rapid prototyping skills throughout these events. Achieved 4th place in Stat Math Hackfest, showcasing analytical thinking and effective implementation. Additionally, qualified for Round 2 of Smart India Hackathon (SIH) 2025, reflecting consistency, creativity, and the ability to develop impactful ideas at a national level.",
  },
  // {
  //   title: "Certifications",
  //   type: "Achievement",
  //   duration: "2024 - 2025",
  //   image: "/experience/certificate.jpg",
  //   description:
  //     "Completed certifications in AI/ML, Python development, and web technologies.",
  // },
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
      <div className="relative max-w-5xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 to-purple-500"></div>

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

              {/* CARD */}
              <div className="md:w-1/2 p-4">
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] hover:border-purple-500/40 transition-all duration-300">

                  {/* IMAGE */}
                  {exp.image && (
                    <div className="w-full aspect-video bg-black">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  {/* CONTENT */}
                  <div className="p-5">

                    {/* TYPE + DATE */}
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="text-cyan-400 uppercase tracking-wide">
                        {exp.type}
                      </span>
                      <span className="text-gray-500">
                        {exp.duration}
                      </span>
                    </div>

                    {/* SUBTITLE */}
                    {exp.subtitle && (
                      <p className="text-sm text-purple-400 mb-1">
                        {exp.subtitle}
                      </p>
                    )}

                    {/* TITLE */}
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {exp.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    {/* 🔥 CERTIFICATE GALLERY (ONLY IF EXISTS) */}
                    {exp.certificates && (
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        {exp.certificates.map((cert, i) => (
                          <img
                            key={i}
                            src={cert}
                            alt="certificate"
                            className="w-full h-20 object-cover rounded-md border border-white/10 hover:scale-105 transition"
                          />
                        ))}
                      </div>
                    )}

                  </div>
                </div>
              </div>

              {/* DOT */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-[#0a0a0a]"></div>

              {/* SPACE */}
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;