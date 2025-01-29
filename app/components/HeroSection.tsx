import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaSignalMessenger, FaGithub } from "react-icons/fa6";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [greeting, setGreeting] = useState("");
  const phoneNumber = "+254768871004";
  const signalPhoneNumber = "+254701506538";


  useEffect(() => {
    setMounted(true);

    const updateGreeting = () => {
      const now = new Date();
      const hours = now.getHours();
      let newGreeting = "Hello";

      if (hours >= 5 && hours < 12) {
        newGreeting = "Good Morning☀️";
      } else if (hours >= 12 && hours < 17) {
        newGreeting = "Good Afternoon🌤";
      } else {
        newGreeting = "Good Evening🌙";
      }

      setGreeting(newGreeting);
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const baseMessage = `${greeting} Rereu,\n\nI want to get this project done. Let's discuss!`;
  const encodedMessage = encodeURIComponent(baseMessage);

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  const signalLink = `https://signal.me/#eu/dZABsdD-ve2KGYxcPg5mHjwqjmyCCMh9CaQhGQKx87AWYrZ5KLdP56eMZA4oi41V/${signalPhoneNumber}`;

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

          {/* Social Media & Messaging Buttons */}
          <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-8 h-8 text-black hover:text-gray-700 transition-colors" />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-8 h-8 text-green-500 hover:text-green-600 transition-colors" />
            </a>
            <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-600 transition-colors" />
            </a>
            <a href={signalLink} target="_blank" rel="noopener noreferrer">
              <FaSignalMessenger className="w-8 h-8 text-blue-500 hover:text-blue-600 transition-colors" />
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
