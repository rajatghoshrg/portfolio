import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Publication from "./sections/publication";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />

      {/* Hero */}
      <section id="home" className="pt-20">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <About />
      </section>

      {/* Skills */}
      <section id="skills" className="py-20">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <Projects />
      </section>

      {/* Experience */}
      <section id="experience" className="py-20">
        <Experience />
      </section>

      <section id="publication">
        <Publication />
      </section>

      {/* Resume */}
      <section id="resume" className="py-20">
        <Resume />
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;