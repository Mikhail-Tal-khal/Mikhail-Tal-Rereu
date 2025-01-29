import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Vision Assistant",
    description: "Computer vision application for real-time object detection and analysis",
    tech: ["Python", "OpenCV", "TensorFlow", "Flutter"],
    link: "https://github.com/Mikhail-Tal-khal",
  },
  {
    title: "Cross-Platform Mobile App",
    description: "Feature-rich mobile application built with Flutter for iOS and Android",
    tech: ["Flutter", "Dart", "Firebase"],
    link: "https://github.com/Mikhail-Tal-khal"
  },
  {
    title: "Next.js Web Platform",
    description: "Modern web application with server-side rendering and dynamic features",
    tech: ["Next.js", "React", "TailwindCSS"],
    link: "https://github.com/Mikhail-Tal-khal"
  }
  // ... other projects
];

export default function ProjectsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="p-6">
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
            <Button variant="outline" className="w-full" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}