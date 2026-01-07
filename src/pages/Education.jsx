import { Helmet } from "react-helmet-async";
import { GraduationCap } from "lucide-react";
import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";
import SectionTitle from "@/components/SectionTitle";

const EducationPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Education | Srujal Audarya</title>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="Academic background of Srujal Audarya - Diploma in Engineering and Bachelor of Engineering in Computer Science."
        />
        <link rel="canonical" href="https://srujal-portfolio.vercel.app//education" />
      </Helmet>

      <section className="relative py-12 md:py-12 pt-16">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

        <div className="section-container relative z-10">
          <SectionTitle title="Education" subtitle="My academic background" />

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Diploma Card */}
            <GlassCard className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20">
                <GraduationCap size={28} className="text-primary" />
              </div>

              <h3 className="text-lg md:text-xl font-mono font-bold text-foreground mb-2">
                Diploma in Engineering
              </h3>

              <p className="text-primary font-medium mb-2 text-sm">
                Computer Science & Engineering
              </p>

              <p className="text-muted-foreground mb-4 text-sm">
                Government Polytechnic Arvi, Arvi
              </p>

              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                Completed
              </span>
            </GlassCard>

            {/* B.E. Card */}
            <GlassCard className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20">
                <GraduationCap size={28} className="text-primary" />
              </div>

              <h3 className="text-lg md:text-xl font-mono font-bold text-foreground mb-2">
                Bachelor of Engineering (B.E.)
              </h3>

              <p className="text-primary font-medium mb-2 text-sm">
                Computer Science & Engineering
              </p>

              <p className="text-muted-foreground mb-4 text-sm">
                Shri Sant Gajanan Maharaj College of Engineering (SSGMCE), Shegaon
              </p>

              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                Currently Pursuing
              </span>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EducationPage;
