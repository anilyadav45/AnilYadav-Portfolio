"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  status: "Completed" | "In Progress";
}

const projects: Project[] = [
  {
    id: 1,
    title: "AgriConnect",
    description:
      "A platform built to empower farmers with Diseases Detection ,real-time market rates, weather updates, crop knowledge, and a community space – aiming to reduce middlemen losses and support smart agriculture.",
    image:
      "https://assets.tractorjunction.com/tractor-junction/blog/2024/06/ai-in-agriculture-banner.jpg",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn/UI", "Vercel"],
    githubUrl: "https://github.com/anilyadav45/AgriConnect",
    liveUrl: "https://farmybuddy-agriconnect.vercel.app",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Mini WhatsApp Chats",
    description:
      "A mini WhatsApp chat app is a simple chat app that takes user input(name and message) and displays in chat sections with feature of delete and edit which is totally functinal and it was for learnig purpose how frontend and backend works together using (CRUD) operations",
    image:
      "https://imgs.search.brave.com/8jBNhrTLq0OibAGLMFxQKDS7ljEq8s7uYUDgTTGUOpU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbGZz/aWdodC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMTEv/YmxvZy1ob3ctdG8t/aW50ZWdyYXRlLXdo/YXRzYXBwLWdlbmVy/YWwtMTAyNHg1Mzgu/anBn",
    techStack: ["Ejs", "Node.js", "MongoDB", "Express",'Css'],
    githubUrl: "https://github.com/anilyadav45/Mini-Whatsapp",
    liveUrl: "#",
    status: "Completed",
  },
  {
    id: 3,
    title: "Crickment - Mini Social App for Cricket Fans",
    description:
      "A lightweight social platform where users can post opinions, debate about their favorite players, and share cricket snaps. Built with full CRUD operations to manage posts, edit content, and delete discussions easily.",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202504/virat-kohli-205953494-16x9_0.jpg?VersionId=ENSiyeUvX0syTHd2vfCcbWNlqCUL6RvV&size=690:388",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/anilyadav45/BLOG-WEB",
    liveUrl: "#",
    status: "Completed",
  },
  {
    id: 4,
    title: "Simple Resume Template Maker",
    description:
      "An Ejs project which takes user information input and generate or make same type Resume.It was my first project to learn backend",
    image:
      "https://d2xe0iugdha6pz.cloudfront.net/editor-uploads/2023/01/11/7_builder.png",
    techStack: ["Ejs", "Express", "Nodejs"],
    githubUrl: "https://github.com/anilyadav45/RESUME-TEMPLATES-",
    liveUrl: "#",
    status: "In Progress",
  },
  {
    id: 5,
    title: "LivoraStays – Travel Stay Booking Web App",
    description:
      "A full-stack Airbnb-inspired application that allows users to create, edit, view, and delete travel property listings. Includes client-side and server-side validation for robust data handling.",
    image:
      "https://images.unsplash.com/photo-1657256031855-68029292ff34?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8fDB8fHww",
    techStack: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
    githubUrl: "https://github.com/anilyadav45/LivoraStays",
    liveUrl: "https://livorastays.onrender.com/",
    status: "Completed",
  },
  {
    id: 6,
    title: "Tic Tac Toe Game",
    description:
      "A classic Tic Tac Toe Game built with Html,Css and JavaScript for learning purpose",
    image:
      "https://t4.ftcdn.net/jpg/14/57/47/15/360_F_1457471559_gN4GRQWeMzaQRhKX0TPK6Gq98PRZxscQ.webp",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/anilyadav45/TIC-TAC-TOE-JS-PROJECT",
    liveUrl: "https://tic-tac-toe-js-project-pi.vercel.app/",
    status: "Completed",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-[#F4F7FA] dark:bg-[#0F172A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-[#3B82F6] dark:bg-[#60A5FA] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-[#475569] dark:text-[#CBD5E1]">
            Here are some of the projects I&apos;ve worked on.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="relative bg-white dark:bg-[#1E293B] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {/* ✅ Status Badge */}
              <span
                className={`absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded-full z-10 ${
                  project.status === "Completed"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {project.status}
              </span>

              <div className="relative h-48 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-[#475569] dark:text-[#CBD5E1] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#F1F5F9] dark:bg-[#334155] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] dark:bg-[#60A5FA] dark:hover:bg-[#3B82F6]"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
