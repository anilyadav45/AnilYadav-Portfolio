"use client";

import React, { useRef, ReactElement } from "react";
import { motion, useInView } from "framer-motion";
import {
  Atom,
  ServerCog,
  Database,
  Coffee,
  Code,
  GitBranch,
  Paintbrush,
  FileText,
  TerminalSquare,
  Laptop2,
  Boxes,
  FileCode,
  Cloud,
  Globe,
  Github,
} from "lucide-react";

interface Skill {
  name: string;
  icon: ReactElement;
  level: number;
}

const categorizedSkills: Record<string, Skill[]> = {
  Development: [
    { name: "HTML", icon: <Code className="w-10 h-10" />, level: 85 },
    { name: "CSS", icon: <Paintbrush className="w-10 h-10" />, level: 80 },
    { name: "JavaScript", icon: <Code className="w-10 h-10" />, level: 80 },
    { name: "React", icon: <Atom className="w-10 h-10" />, level: 65 },
    { name: "Next.js", icon: <Globe className="w-10 h-10" />, level: 60 },
    { name: "Node.js", icon: <ServerCog className="w-10 h-10" />, level: 80 },
    { name: "Express.js", icon: <TerminalSquare className="w-10 h-10" />, level: 80 },
    { name: "TypeScript", icon: <FileCode className="w-10 h-10" />, level: 65 },
    { name: "MongoDB", icon: <Database className="w-10 h-10" />, level: 75 },
    { name: "Java", icon: <Coffee className="w-10 h-10" />, level: 80 },
  ],

  "Tools & Platforms": [
    { name: "Git", icon: <GitBranch className="w-10 h-10" />, level: 80 },
    { name: "GitHub", icon: <Github className="w-10 h-10" />, level: 80 },
    { name: "Postman", icon: <Boxes className="w-10 h-10" />, level: 65 },
    { name: "Docker (Basics)", icon: <Boxes className="w-10 h-10" />, level: 40 },
    { name: "REST APIs", icon: <Globe className="w-10 h-10" />, level: 75 },
    { name: "SQL (Basics)", icon: <Database className="w-10 h-10" />, level: 50 },
  ],

  Systems: [
    { name: "Linux", icon: <TerminalSquare className="w-10 h-10" />, level: 75 },
    { name: "Windows", icon: <Laptop2 className="w-10 h-10" />, level: 85 },
    { name: "Cloud (Azure - Basics)", icon: <Cloud className="w-10 h-10" />, level: 40 },
  ],
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#111827]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-[#3B82F6] dark:bg-[#60A5FA] mx-auto mb-6"></div>
        </motion.div>

        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <motion.div
            key={category}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold text-center text-[#3B82F6] dark:text-[#60A5FA] mb-6">
              {category}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="rounded-2xl p-6 text-center 
                             bg-white/70 dark:bg-white/5 
                             backdrop-blur-xl 
                             border border-black/10 dark:border-white/10
                             shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
                             hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] 
                             transition-all duration-300"
                >
                  <div className="flex justify-center items-center mb-4 text-[#3B82F6] dark:text-[#60A5FA]">
                    {skill.icon}
                  </div>

                  <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>

                  <div className="w-full bg-black/10 dark:bg-white/10 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    />
                  </div>

                  <p className="mt-2 text-sm text-[#475569] dark:text-[#CBD5E1]">
                    {skill.level}%
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
