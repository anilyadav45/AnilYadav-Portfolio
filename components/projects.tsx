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
    title: "LivoraStays – Travel Stay Booking Web App",
    description:
      "A full-stack Airbnb-inspired web application where users can create, edit, view, and delete property listings. Includes authentication, server-side validation, and a complete CRUD flow. Payments and booking features are planned next.",
    image:
      "https://images.unsplash.com/photo-1657256031855-68029292ff34?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8fDB8fHww",
    techStack: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
    githubUrl: "https://github.com/anilyadav45/LivoraStays",
    liveUrl: "https://livorastays.onrender.com/",
    status: "Completed",
  },
  {
    id: 2,
    title: "BlogApp – Full CRUD Blog Platform",
    description:
      "A fully functional blog web app where users can create posts, edit content, delete blogs, add comments, and like posts. Built to understand how frontend and backend work together with complete CRUD operations.",
    image:
      "https://www.digitaldarts.com.au/wp-content/uploads/2024/02/Related-Blog-Posts-Shopify-SEO.webp",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/anilyadav45/BLOG-WEB",
    liveUrl: "#",
    status: "Completed",
  },
  {
    id: 3,
    title: "AgriConnect",
    description:
      "A smart agriculture platform to support farmers with disease detection, real-time market prices, weather updates, crop insights, and a community space to reduce middlemen dependency.",
    image:
      "https://assets.tractorjunction.com/tractor-junction/blog/2024/06/ai-in-agriculture-banner.jpg",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn/UI", "Vercel"],
    githubUrl: "https://github.com/anilyadav45/AgriConnect",
    liveUrl: "https://farmybuddy-agriconnect.vercel.app",
    status: "In Progress",
  },
  {
    id: 4,
    title: "Mini WhatsApp Chats",
    description:
      "A mini chat application that takes user input (name and message) and displays chats with edit and delete functionality. Built to understand CRUD operations and frontend-backend integration.",
    image:
      "https://imgs.search.brave.com/8jBNhrTLq0OibAGLMFxQKDS7ljEq8s7uYUDgTTGUOpU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbGZz/aWdodC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMTEv/YmxvZy1ob3ctdG8t/aW50ZWdyYXRlLXdo/YXRzYXBwLWdlbmVy/YWwtMTAyNHg1Mzgu/anBn",
    techStack: ["EJS", "Node.js", "MongoDB", "Express", "CSS"],
    githubUrl: "https://github.com/anilyadav45/Mini-Whatsapp",
    liveUrl: "#",
    status: "Completed",
  },
  {
    id: 5,
    title: "Simple Resume Template Maker",
    description:
      "A backend-focused EJS project that takes user input and generates a structured resume layout. Built as my first backend project to understand templating and server-side rendering.",
    image:
      "https://d2xe0iugdha6pz.cloudfront.net/editor-uploads/2023/01/11/7_builder.png",
    techStack: ["EJS", "Express", "Node.js"],
    githubUrl: "https://github.com/anilyadav45/RESUME-TEMPLATES-",
    liveUrl: "#",
    status: "In Progress",
  },
  {
    id: 6,
    title: "Tic Tac Toe Game",
    description:
      "A classic Tic Tac Toe game built using HTML, CSS, and JavaScript to practice core frontend and game logic concepts.",
    image:
      "https://t4.ftcdn.net/jpg/14/57/47/15/360_F_1457471559_gN4GRQWeMzaQRhKX0TPK6Gq98PRZxscQ.webp",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/anilyadav45/TIC-TAC-TOE-JS-PROJECT",
    liveUrl: "https://tic-tac-toe-js-project-pi.vercel.app/",
    status: "Completed",
  },
  {
    id: 7,
    title: "Spotify Clone – Frontend UI",
    description:
      "A responsive Spotify-inspired frontend clone built to practice modern UI layout, component structuring, and styling. Focused on recreating the core look and feel of Spotify’s interface.",
    image:
      "https://photos5.appleinsider.com/gallery/55020-111635-53480-107386-Spotify-xl-xl.jpg",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/anilyadav45/spotify-frontend", // change if repo name is different
    liveUrl: "#", // add live link if deployed
    status: "Completed",
  }

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
              className="relative rounded-2xl overflow-hidden 
               bg-white/70 dark:bg-white/5 
               backdrop-blur-xl 
               border border-black/10 dark:border-white/10
               shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
               hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)] 
               transition-all duration-300"
              whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.3 } }}
            >
              {/* ✅ Status Badge */}
              <span
                className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full z-10 backdrop-blur-md
        ${project.status === "Completed"
                    ? "bg-green-500/90 text-white shadow-md"
                    : "bg-red-500/90 text-white shadow-md"
                  }`}
              >
                {project.status}
              </span>

              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* subtle glass reflection */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60" />
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
                      className="px-3 py-1 rounded-full text-sm 
                       bg-white/60 dark:bg-white/10 
                       backdrop-blur-md 
                       border border-black/10 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 backdrop-blur-md"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>

                  <Button
                    size="sm"
                    className="flex items-center gap-2 
                     bg-[#3B82F6] hover:bg-[#2563EB] 
                     dark:bg-[#60A5FA] dark:hover:bg-[#3B82F6]
                     shadow-md hover:shadow-lg"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
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
