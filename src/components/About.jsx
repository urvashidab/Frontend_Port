import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full min-h-screen flex flex-col gap-6 text-2xl py-24 md:py-32 px-10 md:px-14 lg:px-28 xl:px-40">
      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <div className="text-4xl md:text-5xl font-bold mb-4">
          <Typewriter
            options={{
              strings: ["Ciao 👋 I'm Urvashi"],
              autoStart: true,
              loop: false,
              delay: 80,
              deleteSpeed: Infinity, // cleaner than 9999999
              cursor: "", // to remove cursor
            }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-semibold"
        >
          Full Stack Developer building seamless web experiences based in
          Canada.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="inline-block mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 dark:from-gray-800 dark:to-gray-800 text-white/90 font-bold shadow-md hover:scale-105 hover:shadow-lg active:scale-95 transition-all"
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
};

export default About;
