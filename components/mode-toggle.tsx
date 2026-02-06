"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative rounded-full 
                 bg-white/70 dark:bg-white/5 
                 backdrop-blur-md 
                 border border-black/10 dark:border-white/10
                 shadow-[0_6px_20px_rgba(0,0,0,0.15)] 
                 hover:shadow-[0_10px_30px_rgba(59,130,246,0.35)] 
                 transition-all duration-300 
                 hover:scale-105"
    >
      {/* Glow ring */}
      <span className="pointer-events-none absolute inset-0 rounded-full 
                       bg-gradient-to-tr from-blue-500/40 via-cyan-400/30 to-purple-500/40 
                       opacity-0 hover:opacity-100 transition-opacity duration-300" />

      <Sun className="relative z-10 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="absolute z-10 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-500" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
