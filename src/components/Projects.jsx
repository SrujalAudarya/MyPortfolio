import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import SectionTitle from "./SectionTitle";
import GlassCard from "./GlassCard";

const featuredProjects = [
  {
    title: "WhatsApp Clone",
    description: "A real-time chat application built using Firebase.",
    techStack: ["Android", "Firebase", "Java"],
  },
  {
    title: "PDF Reader App",
    description: "An Android app to read PDF files from local storage.",
    techStack: ["Android", "Java", "PDFView"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="section-container relative z-10">
        <SectionTitle
          title="Featured Projects"
          subtitle="Some of my recent work"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {featuredProjects.map((project) => (
            <GlassCard key={project.title} className="text-center">
              <h3 className="text-lg font-mono font-bold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/projects" className="inline-flex items-center gap-2">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
