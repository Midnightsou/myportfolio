import { useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Full-Stack", "Security", "Frontend", "AI"];

const projects = [
  {
    title: "Secure E-Commerce Platform",
    description: "A full-stack e-commerce application with integrated payment processing and robust security measures.",
    category: "Full-Stack",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Vulnerability Scanner Tool",
    description: "Automated web application security scanner that identifies common vulnerabilities and generates detailed reports.",
    category: "Security",
    tech: ["Python", "Burp Suite API", "React"],
    github: "#",
    live: "#",
  },
  {
    title: "AI-Powered Chatbot",
    description: "Intelligent customer support chatbot with natural language processing and seamless integration.",
    category: "AI",
    tech: ["React", "OpenAI API", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates and team collaboration features.",
    category: "Full-Stack",
    tech: ["React", "Firebase", "TypeScript"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Dashboard",
    description: "Interactive dashboard for tracking investments with real-time data visualization and analytics.",
    category: "Frontend",
    tech: ["React", "Chart.js", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Authentication System",
    description: "Secure multi-factor authentication system with JWT tokens and OAuth integration.",
    category: "Security",
    tech: ["Node.js", "JWT", "OAuth 2.0"],
    github: "#",
    live: "#",
  },
  {
    title: "Social Media Analytics",
    description: "AI-powered social media analytics tool for sentiment analysis and engagement tracking.",
    category: "AI",
    tech: ["React", "Python", "TensorFlow"],
    github: "#",
    live: "#",
  },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of my work showcasing full-stack development, security tools, and AI integrations
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "glow-sm" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="cyber-card group flex flex-col"
              >
                {/* Project Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Folder className="w-6 h-6 text-primary" />
                </div>

                {/* Category Badge */}
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent w-fit mb-4">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
