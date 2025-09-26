"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Home, User, Code, Award, Mail } from "lucide-react"

const navItems = [
  { name: "Home", link: "#hero", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "#about", icon: <User className="h-4 w-4" /> },
  { name: "Skills", link: "#skills", icon: <Code className="h-4 w-4" /> },
  { name: "Projects", link: "#projects", icon: <Award className="h-4 w-4" /> },
  { name: "Contact", link: "#contact", icon: <Mail className="h-4 w-4" /> },
]

export const FloatingNavbar = ({ className }: { className?: string }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (link: string) => {
    const element = document.querySelector(link)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-border rounded-full bg-background/80 backdrop-blur-md shadow-lg z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className,
        )}
      >
        {navItems.map((navItem, idx) => (
          <button
            key={`link=${idx}`}
            onClick={() => scrollToSection(navItem.link)}
            className={cn(
              "relative text-foreground items-center flex space-x-1 hover:text-primary transition-colors duration-200",
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </button>
        ))}
        <button
          onClick={() => scrollToSection("#contact")}
          className="border text-sm font-medium relative border-primary/30 text-primary px-4 py-2 rounded-full hover:bg-primary/10 transition-colors"
        >
          <span>Contact</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-primary to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

// Keep original export for compatibility
export const FloatingNav = FloatingNavbar
