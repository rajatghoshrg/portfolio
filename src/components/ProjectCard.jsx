const ProjectCard = ({ project }) => {
  return (
    <div className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-4 md:px-6 py-4 hover:border-purple-500/40 transition duration-300 shadow-md">

      <div className="flex items-center justify-between gap-4">

        {/* CENTER CONTENT */}
        <div className="flex-1 min-w-0">

          {/* TITLE + SMALL ICON */}
          <div className="flex items-center gap-2">
            <h4 className="text-base md:text-lg font-semibold text-white truncate">
              {project.title}
            </h4>

            {/* ICON */}
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 bg-gray-800 flex items-center justify-center flex-shrink-0">
              {project.icon ? (
                <img
                  src={project.icon}
                  alt="project icon"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerText = "⚡";
                  }}
                />
              ) : (
                <span className="text-xs text-gray-400">⚡</span>
              )}
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-sm mt-1 line-clamp-2">
            {project.description}
          </p>

          {/* TECH */}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2 py-[2px] bg-gray-800 text-gray-300 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* LINKS */}
          <div className="flex gap-2 mt-3 flex-wrap">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs px-3 py-[3px] border border-gray-600 rounded text-gray-300 hover:text-white hover:border-white transition"
              >
                GitHub
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-xs px-3 py-[3px] bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded hover:scale-105 transition"
              >
                Live
              </a>
            )}
          </div>
        </div>

        {/* RIGHT SIDE 16:9 IMAGE */}
        {project.image && (
          <div className="w-28 md:w-40 aspect-video rounded-lg overflow-hidden border border-white/10 flex-shrink-0 bg-gray-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/300x180?text=No+Preview";
              }}
            />
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectCard;