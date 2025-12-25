import { Shield, Code, Zap } from "lucide-react";

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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border overflow-hidden glow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                      <Shield className="w-16 h-16 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm">Your photo here</p>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-lg -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
            </div>

            {/* About Content */}
            <div>
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="cyber-card text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">Security</div>
                  <div className="text-sm text-muted-foreground">First Approach</div>
                </div>
                <div className="cyber-card text-center">
                  <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">7+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="cyber-card text-center">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">Full-Stack</div>
                  <div className="text-sm text-muted-foreground">Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
