"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/src/data/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export function EnhancedProjects() {
  return (
    <section id="projects" className="py-5 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Data analytics projects showcasing my skills and expertise
          </p>
        </div>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto w-full">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex w-full"
            >
              <CardContainer className="inter-var w-full h-[400px]">
                <CardBody
                  className="bg-gray-50 relative group/card dark:hover:shadow-lg dark:hover:shadow-emerald-500/[0.10] dark:bg-neutral-900 dark:border-white/[0.07]
                  border-black/[0.07] w-full rounded-2xl p-5 border flex flex-col justify-between min-h-[500px]" // fixed card height
                >
                  <div>
                    <CardItem
                      translateZ="50"
                      className="text-lg font-bold text-neutral-700 dark:text-white"
                    >
                      {project.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                      style={{ minHeight: "60px" }} // fixed description height for consistency
                    >
                      {project.description}
                    </CardItem>
                  </div>

                  <CardItem
                    translateZ="100"
                    className="w-full mt-2"
                    style={{ minHeight: "180px", position: "relative" }} // fixed image container height
                  >
                    <div className="relative rounded-lg aspect-[16/9] h-44 overflow-hidden mx-auto">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="mt-2 flex flex-row flex-wrap justify-center items-center gap-2 px-1 py-2"
                    style={{ minHeight: "48px" }}
                  >
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs px-1 py-1 whitespace-nowrap"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </CardItem>

                  <div
                    className="flex flex-wrap justify-start gap-3 items-center mt-6"
                    style={{ minHeight: "48px" }} // fixed buttons container height
                  >
                    {project.liveLink && project.liveLink.trim() !== "" && (
                      <CardItem
                        translateZ={20}
                        as={Button}
                        className="px-4 py-2 rounded-xl text-xs font-normal bg-black text-white dark:bg-white dark:text-black border border-neutral-700 dark:border-neutral-400 hover:opacity-90 transition-all"
                        asChild
                      >
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Live Demo
                        </a>
                      </CardItem>
                    )}
                    <CardItem
                      translateZ={20}
                      as={Button}
                      variant="outline"
                      className="px-4 py-2 rounded-xl border border-black dark:border-white dark:text-white text-black text-xs font-bold"
                      asChild
                    >
                      <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </a>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
