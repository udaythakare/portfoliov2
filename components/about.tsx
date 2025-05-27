"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span> from Datta Meghe College of Engineering, 
        I dove into my passion for backend development. Over the past{" "}
        <span className="font-medium">4 years</span>, I've honed my skills in the{" "}
        <span className="font-medium">MERN stack</span> along with{" "}
        <span className="font-medium">Docker and cloud technologies</span>.{" "}
        <span className="italic">My favorite part of programming</span> is architecting 
        scalable solutions and optimizing system performance. I've had the opportunity 
        to work at <span className="font-medium">AIBI Streets PVT LTD</span> and{" "}
        <span className="font-medium">Datacraftpro PVT LTD</span>, where I've built 
        robust backend systems and led development initiatives.
      </p>
      <p>
        Currently, I'm serving as <span className="font-medium">Lead Engineer</span> at{" "}
        <span className="font-medium">couponstall.com</span>, where I'm responsible for 
        the technical architecture and development strategy.{" "}
        <span className="italic">When I'm not coding</span>, you'll find me watching{" "}
        <span className="font-medium">anime</span> or diving into the latest games. 
        I believe in maintaining a good work-life balance and finding inspiration 
        from creative storytelling and interactive experiences.
      </p>
    </motion.section>
  );
}