import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* LEFT - BRAND */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Rajat Ghosh
          </h2>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Crafting intelligent and interactive web solutions as a Web Developer and Data Analyst, while actively progressing toward becoming a Full Stack Developer.
          </p>
        </div>

        {/* CENTER - NAV LINKS */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>

          {[
            "home",
            "about",
            "skills",
            "projects",
            "experience",
            "publication",
            "contact",
          ].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-gray-400 hover:text-cyan-400 text-sm transition"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        {/* RIGHT - SOCIAL + CONTACT */}
        <div className="flex flex-col items-center md:items-end gap-4">
          
          <h3 className="text-white font-semibold">Connect with me</h3>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg">
            <a
              href="https://github.com/rajatghoshrg"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rajat-ghosh-8b3bb9320/
"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/the_rgzone
"
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
              href="mailto:yourgmail@gmail.com"
              className="text-gray-400 hover:text-red-400 hover:scale-110 transition"
            >
              <MdEmail />
            </a>
          </div>

          {/* Email */}
          <p className="text-gray-500 text-sm">
            rajatghoshhh@gmail.com
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        
        <p>
          © {new Date().getFullYear()} Rajat. All rights reserved.
        </p>

        {/* Back to Top */}
        <a
          href="#home"
          className="text-gray-400 hover:text-white transition"
        >
          ↑ Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;