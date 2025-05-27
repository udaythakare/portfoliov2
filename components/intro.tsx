"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[55rem] text-center sm:mb-0 scroll-mt-[100rem] px-4"
    >
      <div className="flex items-center justify-center mb-8">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/uday.jpeg"
              alt="Uday Thakare - Backend Developer"
              width="250"
              height="250"
              quality="95"
              priority={true}
              className="h-32 w-32 sm:h-36 sm:w-36 rounded-full object-cover border-[0.35rem] border-white shadow-2xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-2 right-2 text-3xl sm:text-4xl bg-white rounded-full p-1 shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Uday Thakare
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">
          Backend Developer
        </h2>
        
        <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-200 max-w-[40rem] mx-auto">
          <span className="font-semibold">4 years</span> of experience building scalable web applications and robust backend solutions.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-8 py-4 flex items-center gap-3 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-800 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Get In Touch
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>

        <a
          className="group bg-white text-gray-700 px-8 py-4 flex items-center gap-3 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-gray-200 shadow-lg hover:shadow-xl dark:bg-white/10 dark:text-white dark:border-white/20 w-full sm:w-auto justify-center"
          href="/CV.docx"
          download
        >
          Download Resume
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition-transform duration-200" />
        </a>

        <div className="flex gap-4 mt-2 sm:mt-0">
          <a
            className="bg-white text-gray-700 hover:text-blue-600 p-4 flex items-center justify-center rounded-full focus:scale-110 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border border-gray-200 shadow-lg hover:shadow-xl dark:bg-white/10 dark:text-white/80 dark:border-white/20 dark:hover:text-blue-400"
            href="https://www.linkedin.com/in/uday-thakare-8ba059368/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <BsLinkedin className="text-xl" />
          </a>

          <a
            className="bg-white text-gray-700 hover:text-gray-900 p-4 flex items-center justify-center rounded-full focus:scale-110 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border border-gray-200 shadow-lg hover:shadow-xl dark:bg-white/10 dark:text-white/80 dark:border-white/20 dark:hover:text-white"
            href="https://github.com/udaythakare"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithubSquare className="text-xl" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}