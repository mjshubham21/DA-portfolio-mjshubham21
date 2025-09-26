"use client"

import { FlipWords } from "@/components/ui/text-flip"

export function SkillsFlipSection() {
  const skills = [
    "Python",
    "Excel",
    "MySQL",
    "Power BI",
    "Tableau",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Jupyter",
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-blue-50/30 dark:to-blue-950/20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center text-3xl sm:text-4xl font-normal text-neutral-600 dark:text-neutral-400 gap-2 sm:gap-0">
          <span>I specialize in</span>
          <div>
            <FlipWords words={skills} className="text-blue-600 dark:text-blue-400 font-bold" />
          </div>
          <span>for Data Analytics</span>
        </div>
      </div>
    </section>
  )
}
