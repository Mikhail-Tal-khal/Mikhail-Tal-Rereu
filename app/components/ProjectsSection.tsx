"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Smartphone,
  Paintbrush,
  Star,
  Calendar,
  User,
} from "lucide-react";

const techIcons = {
  Python: "devicon-python-plain colored",
  OpenCV: "devicon-opencv-plain colored",
  TensorFlow: "devicon-tensorflow-plain colored",
  Flutter: "devicon-flutter-plain colored",
  Dart: "devicon-dart-plain colored",
  Firebase: "devicon-firebase-plain colored",
  "Next.js": "devicon-nextjs-plain colored",
  React: "devicon-react-plain colored",
  TailwindCSS: "devicon-tailwindcss-plain colored",
} as const;

const projects = [
  {
    title: "AI Vision Assistant",
    description: "Real-time object detection system with 95% accuracy using deep learning models",
    tech: ["Python", "OpenCV", "TensorFlow", "Flutter"],
    link: "https://github.com/Mikhail-Tal-khal",
    type: "AI Project",
    date: "2024-03-15",
    isFeatured: true,
    role: "Lead Developer",
    status: "Completed",
  },
  {
    title: "Cross-Platform Mobile App",
    description: "Social media app with 100k+ downloads on Play Store and App Store",
    tech: ["Flutter", "Dart", "Firebase"],
    link: "https://github.com/Mikhail-Tal-khal",
    type: "Mobile App",
    date: "2024-02-01",
    isFeatured: false,
    role: "Full-stack Developer",
    status: "Ongoing",
  },
  {
    title: "Next.js Web Platform",
    description: "E-commerce platform handling 10k+ daily transactions",
    tech: ["Next.js", "React", "TailwindCSS"],
    link: "https://github.com/Mikhail-Tal-khal",
    type: "Web Application",
    date: "2024-01-10",
    isFeatured: true,
    role: "Frontend Architect",
    status: "Live",
  },
];

export default function ProjectsSection() {
  // Fixed date formatting function
  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Technical Projects</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore my technical implementations combining cutting-edge technologies with user-centric design
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="p-6 hover:shadow-lg transition-all group"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <Badge
                  variant="outline"
                  className="flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30"
                >
                  <Code2 className="w-4 h-4" />
                  {project.type}
                </Badge>
                {project.isFeatured && (
                  <Badge className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Featured
                  </Badge>
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground mb-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(project.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {project.role}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs font-mono bg-secondary/50 flex items-center gap-1"
                    >
                      <i
                        className={
                          techIcons[tech as keyof typeof techIcons] ||
                          "devicon-code-plain"
                        }
                      ></i>
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <Badge
                    variant={
                      project.status === "Completed" ? "default" : "secondary"
                    }
                  >
                    {project.status}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}