import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "Python", "C", "C++"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Mobile",
    skills: ["Android (Java)", "Material Design"],
  },
  {
    title: "Backend & Tools",
    skills: ["Firebase", "MySQL", "Git", "GitHub", "Android Studio", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="section-container relative z-10">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <GlassCard key={category.title} className="text-center">
              <h3 className="text-lg font-mono font-bold text-primary mb-4 pb-2 border-b border-border/50">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="tech-badge animate-fade-in-up"
                    style={{
                      animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
