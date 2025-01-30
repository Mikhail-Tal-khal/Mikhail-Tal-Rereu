"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import SkillsSection from "@/app/components/SkillsSection";
import WhatsAppButton from "@/app/components/WhatsAppButton";


export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Navbar/>
      <HeroSection />
      <SkillsSection />
      <WhatsAppButton />
    </main>
  );
}