"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { Spotlight } from "@/components/ui/spotlight"
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal-card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <Spotlight className="-top-40 right-0 md:right-60 md:-top-20" fill="white" />
      <Spotlight className="top-10 right-full h-[80vh] w-[50vw]" fill="cyan" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">About Me</h2>
            <p className="text-lg text-muted-foreground text-pretty">From Code to Data - my journey into Analytics</p>
          </div>

          <div className="mb-8 flex justify-center items-center">
            <TextRevealCard
              text="I Transform Complex Data Into Actionable Insights"
              revealText="Data Tells Stories, I Help Them Speak"
              // Add custom className to switch backgrounds based on theme
              className="bg-white/80 dark:bg-black/70 border-0 shadow-xl"
            >
              <TextRevealCardTitle className="text-neutral-700 dark:text-white text-lg md:text-xl font-semibold">
                Hover to reveal my mission
              </TextRevealCardTitle>
              <TextRevealCardDescription className="text-neutral-500 dark:text-neutral-300">
                Discover what drives my passion for data analytics
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>

          <Card className="mb-8 backdrop-blur-xl bg-white/60 dark:bg-black/10 border-white/10">
            <CardContent className="p-8">
              <div className="space-y-6 text-lg leading-relaxed">
                <p>👋 Hi, I'm Shubham Pawar — a former MERN stack developer now building a career in Data Analytics.</p>
                <p>
                  🔄 In late 2024, I transitioned to analytics to unite my love for tech with numbers, logic, and decision-making.
                </p>
                <p>
                  ✅ <strong>Proficient in:</strong> Microsoft Excel (dashboards, pivots), MySQL (Joins, Aggregates),
                  GCP BigQuery, Python (+NumPy, Pandas, Matplotlib), Power BI, Tableau.
                </p>
                <p>
                  📌 <strong>Currently learning:</strong> Machine Learning (theory, basics), sharpening analytical
                  thinking.
                </p>
                <p>
                  💼 Completed 10+ hands-on projects (Excel, MySQL, Python, PowerBI, Tableau) — all on GitHub and open
                  to data analytics opportunities.
                </p>
                <p>📬 Connect for hiring, mentoring, or collaboration!</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild className="group">
                  <Link href="/journey">
                    <ArrowRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    View My Experience
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/mjshubham21" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Portfolio
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://linkedin.com/in/mjshubham21" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
