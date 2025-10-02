"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences, educations, certificates } from "@/src/data/data"
import { Briefcase, GraduationCap, BookOpenCheck } from "lucide-react"

export function Timeline() {
  const timelineItems = [
    ...experiences.map(exp => ({
      type: "experience" as const,
      data: exp,
      date: exp.duration,
    })),
    ...educations.map(edu => ({
      type: "education" as const,
      data: edu,
      date: edu.years,
    })),
    ...certificates.map(cert => ({
      type: "certificate" as const,
      data: cert,
      date: cert.date,
    }))
  ].sort((a, b) => {
    // Sort by year (descending - most recent first)
    const yearA = Number.parseInt(a.date.split("-")[1] || a.date.split("-")[0]);
    const yearB = Number.parseInt(b.date.split("-")[1] || b.date.split("-")[0]);
    return yearB - yearA;
  });

  const experiencesList = timelineItems.filter(i => i.type === "experience");
  const educationList = timelineItems.filter(i => i.type === "education");
  const certificateList = timelineItems.filter(i => i.type === "certificate");

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6 ml-26">Experience</h2>
          <div className="space-y-8">
            {experiencesList.map((item, index) => renderTimelineItem(item, index))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 ml-26">Education</h2>
          <div className="space-y-8">
            {educationList.map((item, index) => renderTimelineItem(item, index))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 ml-26">Certifications</h2>
          <div className="space-y-8">
            {certificateList.map((item, index) => renderTimelineItem(item, index))}
          </div>
        </section>
      </div>
    </div>
  );
}

function renderTimelineItem(item: any, index: number) {
  return (
    <div key={index} className="relative flex items-start space-x-8">
      <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
        {item.type === "experience" ? (
          <Briefcase className="h-8 w-8 text-primary-foreground" />
        ) : item.type === "education" ? (
          <GraduationCap className="h-8 w-8 text-primary-foreground" />
        ) : (
          <BookOpenCheck className="h-8 w-8 text-primary-foreground" />
        )}
      </div>

      <Card className="flex-1 hover:shadow-lg transition-all duration-200">
        <CardContent className="p-6">
          {item.type === "experience" ? (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold">{item.data.position}</h3>
                <Badge variant="secondary">{item.data.duration}</Badge>
              </div>
              <h4 className="text-lg text-primary font-medium mb-4">{item.data.company}</h4>
              <ul className="space-y-2">
                {item.data.responsibilities.map((resp: string, idx: number) => (
                  <li key={idx} className="text-muted-foreground flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ) : item.type === "education" ? (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold">{item.data.degree}</h3>
                <Badge variant="secondary">{item.data.years}</Badge>
              </div>
              <h4 className="text-lg text-primary font-medium mb-2">{item.data.institution}</h4>
              <p className="text-muted-foreground">
                <strong>Grade:</strong> {item.data.percentage}
              </p>
            </div>
          ) : (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold">{item.data.title}</h3>
                <Badge variant="secondary">{item.data.date}</Badge>
              </div>
              <h4 className="text-lg text-primary font-medium mb-2">{item.data.issuer}</h4>
              <a
                href={item.data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                View Certificate
              </a>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
