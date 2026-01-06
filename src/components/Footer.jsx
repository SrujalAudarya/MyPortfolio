import { Heart } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold font-mono gradient-text"
          >
            &lt;SA /&gt;
          </a>

          {/* Social Links */}
          <SocialLinks size="md" />

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Srujal Audarya</span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1.5">
              Built with <Heart size={16} className="text-red-500" />
            </span>
          </div>

          {/* Back to top */}
          <a
            href="#home"
            className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
