"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react"
import { motion } from "framer-motion"

// Import logos from src/assets
import pythonLogo from "../src/assets/python-logo.png"
import excelLogo from "../src/assets/excel-logo2.png"
import mysqlLogo from "../src/assets/mysql-logo.png"
import powerBILogo from "../src/assets/powerbi-logo.png"
import tableauLogo from "../src/assets/tableau-logo.png"
import pandasLogo from "../src/assets/pandas-logo.png"
import numpyLogo from "../src/assets/numpy-logo.png"
import matplotlibLogo from "../src/assets/matplotlib-logo.png"
import Image from "next/image"
import { DownloadResumeButton } from "./resume-btn"

const techIcons = [
  { name: "Python", icon: pythonLogo, delay: 0, color: "text-yellow-400" },
  { name: "Excel", icon: excelLogo, delay: 0.1, color: "text-green-400" },
  { name: "MySQL", icon: mysqlLogo, delay: 0.2, color: "text-blue-400" },
  { name: "Power BI", icon: powerBILogo, delay: 0.3, color: "text-orange-400" },
  { name: "Tableau", icon: tableauLogo, delay: 0.4, color: "text-purple-400" },
  { name: "Pandas", icon: pandasLogo, delay: 0.5, color: "text-pink-400" },
  { name: "NumPy", icon: numpyLogo, delay: 0.6, color: "text-cyan-400" },
  { name: "Matplotlib", icon: matplotlibLogo, delay: 1.4, color: "text-red-400" },
]

// const IconCard = ({ tech }: { tech: any }) => (
//   <motion.div
//     className="relative group cursor-pointer"
//     initial={{ opacity: 0, scale: 0 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{
//       delay: tech.delay,
//       duration: 0.2,
//       ease: "easeOut",
//     }}
//     whileHover={{ scale: 1.25 }}
//     title={tech.name}
//   >
//     {/* <img
//       src={tech.icon}
//       alt={tech.name}
//       className="w-10 h-10 sm:w-16 sm:h-16 object-contain relative z-10 filter hover:drop-shadow-lg transition-all duration-300"
//     /> */}
//     <Image
//       src={tech.icon}
//       alt={tech.name}
//       width={100}
//       height={100}
//       className="w-10 h-10 sm:w-16 sm:h-16 object-contain relative z-10 filter hover:drop-shadow-lg transition-all duration-300"
//     />
//     <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//     <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//       <Badge
//         variant="secondary"
//         className="text-xs whitespace-nowrap bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
//       >
//         {tech.name}
//       </Badge>
//     </div>
//   </motion.div>
// )
const IconCard = ({ tech }: { tech: any }) => (
  <motion.div
    className="relative group cursor-pointer"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      delay: tech.delay,
      duration: 0.2,
      ease: "easeOut",
    }}
    whileHover={{ scale: 1.25 }}
    title={tech.name}
  >
    {/* Round background */}
    <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center bg-white/80 dark:bg-white-100/50 shadow-lg ring-2 ring-blue-400 ring-inset transition-all duration-300">
      <Image
        src={tech.icon}
        alt={tech.name}
        width={56}
        height={56}
        className="w-10 h-10 sm:w-16 sm:h-16 object-contain"
      />
    </div>
    <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <Badge
        variant="secondary"
        className="text-xs whitespace-nowrap bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
      >
        {tech.name}
      </Badge>
    </div>
  </motion.div>
)

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let ticking = false
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY })
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="min-h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden pt-10 sm:pt-8 px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-50/30 to-purple-50/20 dark:from-background dark:via-blue-950/20 dark:to-purple-950/10"></div>
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 50%)`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.1 }}
      />

      <div className="w-full flex flex-col items-start px-4 z-20 sm:flex-row sm:items-center">
        <Badge
          variant="secondary"
          className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-800 mt-4 sm:mt-0 sm:ml-2"
        >
          <Sparkles className="h-3 w-3 mr-1" />
          Available for Opportunities
        </Badge>
      </div>

      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-balance leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Shubham Pawar
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Former{" "}
                <span className="text-green-600 dark:text-green-400 font-semibold">
                  MERN Stack Developer
                </span>{" "}
                now building a career in{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  Data Analytics
                </span>
              </p>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Transitioning from web development to data analytics, I combine my
              technical background with analytical thinking to extract
              meaningful insights from data. Proficient in Python, Excel, MySQL,
              Power BI, and Tableau.
            </p>
            <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-6">
              <Button
                onClick={scrollToProjects}
                size="sm"
                className="w-40 sm:w-auto px-3 py-2 text-sm sm:text-lg  bg-blue-600 hover:bg-blue-700 text-white"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <DownloadResumeButton />
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-full h-52 sm:h-72 md:h-80 lg:h-96 flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
              <div className="absolute inset-4 bg-gradient-to-l from-blue-400/10 via-transparent to-purple-400/10 rounded-full blur-2xl"></div>
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <pattern
                      id="grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  <circle
                    cx="100"
                    cy="100"
                    r="30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <circle
                    cx="300"
                    cy="150"
                    r="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.3"
                  />
                  <circle
                    cx="200"
                    cy="300"
                    r="25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.4"
                  />
                  <path
                    d="M50,200 Q200,100 350,250"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.3"
                  />
                  <path
                    d="M100,50 Q250,200 400,150"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.2"
                  />
                </svg>
              </div>

              {/* Large screens grid */}
              <div className="relative w-full hidden lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-6 lg:p-8">
                {techIcons.map((tech) => (
                  <IconCard key={tech.name} tech={tech} />
                ))}
              </div>

              {/* Small screens rows with last row centered */}
              <div className="relative w-full lg:hidden">
                <div className="flex justify-center gap-4 mb-2">
                  {techIcons.slice(0, 3).map((tech) => (
                    <IconCard tech={tech} key={tech.name} />
                  ))}
                </div>
                <div className="flex justify-center gap-4 mb-2">
                  {techIcons.slice(3, 6).map((tech) => (
                    <IconCard tech={tech} key={tech.name} />
                  ))}
                </div>
                <div className="flex justify-center gap-4">
                  {techIcons.slice(6).map((tech) => (
                    <IconCard tech={tech} key={tech.name} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
