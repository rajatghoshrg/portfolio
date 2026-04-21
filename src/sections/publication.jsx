import { useEffect, useState } from "react";

const publication = {
  title: "Conceptual Pathways in C Programming",
  role: "Author",
  description:
    "Authored a chapter on 'String' focusing on simplifying core concepts like string operations, memory handling, and real-world applications in C for beginners.",
  link: "https://www.amazon.in/Conceptual-Pathways-Programming-Ranjan-Banerjee/dp/9365819628/ref=sr_1_1?crid=1GO970RRIRN2C&dib=eyJ2IjoiMSJ9.KAC8lHmd-7jFdoAKdx1iOLo2srZz_BS3gSUiObiSVMA.dtO5hOegMHXr8NT_1XDwudmLaY2cy0BnygS7HvHfcYI&dib_tag=se&keywords=conceptual+pathways+in+c+programming&qid=1776784659&sprefix=conceptuyal+pathways+in+c+programming%2Caps%2C389&sr=8-1",
  images: [
    "/images/publication/publicationme.jpeg",
    "/images/publication/publicationbook.jpeg",
  ],
};

const Publication = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-[#0a0a0a] px-6 py-16">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Publications
        </h2>
        <p className="text-gray-400 mt-4">
          My contribution to the world of learning and development
        </p>
      </div>

      {/* Main Container */}
      <div
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-stretch transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        
        {/* LEFT (TEXT) */}
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg flex flex-col justify-center">
          
          <span className="text-xs text-cyan-400 uppercase tracking-wide">
            {publication.role}
          </span>

          <h3 className="text-2xl font-semibold text-white mt-2 mb-4">
            {publication.title}
          </h3>

          <p className="text-gray-400 leading-relaxed mb-6">
            {publication.description}
          </p>

          {/* ✅ Smaller Button */}
          <a
            href={publication.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-sm bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium shadow-md hover:scale-105 transition"
          >
            Buy / View Book
          </a>
        </div>

        {/* RIGHT (2 SQUARE IMAGES) */}
        <div className="grid grid-cols-2 gap-4 h-full">
          
          {publication.images.map((img, index) => (
            <div key={index} className="relative w-full aspect-square">
              
              {/* Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 blur-xl opacity-20"></div>

              {/* Image */}
              <img
                src={img}
                alt="Book"
                className="relative w-full h-full object-cover rounded-xl border border-white/10 shadow-lg hover:scale-105 transition duration-300"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Publication;