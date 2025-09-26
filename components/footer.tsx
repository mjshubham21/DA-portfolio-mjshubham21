"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import Link from "next/link"
import { DownloadResumeButton } from "./resume-btn"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold gradient-text">
              mjshubham21
            </Link>
            <p className="text-muted-foreground text-pretty">
              Data Analytics enthusiast transforming insights into impact.
            </p>
            <Badge variant="secondary" className="animate-pulse-glow">
              <Heart className="h-3 w-3 mr-1 fill-red-500 text-red-500" />
              Available for hire
            </Badge>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Me
              </Link>
              <Link href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/journey" className="block text-muted-foreground hover:text-primary transition-colors">
                My Journey
              </Link>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="font-semibold">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Python</Badge>
              <Badge variant="outline">Excel</Badge>
              <Badge variant="outline">MySQL</Badge>
              <Badge variant="outline">Power BI</Badge>
              <Badge variant="outline">Tableau</Badge>
              <Badge variant="outline">React</Badge>
            </div>
          </div>
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/mjshubham21" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/mjshubham21" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:mjshubhampawar21@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          {/* Download Resume Button */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resume</h3>
            <DownloadResumeButton />
          </div>

        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Shubham R Pawar. Built with Next.js, Tailwind CSS & Aceternity UI.</p>
          <Button variant="ghost" size="sm" onClick={scrollToTop} className="group hover-lift mt-4 sm:mt-0">
            Back to top
            <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
