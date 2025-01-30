import { Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

// Add props interface
interface FooterSectionProps {
    className?: string;
  }

export default function FooterSection({ className }: FooterSectionProps) {
  return (
    <footer className={cn("py-6 bg-blue-900", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <p className="mb-4 text-lg font-semibold">
          Get connected with me on social networks!
        </p>

        {/* Social Media + Coffee Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
          {/* Original Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://github.com/Mikhail-Tal-khal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 hover:text-gray-300 transition-colors" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 hover:text-gray-300 transition-colors" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6 hover:text-gray-300 transition-colors" />
            </a>
          </div>

          {/* Coffee Button (New Addition) */}
          <a
            href="#"
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-lg hover:scale-105 transition-transform"
          >
            <i className="devicon-ko-fi-plain colored text-xl"></i>
            <span className="font-medium">Buy Me Coffee</span>
          </a>
        </div>

        {/* Original Copyright Text */}
        <p className="text-sm">© 2025 Mikhal-Tal Rereu. All rights reserved.</p>
      </div>
    </footer>
  );
}
