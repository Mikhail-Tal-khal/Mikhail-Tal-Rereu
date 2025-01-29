import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain } from "lucide-react";

type SubSkillIcons = {
  [key: string]: string;
};

const subSkillIcons: SubSkillIcons = {
  Firebase: "devicon-firebase-plain colored",
  Dart: "devicon-dart-plain colored",
  "Bloc Pattern": "devicon-redux-plain colored",
  Riverpod: "devicon-kubernetes-plain colored",
  GetX: "devicon-go-plain colored",
  Supabase: "devicon-supabase-plain colored",
  TypeScript: "devicon-typescript-plain colored",
  "Tailwind CSS": "devicon-tailwindcss-plain colored",
  tRPC: "devicon-typescript-plain colored",
  "Server Components": "devicon-nodejs-plain colored",
  TensorFlow: "devicon-tensorflow-original colored",
  PyTorch: "devicon-pytorch-plain colored",
  OpenCV: "devicon-opencv-plain colored",
  NLP: "devicon-python-plain colored",
  GANs: "devicon-python-plain colored",
  Django: "devicon-django-plain colored",
  Flask: "devicon-flask-plain colored",
  Pandas: "devicon-pandas-plain colored",
  NumPy: "devicon-numpy-plain colored",
  "Scikit-learn": "devicon-scikitlearn-plain colored",
  "Node.js": "devicon-nodejs-plain colored",
  GraphQL: "devicon-graphql-plain colored",
  PostgreSQL: "devicon-postgresql-plain colored",
  Docker: "devicon-docker-plain colored",
  Redis: "devicon-redis-plain colored",
  YOLO: "devicon-python-plain colored",
  "Image Processing": "devicon-opencv-plain colored",
  "AR Foundation": "devicon-unity-plain colored",
  "ML Kit": "devicon-google-plain colored",
} as const;

const skills = [
  {
    name: "Flutter",
    level: "Advanced",
    icon: "devicon-flutter-plain colored text-blue-500",
    subSkills: [
      "Firebase",
      "Dart",
      "Bloc Pattern",
      "Riverpod",
      "GetX",
    ] as const,
  },
  {
    name: "Next.js",
    level: "Advanced",
    icon: "devicon-nextjs-plain colored text-gray-800 dark:text-gray-100",
    subSkills: [
      "Supabase",
      "TypeScript",
      "Tailwind CSS",
      "tRPC",
      "Server Components",
    ] as const,
  },
  {
    name: "AI Engineering",
    level: "Advanced",
    icon: <Brain className="w-6 h-6 text-purple-500" />,
    subSkills: ["TensorFlow", "PyTorch", "OpenCV", "NLP", "GANs"] as const,
  },
  {
    name: "Python",
    level: "Advanced",
    icon: "devicon-python-plain colored text-yellow-500",
    subSkills: ["Django", "Flask", "Pandas", "NumPy", "Scikit-learn"] as const,
  },
  {
    name: "Backend",
    level: "Advanced",
    icon: "devicon-nodejs-plain colored text-green-500",
    subSkills: ["Node.js", "GraphQL", "PostgreSQL", "Docker", "Redis"] as const,
  },
  {
    name: "Computer Vision",
    level: "Advanced",
    icon: "devicon-opencv-plain colored text-red-500",
    subSkills: [
      "OpenCV",
      "YOLO",
      "Image Processing",
      "AR Foundation",
      "ML Kit",
    ] as const,
  },
];

export default function SkillsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <Card
            key={skill.name}
            className="p-6 group hover:border-primary transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {typeof skill.icon === "string" ? (
                    <i className={`${skill.icon} text-2xl`}></i>
                  ) : (
                    <div className="text-purple-500">{skill.icon}</div>
                  )}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <Badge variant="secondary">{skill.level}</Badge>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {skill.subSkills.map((subSkill) => {
                const iconClass =
                  subSkill in subSkillIcons
                    ? subSkillIcons[subSkill]
                    : "devicon-code-plain text-sm";

                return (
                  <Badge
                    key={subSkill}
                    variant="outline"
                    className="text-xs font-mono bg-secondary/50 hover:bg-primary/10 flex items-center gap-1"
                  >
                    <i className={iconClass}></i>
                    {subSkill}
                  </Badge>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
