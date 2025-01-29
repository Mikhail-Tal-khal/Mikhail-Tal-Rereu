import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "Flutter", level: "Advanced" },
  { name: "Next.js", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Python", level: "Advanced" },
  { name: "AI", level: "Advanced" },
  { name: "Computer Vision", level: "Advanced" },
];

export default function SkillsSection() {
  return (
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
  );
}