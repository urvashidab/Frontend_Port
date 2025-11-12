import React, { useState, useEffect, useRef } from "react";
import pro1 from "../assets/project1.png";
import pro2 from "../assets/pro2.png";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, fully responsive personal portfolio. It includes smooth animations, dark mode, and contact form integration.",
    features: [
      "Responsive design with Tailwind CSS",
      "Dark mode with persistent theme toggle",
      "Smooth Framer Motion animations",
      "Deployed using GitHub Pages",
    ],
    image: pro2,
    skills: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "NodeJS",
      "Express",
      "MongoDB",
    ],
    live: "https://urvashidabgotra.vercel.app/",
  },
  {
    title: "Frontend Project- Agency AI",
    description:
      "Built with React.js and Tailwind CSS featuring a fully responsive layout optimized for all devices.",
    features: [
      "Implements 3D tilt animations, smooth hover effects",
      "Professional dark theme with elegant shadows, scaling effects",
    ],
    image: pro1,
    skills: ["React", "Tailwind CSS", "JavaScript", "Motion Framer"],
    live: "https://agencyfrontend.vercel.app/#",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);
  const containerRef = useRef(null);

  // Auto-slide every 8 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleSlideChange((current + 1) % projects.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [current, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevProject();
      } else if (e.key === "ArrowRight") {
        nextProject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current]);

  // Handle slide change with fade animation
  const handleSlideChange = (newIndex) => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrent(newIndex);
      setFadeIn(true);
    }, 300);
  };

  const nextProject = () => {
    handleSlideChange((current + 1) % projects.length);
  };

  const prevProject = () => {
    handleSlideChange((current - 1 + projects.length) % projects.length);
  };

  const project = projects[current];

  return (
    <section
      id="projects"
      className="w-full min-h-screen py-24 md:py-32 px-10 md:px-14 lg:px-28 xl:px-40 backdrop-blur-3xl"
    >
      <h1 className="text-4xl font-bold mb-14 text-center">
        <span className="text-amber-500 dark:text-sky-300">Projects</span> I've
        Built
      </h1>

      <div
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="w-full p-10 rounded-2xl shadow bg-white/60 dark:bg-gray-800/60 relative overflow-hidden"
      >
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center transition-opacity duration-300 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image */}
          <div className="transform transition-transform duration-500 hover:scale-105">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl w-full object-cover shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl contactformFont font-semibold">
              {project.title}
            </h2>
            <p className="contactformFont font-bold text-lg leading-relaxed">
              {project.description}
            </p>
            <ul className="list-disc list-inside space-y-1">
              {project.features.map((feature, i) => (
                <li className="contactformFont" key={i}>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Skills */}
            <div className="flex flex-wrap items-center text-center mt-6 gap-4">
              {project.skills.map((skill, i) => (
                <p
                  key={i}
                  className="px-3 py-1.5 contactformFont bg-amber-400 dark:bg-sky-300 text-white dark:text-gray-900 border border-gray-500 rounded-lg hover:scale-105 transition-transform duration-200"
                >
                  {skill}
                </p>
              ))}
            </div>

            {/* Live link */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="contactformFont mt-8 w-fit px-6 py-2 text-center bg-amber-500 dark:bg-sky-400 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-200"
            >
              View Live →
            </a>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-10">
          <button
            onClick={prevProject}
            aria-label="Previous project"
            className="px-6 py-2 bg-amber-500 dark:bg-sky-400 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-200 flex items-center gap-2"
          >
            ← Previous
          </button>
          <button
            onClick={nextProject}
            aria-label="Next project"
            className="px-6 py-2 bg-amber-500 dark:bg-sky-400 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-200 flex items-center gap-2"
          >
            Next →
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              aria-label={`Go to project ${index + 1}`}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-amber-500 dark:bg-sky-400 scale-125"
                  : "bg-gray-400 dark:bg-gray-600 hover:scale-110"
              }`}
            ></button>
          ))}
        </div>

        {/* Pause indicator (optional visual feedback) */}
        {isPaused && (
          <div className="absolute top-4 right-4 text-xs text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-700/50 px-3 py-1 rounded-full">
            ⏸ Paused
          </div>
        )}

        {/* Keyboard hint */}
        <div className="text-center mt-4 text-xs contactformFont">
          Use ← → arrow keys to navigate
        </div>
      </div>
    </section>
  );
}
