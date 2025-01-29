import { Github, Linkedin, Twitter } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="py-8 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <p className="mb-4 text-lg font-semibold">Get connected with me on social networks!</p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-gray-300 transition-colors" />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-gray-300 transition-colors" />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 hover:text-gray-300 transition-colors" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm">© 2025 Mikhal-Tal Rereu. All rights reserved.</p>
      </div>
    </footer>
  );
}
