"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { skills as importedSkills } from "@/src/data/data";

// Import logos from src/assets
import pythonLogo from "../src/assets/python.webp";
import excelLogo from "../src/assets/excel-logo.png";
import mysqlLogo from "../src/assets/mysql.jpg";
import powerBILogo from "../src/assets/powerbi-logo.jpg";
import tableauLogo from "../src/assets/tableau-logo.webp";
import jupyterLogo from "../src/assets/jupyter.jpg";
import pandasLogo from "../src/assets/pandas.webp";
import numpyLogo from "../src/assets/numpy.png";
import matplotlibLogo from "../src/assets/matplotlib.png";
import githubLogo from "../src/assets/github.jpeg";
import { StaticImageData } from "next/image";

// Map skill name => imported logo image
// Define logoMap with string index signature
const logoMap: Record<string, StaticImageData> = {
  Python: pythonLogo,
  "Microsoft Excel": excelLogo,
  MySQL: mysqlLogo,
  "Power BI": powerBILogo,
  Tableau: tableauLogo,
  "Jupyter Notebook": jupyterLogo,
  Pandas: pandasLogo,
  NumPy: numpyLogo,
  Matplotlib: matplotlibLogo,
  GitHub: githubLogo,
};

// Merge imported skills with logo map (use .src for <img> tag)
const skills = importedSkills.map((skill) => ({
  ...skill,
  icon: logoMap[skill.name] ? logoMap[skill.name].src : skill.icon,
}));

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

        <BentoGrid className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            // Determine if current grid item is double width
            const isDoubleWidth = index === 0 || index === 3;

            return (
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
                  <div
                    className={`flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 items-center justify-center overflow-hidden`}
                  >
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        className="object-cover w-full h-full"
                        draggable={false}
                        loading="lazy"
                      />
                    </motion.div>
                  </div>
                }
                
                className={`group hover:shadow-xl hover:border-primary/50 transition-all duration-300 ${isDoubleWidth ? "md:col-span-2" : ""}`}
              />
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
