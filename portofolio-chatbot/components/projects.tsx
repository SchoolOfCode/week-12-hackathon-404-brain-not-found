import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with product listings, cart functionality, and secure checkout process.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "Interactive weather dashboard that displays current and forecasted weather data with beautiful visualizations.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["React", "D3.js", "OpenWeather API", "CSS Modules"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Task Management API",
    description:
      "RESTful API for task management with authentication, task CRUD operations, and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "Docker"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard displaying complex datasets with filterable charts and exportable reports.",
    image: "/placeholder.svg?height=400&width=600",
    techStack: ["React", "TypeScript", "Chart.js", "Material UI", "Firebase"],
    githubUrl: "#",
    demoUrl: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-secondary/50 section-padding">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.githubUrl}
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Link>
                  <Link
                    href={project.demoUrl}
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

