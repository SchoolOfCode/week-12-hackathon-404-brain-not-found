import { Braces, Database, Globe, LayoutDashboard, Server, Smartphone } from "lucide-react"

const skillCategories = [
  {
    name: "Frontend",
    icon: <LayoutDashboard className="h-6 w-6" />,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
  },
  {
    name: "Backend",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express", "NestJS", "Python", "Django", "GraphQL"],
  },
  {
    name: "Database",
    icon: <Database className="h-6 w-6" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Mongoose"],
  },
  {
    name: "DevOps",
    icon: <Globe className="h-6 w-6" />,
    skills: ["Docker", "AWS", "Vercel", "CI/CD", "GitHub Actions", "Kubernetes"],
  },
  {
    name: "Mobile",
    icon: <Smartphone className="h-6 w-6" />,
    skills: ["React Native", "Expo", "Flutter", "Mobile-First Design"],
  },
  {
    name: "Other",
    icon: <Braces className="h-6 w-6" />,
    skills: ["Git", "REST APIs", "Testing (Jest, Cypress)", "Agile/Scrum", "UI/UX Design"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="container section-padding">
      <h2 className="section-title">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.name} className="bg-card rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-md text-primary">{category.icon}</div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

