"use client"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Badge } from "@/components/ui/badge"
import { skills } from "@/src/data/data"
import { motion } from "framer-motion"
import { Spotlight } from "@/components/ui/spotlight"

export function SkillsSection() {
  return (
    <section id="skills" className="py-10 relative">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Tools and technologies I use for data analysis and visualization
          </p>
        </div>
        <BentoGrid className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <BentoGridItem
              key={skill.name}
              title={skill.name}
              description={
                <div className="space-y-3">
                  <Badge variant={skill.level === "good" ? "default" : "secondary"}>
                    {skill.level === "good" ? "Proficient" : "Learning"}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              }
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 items-center justify-center">
                  <motion.div
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill.icon}
                  </motion.div>
                </div>
              }
              className={`group hover:shadow-xl hover:border-primary/50 transition-all duration-300 ${index === 0 || index === 3 ? "lg:col-span-2" : ""
                }`}
            />
          ))}
        </BentoGrid>

      </div>
    </section>
  )
}
