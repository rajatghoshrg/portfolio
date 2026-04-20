const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        {/* Name */}
        <h3 className="text-lg font-semibold text-white">
          Rajat
        </h3>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Rajat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;