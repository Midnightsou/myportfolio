import { useState, useEffect } from "react";

const skills = [
  "Burp Suite Expert",
  "React Developer",
  "Database Integration",
  "AI Integration",
  "Social Engineering",
  "Web App Security",
  "Full-Stack Development",
  "cybersecurity Enthusiast",
];

export const AnimatedTerminal = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = skills[currentSkillIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentSkill.length) {
          setDisplayText(currentSkill.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentSkillIndex]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="terminal-bg rounded-lg border border-border overflow-hidden glow-sm">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="ml-4 text-sm text-muted-foreground font-mono">skills.sh</span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm md:text-base">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <span className="text-primary">$</span>
            <span>root /home/portfolio/skills.txt</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">{">"}</span>
            <span className="text-foreground">{displayText}</span>
            <span className="w-2 h-5 bg-primary animate-blink" />
          </div>
          <div className="mt-4 flex items-center gap-2 text-muted-foreground">
            <span className="text-primary">$</span>
            <span className="animate-blink">_</span>
          </div>
        </div>
      </div>
    </div>
  );
};
