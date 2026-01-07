import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const Footer = () => {

  return (
    <footer className="relative py-5 border-t border-border/30 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Logo */}
          <Link
            to="/"
            className="text-lg font-bold font-mono gradient-text"
          >
            &lt;SA /&gt;
          </Link>

          {/* Social Links */}
          <SocialLinks size="sm" />

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm, text-muted-foreground">
            <span>© Srujal Audarya</span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1">
              Built with <Heart size={12} className="text-red-500" /> By Srujal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
