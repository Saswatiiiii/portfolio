import { motion } from "framer-motion";

const projects = [
  {
    title: "CityPulse",
    desc: "Realtime smart city incident reporting platform with GIS mapping, dashboard analytics, image-based reporting, and automated alert notifications.",
    tech: "React • Firebase • React Leaflet • Cloudinary • EmailJS",
    github: "https://github.com/Saswatiiiii/citypulse.git",
    demo: "https://citypulse-2ef8d.web.app",
  },
  {
    title: "FaceAttend",
    desc: "AI-powered facial recognition attendance system with automated attendance logging and real-time database integration.",
    tech: "Python • OpenCV • Flask • MySQL",
    github: "https://github.com/Saswatiiiii/FaceAttend.git",
    demo: "",
  },
  {
    title: "Class Alert",
    desc: "Automated SMS reminder system for students and teachers before classes.",
    tech: "Python • Twilio",
    github: "https://github.com/Saswatiiiii/class-alert-system.git",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            className="bg-slate-800 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {project.desc}
            </p>

            <p className="text-cyan-400 mt-4">
              {project.tech}
            </p>

            <div className="flex gap-3 mt-6 flex-wrap">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg transition"
              >
                GitHub
              </a>

              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-cyan-400 hover:bg-cyan-400 hover:text-black px-4 py-2 rounded-lg transition"
                >
                  Live Demo
                </a>
              ) : (
                <button
                  disabled
                  className="border border-gray-500 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}