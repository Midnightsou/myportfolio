import { Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-lg font-bold">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-gradient">Midnight</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved. Built with security in mind.
          </p>

          {/* Back to top */}
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
