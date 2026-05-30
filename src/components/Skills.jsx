import {
  FaJava,
  FaGitAlt,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiDjango,
  SiFirebase,
  SiMysql,
  SiFlask,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="
              bg-slate-800
              p-6
              rounded-xl
              flex
              flex-col
              items-center
              gap-3
              text-4xl
              hover:scale-105
              hover:-translate-y-2
              transition
              duration-300
              shadow-lg
            "
          >
            {skill.icon}

            <span className="text-lg">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Core Subjects */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">
          Core Subjects
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "DBMS",
            "Operating Systems",
            "Computer Organization & Architechture",
            "Computer Networks",
            "DSA",
          ].map((subject) => (
            <span
              key={subject}
              className="
                bg-cyan-500/20
                border
                border-cyan-400
                px-4
                py-2
                rounded-full
              "
            >
              {subject}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}