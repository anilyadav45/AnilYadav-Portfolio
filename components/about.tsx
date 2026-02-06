"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import "../styles/globals.css";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#111827]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#3B82F6] dark:bg-[#60A5FA] mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-full group">

              {/* Animated gradient ring */}
              <div className="absolute inset-0 rounded-full animate-spin-slow bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 blur-md opacity-80"></div>

              {/* Inner border background */}
              <div className="absolute inset-[6px] rounded-full bg-background"></div>

              {/* Image with mirror plate */}
              <div className="perspective-1000">
                <div
                  ref={ref}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    const rotateX = -(y - centerY) / 20;
                    const rotateY = (x - centerX) / 20;

                    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
                  }}
                  className="relative w-64 h-64 rounded-full flex items-center justify-center 
                             transition-transform duration-200 ease-out will-change-transform
                             bg-white/40 dark:bg-white/5 backdrop-blur-xl
                             border border-white/20 dark:border-white/10
                             shadow-[0_20px_60px_rgba(59,130,246,0.25)]"
                >
                  {/* Animated glowing ring */}
                  <div className="absolute inset-0 rounded-full animate-spin bg-gradient-to-tr 
                    from-blue-500 via-cyan-400 to-purple-500 opacity-80"></div>

                  {/* Inner mask */}
                  <div className="absolute inset-[8px] rounded-full bg-background"></div>

                  {/* Image */}
                  <div className="relative z-10 w-[92%] h-[92%] rounded-full overflow-hidden 
                    border-4 border-blue-500/70 dark:border-cyan-400/70 
                    shadow-2xl">
                    <Image
                      src="/profile.jpeg"
                      alt="Portfolio Avatar"
                      fill
                      className="object-cover object-center scale-100"
                      priority
                    />
                  </div>

                  {/* subtle glass reflection */}
                  <div className="pointer-events-none absolute inset-0 rounded-full 
                                  bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60" />
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-2/3"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#3B82F6] dark:text-[#60A5FA]">
              Computer Science Student with a Passion for Building Real Products
            </h3>
            <p className="text-lg mb-6 leading-relaxed">
              I’m a Computer Science student from Nepal, currently studying at JNTUA in Andhra Pradesh, India. I enjoy turning ideas into working products, learning how things work under the hood, and constantly improving my skills through hands-on projects.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { label: "Based in:", value: "India" },
                { label: "Field:", value: "Computer Science" },
                { label: "Focus:", value: "MERN Stack, Java, DSA , Cloud & Data Engineering (Azure)" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded-lg 
                             bg-white/70 dark:bg-white/5 
                             backdrop-blur-md 
                             border border-black/10 dark:border-white/10
                             shadow-md"
                >
                  <span className="font-semibold">{item.label}</span> {item.value}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
