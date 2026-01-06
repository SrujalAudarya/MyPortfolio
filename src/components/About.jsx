import { Code2, Smartphone, Brain, Rocket } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Building native Android apps with Java & Kotlin",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Creating responsive web apps with React & Firebase",
  },
  {
    icon: Brain,
    title: "Backend Learning",
    description: "Currently learning JSP and server-side technologies",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Constantly exploring new technologies",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-40">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="section-container relative z-10">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better"
        />

        <div className="max-w-4xl mx-auto">
          <GlassCard className="mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I am <span className="text-foreground font-semibold">Srujal Audarya</span>,
              a passionate Computer Science and Engineering student from{" "}
              <span className="text-primary">SSGMCE, Shegaon</span>. I specialize in
              Android and Web development and enjoy building real-world applications.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
              I have gained hands-on exposure to <span className="text-foreground">Firebase</span> and
              have studied <span className="text-foreground">React</span> as part of my development
              journey. I am currently learning <span className="text-foreground">JSP (Java Server Pages)</span>
              and enjoy exploring new technologies to improve my technical knowledge.
            </p>

          </GlassCard>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <GlassCard
                key={item.title}
                className="text-center group"
              >
                <div
                  className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 group-hover:border-neon-blue/60 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-mono font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
