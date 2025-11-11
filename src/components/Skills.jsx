import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiSelenium,
  SiJirasoftware,
  SiMysql,
} from "react-icons/si";

const skillsData = [
  {
    section: "Frontend",
    skills: [
      { icon: FaHtml5, name: "HTML5", color: "text-orange-600" },
      { icon: FaCss3Alt, name: "CSS3", color: "text-blue-600" },
      { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
      { icon: FaReact, name: "React.js", color: "text-cyan-400" },
      { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-600" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
    ],
  },
  {
    section: "Backend",
    skills: [
      { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
      { icon: SiExpress, name: "Express.js", color: "text-gray-700" },
      { icon: SiPostman, name: "Postman", color: "text-orange-500" },
    ],
  },
  {
    section: "Database",
    skills: [
      { icon: SiMongodb, name: "MongoDB", color: "text-green-700" },
      { icon: SiMysql, name: "MySQL", color: "text-blue-500" },
      { icon: FaDatabase, name: "SQL", color: "text-gray-700" },
    ],
  },
  {
    section: "Others",
    skills: [
      { icon: FaGitAlt, name: "Git", color: "text-orange-700" },
      {
        icon: FaGithub,
        name: "GitHub",
        color: "text-black dark:text-gray-300",
      },
      { icon: SiSelenium, name: "Selenium", color: "text-green-500" },
      { icon: SiJirasoftware, name: "Jira", color: "text-blue-500" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen py-24 md:py-32 px-10 md:px-14 lg:px-28 xl:px-40  backdrop-blur-3xl"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Some of the{" "}
        <span className="text-amber-500 dark:text-sky-300">Skills</span> I’ve
        worked with
      </h1>

      {/* Skill Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((section, idx) => (
          <div
            key={idx}
            className="bg-white/60 dark:bg-gray-800 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
          >
            <h2 className="text-2xl font-semibold mb-6 text-amber-600 dark:text-sky-200 text-center">
              {section.section}
            </h2>
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {section.skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
                  >
                    <Icon className={`text-5xl ${skill.color}`} />
                    <span className="font-semibold text-sm">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
