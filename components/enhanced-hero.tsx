"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Sparkles } from "lucide-react"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Spotlight } from "@/components/ui/spotlight"
import { TypographyH1 } from "@/components/ui/typography"

export function EnhancedHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <BackgroundBeams />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgb(59, 130, 246)" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className={`space-y-6 ${isVisible ? "animate-bounce-in" : "opacity-0"}`}>
            <Badge variant="secondary" className="animate-pulse-glow mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              Available for Opportunities
            </Badge>

            <TypographyH1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-balance leading-tight">
              Hi, I'm <span className="gradient-text">mjshubham21</span>
            </TypographyH1>

            <TextGenerateEffect
              words="Former MERN Stack Developer now building a career in Data Analytics"
              className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="group hover-lift animate-pulse-glow bg-primary hover:bg-primary/90"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group hover-lift glass border-primary/30 hover:border-primary/60 bg-transparent"
              asChild
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
