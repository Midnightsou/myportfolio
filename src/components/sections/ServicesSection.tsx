import { Shield, Code, Database, Brain, Lock, Globe } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Web Application Security Audits",
    description: "Comprehensive vulnerability assessments using industry-standard tools like Burp Suite. I identify security flaws before attackers do.",
    features: ["Penetration Testing", "Vulnerability Scanning", "Security Reports"],
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "Modern, responsive React applications with clean code and exceptional user experiences. Pixel-perfect designs that work everywhere.",
    features: ["React/TypeScript", "Responsive Design", "Performance Optimization"],
  },
  {
    icon: Database,
    title: "Full-Stack Development",
    description: "Complete web solutions from database design to frontend implementation. Scalable, secure, and maintainable applications.",
    features: ["Database Design", "API Development", "System Architecture"],
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Enhance your applications with artificial intelligence capabilities. From chatbots to intelligent automation.",
    features: ["AI-Powered Features", "Machine Learning", "Smart Automation"],
  },
  {
    icon: Lock,
    title: "Security Consulting",
    description: "Expert guidance on security best practices and social engineering awareness. Protect your organization from digital threats.",
    features: ["Security Training", "Policy Development", "Risk Assessment"],
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description: "End-to-end web application development with security built into every layer. From concept to deployment.",
    features: ["Custom Solutions", "Cloud Deployment", "Ongoing Support"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combining security expertise with development skills to deliver comprehensive digital solutions
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="cyber-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
