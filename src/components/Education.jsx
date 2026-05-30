import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="max-w-5xl mx-auto py-24 px-6">
      <h2 className="text-4xl font-bold mb-10">
        Education
      </h2>

      <div className="space-y-6">

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-slate-800 p-6 rounded-xl"
        >
          <h3 className="text-2xl font-bold">
            B.Tech in Computer Science & Engineering
          </h3>

          <p className="text-cyan-400 mt-2">
            Maulana Abul Kalam Azad University of Technology
          </p>

          <p className="text-gray-400">
            2025 - 2028 | Ongoing
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-slate-800 p-6 rounded-xl"
        >
          <h3 className="text-2xl font-bold">
            Diploma in Computer Science & Technology
          </h3>

          <p className="text-cyan-400 mt-2">
            Kalna Polytechnic
          </p>

          <p className="text-gray-400">
            CGPA: 8.5 / 10
          </p>

          <p className="text-gray-400">
            2022 - 2025
          </p>
        </motion.div>

      </div>
    </section>
  );
}