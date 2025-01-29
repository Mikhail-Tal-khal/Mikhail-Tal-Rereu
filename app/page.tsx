"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import SkillsSection from "@/app/components/SkillsSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import ContactSection from "@/app/components/ContactSection";
import FooterSection from "@/app/components/FooterSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}