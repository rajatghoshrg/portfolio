const highlights = [
  "AI Developer with hands-on experience in intelligent web applications",
  "Worked on a drone internship project involving software and mobile UI",
  "Built projects in React, Flask, Python, AI/ML, and interactive web design",
  "Participated in hackathons and developed real-world problem-solving solutions",
];

const Resume = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0a] px-6 py-16 flex items-center justify-center">
      <div className="w-full max-w-3xl backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 shadow-lg text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-4">
          Resume
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          A quick snapshot of my skills, experience, and project journey in AI,
          web development, and creative technology.
        </p>

        <div className="grid gap-4 text-left mb-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-300 hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300"
            >
              {item}
            </div>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;