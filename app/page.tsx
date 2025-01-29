"use client";

import { Github, Linkedin, Mail, Twitter, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useTheme } from "next-themes";

const skills = [
  { name: "Flutter", level: "Advanced" },
  { name: "Next.js", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Python", level: "Advanced" },
  { name: "AI", level: "Advanced" },
  { name: "Computer Vision", level: "Advanced" },
];

const projects = [
  {
    title: "AI Vision Assistant",
    description: "Computer vision application for real-time object detection and analysis",
    tech: ["Python", "OpenCV", "TensorFlow", "Flutter"],
    link: "https://github.com/Mikhail-Tal-khal"
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
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const menuItems = ["home", "about", "projects", "contact"];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-2xl font-bold">Mikhal-Tal Rereu</span>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item)}
                  className={`capitalize ${
                    activeSection === item
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
              <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-secondary">
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-secondary">
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-secondary"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveSection(item);
                      setMobileMenuOpen(false);
                    }}
                    className={`capitalize ${
                      activeSection === item
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Mikhal-Tal Rereu</span>
              <br />
              Software Engineer
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Specialized in Flutter development, AI solutions, and computer vision applications.
              Passionate about creating innovative cross-platform applications and implementing
              cutting-edge AI technologies.
            </p>
            <div className="flex space-x-4">
              <Button asChild>
                <a href="/document-cv/rereu-lemein-khaled.pdf" download>Download CV</a>
              </Button>
              <Button variant="outline">Contact Me</Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-tr from-primary to-primary/20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <Badge variant="secondary">{skill.level}</Badge>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="flex justify-center space-x-6">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/Mikhail-Tal-khal" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Twitter className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>© 2024 Mikhal-Tal Rereu. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}