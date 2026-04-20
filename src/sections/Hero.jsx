import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from "../components/Button";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-6">
      <div
        className={`max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* LEFT SIDE (TEXT) */}
        <div className="text-center md:text-left">
          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Rajat
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-lg md:text-2xl text-gray-300 mb-4">
            Web Developer & Data Analyst
          </h2>

          {/* Tagline */}
          <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
            I build responsive web applications and turn data into meaningful insights
            to create smarter, more impactful digital solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center md:justify-start">

            <Button to="projects">
              View Projects
            </Button>

            <Button variant="outline" to="contact">
              Contact
            </Button>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-xl justify-center md:justify-start">
            <a
              href="https://github.com/rajatghoshrg"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rajat-ghosh-8b3bb9320/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/the_rgzone"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-pink-400 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com/rajat.ghosh.122392"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 hover:scale-110 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="mailto:rajatghoshhh@gmail.com"
              className="text-gray-400 hover:text-red-400 hover:scale-110 transition"
            >
              <MdEmail />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 blur-2xl opacity-30"></div>

            {/* Profile Image */}
            <img
              src="/images/Rajat_Profile.jpeg"
              alt="Rajat"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/10 shadow-xl hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;