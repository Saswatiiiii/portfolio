import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto py-24 px-6"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-gray-300 leading-8">
          I'm Saswati Chatterjee, a Computer Science student
          passionate about Full Stack Development, Backend
          Engineering, and building impactful solutions.

          I enjoy creating projects that solve real-world
          problems, from smart city monitoring platforms
          to AI-powered attendance systems.

          Currently exploring scalable web applications,
          system design, and modern development technologies.
        </p>
      </motion.div>
    </section>
  );
}