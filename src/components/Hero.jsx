import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Background Glow */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-cyan-500/20
        via-blue-500/10
        to-purple-500/20
        blur-3xl
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-6"
      >
        {/* Profile Image */}
        <img
          src="/profile.jpg"
          alt="Saswati Chatterjee"
          className="
          w-44
          h-44
          rounded-full
          border-4
          border-cyan-400
          mx-auto
          mb-8
          object-cover
          shadow-lg
          "
        />

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold">
          Hey, I'm Saswati 👋
        </h1>

        {/* Animated Roles */}
        <div className="text-cyan-400 text-xl md:text-3xl mt-6 font-semibold">
          <TypeAnimation
            sequence={[
              "Software Developer",
              2000,
              "Full Stack Developer",
              2000,
              "Problem Solver",
              2000,
              "Hackathon Enthusiast",
              2000,
            ]}
            repeat={Infinity}
          />
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
          Building impactful applications with code, creativity,
          and real-world problem solving.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="#projects"
            className="
            bg-cyan-500
            hover:bg-cyan-600
            px-6
            py-3
            rounded-xl
            transition
            "
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="
            border
            border-cyan-400
            hover:bg-cyan-400
            hover:text-black
            px-6
            py-3
            rounded-xl
            transition
            "
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}