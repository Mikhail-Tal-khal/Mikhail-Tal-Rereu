import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaSignal } from "react-icons/fa"; // Import colorful icons

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1 mt-8 lg:mt-0">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Mikhal-Tal Rereu</span>
            <br />
            Software Engineer
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Specialized in Flutter development, AI solutions, and computer
            vision applications. Passionate about creating innovative
            cross-platform applications and implementing cutting-edge AI
            technologies.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button asChild className="w-full sm:w-auto">
              <a href="/document-cv/rereu-lemein-khaled.pdf" download>
                Download CV
              </a>
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Contact Me
            </Button>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <Github className="w-8 h-8 text-black hover:text-gray-700 transition-colors" />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-8 h-8 text-blue-600 hover:text-blue-700 transition-colors" />
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-8 h-8 text-blue-400 hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-8 h-8 text-green-500 hover:text-green-600 transition-colors" />
            </a>
            <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-600 transition-colors" />
            </a>
            <a href="https://signal.org/install/" target="_blank" rel="noopener noreferrer">
              <FaSignal className="w-8 h-8 text-blue-500 hover:text-blue-600 transition-colors" />
            </a>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative order-1 lg:order-2 flex justify-center">
          <div className="aspect-square rounded-full bg-gradient-to-tr from-primary to-primary/20 overflow-hidden border-4 border-primary/20">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
              alt="Profile"
              className="w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto object-cover mix-blend-multiply scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
