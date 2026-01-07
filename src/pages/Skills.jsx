import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";

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
    skills: ["Android (Java)", "Android (Kotlin)", "Material Design"],
  },
  {
    title: "Backend & Tools",
    skills: ["Firebase", "MySQL", "Git", "GitHub", "Android Studio", "VS Code"],
  },
];

const SkillsPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Skills | Srujal Audarya</title>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="Explore the technical skills and technologies that Srujal Audarya works with - Java, JavaScript, React, Android, and more."
        />
        <link rel="canonical" href="https://srujal-portfolio.vercel.app//skills" />
      </Helmet>

      <section className="relative py-12 md:py-12 pt-16">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

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
    </Layout>
  );
};

export default SkillsPage;
