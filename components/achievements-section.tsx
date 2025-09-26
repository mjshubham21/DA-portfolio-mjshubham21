"use client"
import { Trophy, Award, Target, Zap } from "lucide-react"
import { motion } from "framer-motion"

const achievements = [
  {
    icon: Trophy,
    title: "10+ Projects Completed",
    description: "Successfully delivered data analytics projects using various tools and technologies.",
    color: "text-yellow-500",
  },
  {
    icon: Award,
    title: "MERN to Analytics Transition",
    description: "Successfully transitioned from full-stack development to data analytics in 2025.",
    color: "text-blue-400",
  },
  {
    icon: Target,
    title: "Multi-Tool Proficiency",
    description: "Expertise across Excel, MySQL, Python, Power BI, and Tableau.",
    color: "text-green-400",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and analytical methodologies.",
    color: "text-purple-400",
  }
]

const cardVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  hover: { scale: 1.05, boxShadow: "0 12px 24px rgba(0,0,0,0.2)" },
}

export function AchievementsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Key Achievements</h2>
          <p className="text-lg text-muted-foreground text-pretty">Milestones in my data analytics journey</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ duration: 0.2 }}
                variants={cardVariants}
                className="flex flex-col items-center justify-center h-[225px] bg-white/90 dark:bg-neutral-900/90 rounded-xl shadow-md px-6 py-7 cursor-pointer"
              >
                <Icon className={`h-10 w-10 mb-4 ${achievement.color} transition-colors duration-300`} />
                <h3 className="font-semibold text-xl mb-2 text-center">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground text-center">{achievement.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
