import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
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
              <a href="/document-cv/rereu-lemein-khaled.pdf" download>
                Download CV
              </a>
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
  );
}