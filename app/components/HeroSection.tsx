import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content - Order changed for mobile */}
        <div className="order-2 lg:order-1 mt-8 lg:mt-0">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Mikhal-Tal Rereu</span>
            <br />
            Software Engineer
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Specialized in Flutter development, AI solutions, and computer vision applications.
            Passionate about creating innovative cross-platform applications and implementing
            cutting-edge AI technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="w-full sm:w-auto">
              <a href="/document-cv/rereu-lemein-khaled.pdf" download>
                Download CV
              </a>
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Contact Me
            </Button>
          </div>
        </div>

        {/* Image Container - Order changed for mobile */}
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
