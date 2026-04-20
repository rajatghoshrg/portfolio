import { useEffect, useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6 py-16">
      <div
        className={`max-w-6xl w-full grid md:grid-cols-2 gap-12 items-stretch transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* LEFT SIDE (TEXT) */}
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg h-full flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            My journey into tech started with a simple curiosity — how do things actually work behind the screen?
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            What began as experimenting with basic web development soon turned into a deeper passion for building complete, real-world applications. I didn’t just want to create websites; I wanted to create experiences that feel interactive, meaningful, and useful.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            As I learned more, I discovered the power of data — how numbers and patterns can tell stories, guide decisions, and make applications smarter.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Because for me, it’s not just about writing code.  
            It’s about building something that makes a difference.
          </p>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="flex h-full">
          <div className="relative w-full h-full">

            {/* Glow Background */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 blur-2xl opacity-20"></div>

            {/* Image */}
            <img
              src="/images/about_rg.jpeg"
              alt="My Journey"
              className="relative w-full h-full object-cover object-top rounded-2xl border border-white/10 shadow-xl hover:scale-[1.02] transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;