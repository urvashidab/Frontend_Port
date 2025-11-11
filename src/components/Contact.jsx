import React from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import { FaPhone } from "react-icons/fa6";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen py-24 md:py-32 px-10 md:px-14 lg:px-28 xl:px-40 grid grid-cols-1 md:grid-cols-2 gap-10 backdrop-blur-3xl"
    >
      {/* Left Section */}
      <div className="flex flex-col justify-center gap-10">
        <motion.h1
          className="text-3xl text-amber-600 dark:text-sky-200 md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Let’s Connect
        </motion.h1>
        <p className=" text-2xl leading-relaxed">
          Got a cool project idea? Want to collaborate? Or just say hi? <br />
          Drop me a message — I’d love to hear from you!
        </p>

        {/* email */}

        <div className="flex items-center gap-2 ">
          <a
            href="mailto:urvashi.ucoe@gmail.com"
            className="contactIconStyle text-3xl"
          >
            <MdEmail />
          </a>{" "}
          <a
            href="mailto:urvashi.ucoe@gmail.com"
            className="contactIconStyle underline text-xl"
          >
            urvashi.ucoe@gmail.com
          </a>
        </div>

        {/* phone icons */}

        <div className="flex items-center gap-2 ">
          <span className="contactIconStyle text-3xl">
            <FaPhone />
          </span>
          <a href="tel:+16479650612" className="contactIconStyle text-xl">
            +1 647-965-0612
          </a>
        </div>

        {/* social icons */}

        <div className="flex items-center gap-6 mt-6 text-3xl">
          <a
            href="https://github.com/urvashidab#-ciao-im-urvashi-"
            rel="noopener noreferrer"
            target="_blank"
            className="socialIconStyle "
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.facebook.com/urvashi14"
            rel="noopener noreferrer"
            target="_blank"
            className="socialIconStyle "
            aria-label="Facebook Profile"
          >
            <TiSocialFacebook />
          </a>

          <a
            href="https://x.com/gagz1311461"
            rel="noopener noreferrer"
            target="_blank"
            className="socialIconStyle "
            aria-label="Twitter Profile"
          >
            <TiSocialTwitter />
          </a>
        </div>

        <p className="mt-20 text-sm italic">
          Background photo by{" "}
          <a
            href="https://pixabay.com/illustrations/cat-pet-animal-orange-smiling-9307910/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-amber-600 dark:hover:text-blue-300"
          >
            Richards Drawings
          </a>{" "}
          on Pixabay
        </p>
      </div>

      {/* Right Section - Contact Form */}
      <div className="flex items-center justify-center">
        <form className="w-full max-w-md flex flex-col gap-5 bg-white/10 dark:bg-gray-900/20 backdrop-blur-md p-8 rounded-2xl shadow-lg">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Name</label>
            <input
              type="text"
              required
              placeholder="Your name"
              className="p-3 rounded-md contactformFont bg-white/80 dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="Your email"
              className="p-3 rounded-md contactformFont bg-white/80 dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Message</label>
            <textarea
              rows="4"
              required
              placeholder="Write your message..."
              className="p-3 rounded-md contactformFont bg-white/80 dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          <button type="submit" className="btnStyle text-lg mt-4 px-6 py-3">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
