import { Shield, Code, Zap, Lock } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate developer and security enthusiast dedicated to building secure digital experiences
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            {/* About Content */}
            <h3 className="text-2xl font-bold mb-4">
              Emiola Mukhtar Adedapo
            </h3>
            <p className="text-primary font-medium mb-4">
              Security-First Developer
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a cybersecurity enthusiast and frontend developer with a keen eye for 
              identifying vulnerabilities and building robust web applications. My journey 
              into tech started with a curiosity about how systems work and how they can be protected.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Currently pursuing my studies at Ladoke Akintola University of Technology (LAUTECH), 
              I combine academic knowledge with practical experience to deliver secure and 
              user-friendly solutions. I believe that great software should not only look 
              beautiful but also be fundamentally secure.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="cyber-card text-center p-4 md:p-6">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-lg md:text-xl font-bold text-primary whitespace-nowrap">Security First</div>
                <div className="text-xs md:text-sm text-muted-foreground">Approach</div>
              </div>
              <div className="cyber-card text-center p-4 md:p-6">
                <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-lg md:text-xl font-bold text-primary whitespace-nowrap">Cybersecurity</div>
                <div className="text-xs md:text-sm text-muted-foreground">Expert</div>
              </div>
              <div className="cyber-card text-center p-4 md:p-6">
                <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-lg md:text-xl font-bold text-primary whitespace-nowrap">Full-Stack</div>
                <div className="text-xs md:text-sm text-muted-foreground">Developer</div>
              </div>
              <div className="cyber-card text-center p-4 md:p-6">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-lg md:text-xl font-bold text-primary">7+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
