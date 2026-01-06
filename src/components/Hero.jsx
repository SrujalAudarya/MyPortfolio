import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-48 h-48 bg-neon-cyan/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Name */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-mono mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary">Srujal Audarya</span>
          </h1>

          {/* Title */}
          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in-up font-mono"
            style={{ animationDelay: "0.2s" }}
          >
            Computer Science Engineering Student
          </p>

          {/* Subtitle Tags */}
          <div
            className="flex flex-wrap justify-center gap-3 mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="tech-badge">Web Developer</span>
            <span className="tech-badge">App Developer</span>
          </div>

          {/* Description */}
          <p
            className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            I build modern Android and Web applications with a focus on performance,
            usability, and continuous learning. Passionate about turning ideas into
            impactful solutions.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <SocialLinks size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
