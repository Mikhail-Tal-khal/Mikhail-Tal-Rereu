import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaSignalMessenger, FaGithub } from "react-icons/fa6";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [timeDay, setTimeDay] = useState("");
  const phoneNumber = "+254768871004";
  const signalPhoneNumber = "+254701506538";

  useEffect(() => {
    setMounted(true);

    const updateDateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      
      // Set greeting
      let newGreeting = "Hello";
      if (hours >= 5 && hours < 12) {
        newGreeting = "Good Morning☀️";
      } else if (hours >= 12 && hours < 17) {
        newGreeting = "Good Afternoon🌤";
      } else {
        newGreeting = "Good Evening🌙";
      }
      setGreeting(newGreeting);

      // Set time and day with seconds
      try {
        const timeOptions = { 
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit", // Added seconds here
          hour12: true
        } as const;

        const dateOptions = {
          weekday: "long"
        } as const;

        const timeString = now.toLocaleTimeString("en-US", timeOptions);
        const dayString = now.toLocaleDateString("en-US", dateOptions);
        
        setTimeDay(`${timeString} · ${dayString}`);
      } catch (error) {
        console.error("Error formatting time/date:", error);
        setTimeDay("Loading time...");
      }
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
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
          {/* Date and Time */}
          <div className="mb-6 text-xl sm:text-2xl text-muted-foreground">
            <span className="font-medium">{greeting}</span>
            <span className="mx-2">·</span>
            <span>{timeDay || "Loading time..."}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="inline-block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              Rereu Lemein
            </span>
            <br />
            Software Engineer
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Turning caffeine into code and ideas into apps that spark joy. Let’s
            solve puzzles and build things that feel alive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button asChild className="w-full sm:w-auto">
              <a href="/document-cv/rereu-lemein-khaled.pdf" download>
                Download CV
              </a>
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Experience
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
            <a
              href="https://github.com/Mikhail-Tal-khal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-8 h-8 text-black hover:text-gray-700 transition-colors" />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-8 h-8 text-green-500 hover:text-green-600 transition-colors" />
            </a>
            <a
              href="https://instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-600 transition-colors" />
            </a>
            <a href={signalLink} target="_blank" rel="noopener noreferrer">
              <FaSignalMessenger className="w-8 h-8 text-blue-500 hover:text-blue-600 transition-colors" />
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center">
          <div className="aspect-square rounded-full bg-gradient-to-tr from-primary to-primary/20 overflow-hidden border-4 border-primary/20">
            <img
              src="/images/portfolio/RereuPassport.jpg"
              alt="Profile"
              className="w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}