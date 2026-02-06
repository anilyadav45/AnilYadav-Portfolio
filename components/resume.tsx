"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Award, Calendar } from "lucide-react";

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="resume" className="py-20 bg-[#F4F7FA] dark:bg-[#0F172A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <div className="w-20 h-1 bg-[#3B82F6] dark:bg-[#60A5FA] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-[#475569] dark:text-[#CBD5E1]">
            My educational background and achievements.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-8 w-8 text-[#3B82F6] dark:text-[#60A5FA]" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-8">
              <div
                className="rounded-2xl p-6 
                           bg-white/70 dark:bg-white/5 
                           backdrop-blur-xl 
                           border border-black/10 dark:border-white/10
                           shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
                           hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] 
                           transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-[#3B82F6] dark:text-[#60A5FA]" />
                  <span className="text-sm text-[#475569] dark:text-[#CBD5E1]">
                    2023 - Present
                  </span>
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Bachelor of Computer Science Engineering
                </h4>
                <p className="text-[#475569] dark:text-[#CBD5E1] mb-2">
                  University of JNTUA , Andhrapradesh
                </p>
                <p className="text-sm">
                  Currently I am focusing on software development, algorithms,
                  and data structures.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-8 w-8 text-[#3B82F6] dark:text-[#60A5FA]" />
              <h3 className="text-2xl font-bold">Achievements</h3>
            </div>

            <div className="space-y-8">
              <div
                className="rounded-2xl p-6 
                           bg-white/70 dark:bg-white/5 
                           backdrop-blur-xl 
                           border border-black/10 dark:border-white/10
                           shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
                           hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] 
                           transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2">
                  Started Contributing on GitHub
                </h4>
                <p className="text-[#475569] dark:text-[#CBD5E1] mb-2">2024</p>
                <p className="text-sm">
                  Began contributing to personal and collaborative projects on
                  GitHub with clean, readable code and well-structured commits.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <a href="/resume.pdf" download>
            <Button
              className="px-6 py-3 rounded-xl text-lg font-medium flex items-center gap-2 
                         bg-gradient-to-r from-blue-500 to-cyan-500 
                         hover:from-blue-600 hover:to-cyan-600 
                         text-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
