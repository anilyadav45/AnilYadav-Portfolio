"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 dark:bg-white/5 backdrop-blur-xl border-b border-black/10 dark:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="#home"
              className="text-xl font-bold text-[#3B82F6] dark:text-[#60A5FA] tracking-tight"
            >
              Anil
              <span className="ml-1 text-[#0F172A] dark:text-white">
                Yadav
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-3 py-2 rounded-lg text-sm font-medium 
                             transition-all duration-300 
                             text-[#0F172A] dark:text-[#F1F5F9]
                             hover:text-[#3B82F6] dark:hover:text-[#60A5FA]
                             hover:bg-black/5 dark:hover:bg-white/10"
                >
                  {link.name}
                </Link>
              ))}
              <div className="ml-2">
                <ModeToggle />
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <ModeToggle />
            <button
              onClick={toggleMenu}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-lg 
                         bg-white/70 dark:bg-white/5 
                         backdrop-blur-md 
                         border border-black/10 dark:border-white/10
                         text-[#0F172A] dark:text-[#F1F5F9] 
                         hover:text-[#3B82F6] dark:hover:text-[#60A5FA] 
                         transition-all duration-300 shadow-md"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden 
                     bg-white/80 dark:bg-white/5 
                     backdrop-blur-xl 
                     border-t border-black/10 dark:border-white/10
                     shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
        >
          <div className="px-3 pt-3 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 rounded-lg text-base font-medium 
                           text-[#0F172A] dark:text-[#F1F5F9]
                           hover:text-[#3B82F6] dark:hover:text-[#60A5FA]
                           hover:bg-black/5 dark:hover:bg-white/10
                           transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
