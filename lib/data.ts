import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "AIBI STREETS PVT LTD",
    location: "Airoli, Navi Mumbai",
    description:
      "Working as a full-stack developer at AIBI STREETS PVT LTD, a startup focused on modern solutions",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Software Engineer",
    location: "Remote",
    description:
      "Worked as a software engineer, debugging problems and developing solutions for clients",
    icon: React.createElement(CgWorkAlt),
    date: "2024-2025",
  },
  {
    title: "Platform Developer",
    location: "Airoli, Navi Mumbai",
    description:
      "Working as a platform developer, developing couponstall.com",
    icon: React.createElement(FaReact),
    date: "2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CouponStall",
    description:
      "Working as a lead engineer at CouponStall, a coupon website.",
    tags: ["Next.js", "Supabase", "Tailwind"],
    imageUrl: "/coupnstall.png",
  },
  {
    title: "ScrollConnect",
    description:
      "Platform for college students where they can connect with each other and explore college events.",
    tags: ["Next.js", "Tailwind", "Supabase"],
    imageUrl: "/scrollconnect.png",
  },
  {
    title: "topsqill.com",
    description:
      "Focus on providing solutions to industrial giants to manage their data effectively.",
    tags: ["React.js", "Tailwind", "Google Cloud Platform", "Node.js"],
    imageUrl: "/topsqill.png",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
