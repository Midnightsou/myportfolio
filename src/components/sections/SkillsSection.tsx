import { Shield, Code, Database, Brain, Globe, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Security",
    icon: Shield,
    skills: [
      { name: "Burp Suite", level: 90 },
      { name: "Web App Security", level: 85 },
      { name: "Social Engineering", level: 80 },
      { name: "Penetration Testing", level: 75 },
      { name: "Security Auditing", level: 85 },
    ],
  },
  {
    title: "Frontend",
    icon: Code,
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Database Design", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    title: "Tools & AI",
    icon: Brain,
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "AI Integration", level: 75 },
      { name: "VS Code", level: 95 },
      { name: "Linux", level: 70 },
      { name: "Docker", level: 65 },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills across security and development
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="cyber-card">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Placeholder */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">
              Certifications <span className="text-muted-foreground">(Coming Soon)</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["CompTIA Security+", "CEH", "OSCP", "AWS Certified"].map((cert, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-lg border border-dashed border-border text-muted-foreground"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
