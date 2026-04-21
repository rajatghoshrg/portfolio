const highlights = [
  "Authored a chapter titled “String” in Conceptual Pathways in C Programming",
  "Worked on a web development internship project involving software and mobile UI",
  "Built projects in React, Flask, Python, Data Analysis, and interactive web design",
  "Participated in hackathons and developed real-world problem-solving solutions",
];

const Resume = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0a] px-6 py-16 flex items-center justify-center">
      <div className="w-full max-w-3xl backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 shadow-lg text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-4">
          Resume
        </h2>

        {/* Short intro (fixed duplicate) */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          A quick overview of my experience, skills, and achievements in AI, web development, and real-world projects.
        </p>

        {/* Highlights */}
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

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* View Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 text-sm border border-gray-600 text-gray-300 rounded-lg hover:text-white hover:border-white transition"
          >
            View Resume
          </a>

          {/* Download Button */}
          <a
            href="/resume.pdf"
            download
            className="px-5 py-2 text-sm bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg shadow-md hover:scale-105 transition"
          >
            Download Resume
          </a>

        </div>
      </div>
    </section>
  );
};

export default Resume;