import { GraduationCap, Briefcase, Calendar, Award } from "lucide-react";

const experiences = [
  {
    type: "education",
    title: "Ladoke Akintola University of Technology",
    subtitle: "LAUTECH",
    description: "Currently pursuing my degree with a focus on technology and security. Combining academic excellence with practical projects to build a strong foundation in software development and cybersecurity.",
    period: "Current Student",
    icon: GraduationCap,
  },
  {
    type: "certification",
    title: "Zero To Mastery Academy",
    subtitle: "Cybersecurity Training",
    description: "Completed comprehensive cybersecurity training covering ethical hacking, penetration testing, network security, and vulnerability assessment. Gained practical skills in identifying and mitigating security threats.",
    period: "Certified",
    icon: Award,
  },
  {
    type: "internship",
    title: "Nigeria Security and Civil Defence Corps",
    subtitle: "NSCDC - Internship",
    description: "Gained hands-on experience in security operations and protocols. Developed an understanding of physical and digital security measures, emergency response procedures, and the importance of vigilance in protecting assets and personnel.",
    period: "Internship Period",
    icon: Briefcase,
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Education & <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic journey and professional experiences that shaped my skills
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 glow-sm z-10" />

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="cyber-card">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="p-2 rounded-lg bg-primary/10">
                        <exp.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium mb-3">{exp.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
