import { useState } from "react";
import { ExternalLink, Github, Folder, ListVideo } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Full-Stack", "Security", "Frontend"];

const projects = [
  {
    title: "Taste Voyage",
    description:
      "A modern restaurant website featuring an elegant menu display, online reservations, and a seamless user experience for food lovers.",
    category: "Frontend",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    status: "https://github.com/Midnightsou/aste-Voyage",
    live: "tastevoage.netlify.app",
  },
  {
    title: "EcoQuest",
    description:
      "A collaborative environmental awareness platform encouraging sustainable living through gamified challenges and community engagement.",
    category: "Full-Stack",
    tech: ["React", "Node.js", "MongoDB"],
    status: "ongoing",
  },
  {
    title: "Secure Admin Dashboard",
    description:
      "A comprehensive admin panel with role-based access control, and secure authentication for enterprise management.",
    category: "Security",
    tech: ["React", "TypeScript", "JWT", "RBAC"],
    github: "https://github.com/Midnightsou/Secure-dashboard-for-admin-main",
  },
  {
    title: "Social Impact Search Finder",
    description:
      "A platform connecting users with social impact initiatives and volunteer opportunities in their communities.",
    category: "Full-Stack",
    tech: ["React", "APIs", "Tailwind CSS"],
    github: "https://github.com/Midnightsou/social-impact-search-inder",
    live: "https://socialimpactsearch.netlify.app/",
  },
  {
    title: "Password Police",
    description:
      "A security tool that checks password strength and generates cryptographically secure passwords with customizable complexity rules.",
    category: "Security",
    tech: ["JavaScript", "Crypto API", "React"],
    github: "https://github.com/Midnightsou/password-police--------",
    live: "passwordpoli.netlify.app",
  },
  {
    title: "Digital Subscription Manager",
    description:
      "A web application that helps users track and manage their digital subscriptions, providing reminders for renewals and spending analysis.",
    category: "Frontend",
    tech: ["JavaScript", "React"],
    github: "https://github.com/Midnightsou/digital-subscription-manager",
  },
  {
    title: "Islamic App",
    description:
      "A comprehensive Islamic lifestyle app featuring prayer times, Quran reading, and daily reminders for spiritual growth. Currently in development.",
    category: "Full-Stack",
    tech: ["React", "TypeScript", "APIs"],
    status: "ongoing",
  },
  {
    title: "Keylogger",
    description:
      "A simple keylogger built with Python to monitor keystrokes on a system for security auditing purposes.",
    category: "Full-Stack",
    tech: ["Python", "APIs"],
  },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "All" || project.category === activeCategory
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
              A collection of my work showcasing full-stack development and
              security-focused tools.
              <br />
              Check my GitHub for source code access.
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
                className="cyber-card group flex flex-col relative"
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
                <div className="flex gap-4 pt-4 border-t border-border relative z-10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}

                  {project.status === "ongoing" &&
                    !project.github &&
                    !project.live && (
                      <span className="flex items-center gap-2 text-sm text-muted-foreground/60">
                        <Folder className="w-4 h-4" />
                        In Progress
                      </span>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
