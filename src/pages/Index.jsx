import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Icon } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Srujal Audarya</title>
        <link rel="icon" href="/favicon.svg"/>
        <meta
          name="description"
          content="I am Srujal Audarya, a Computer Science Engineering student specializing in Android and Web development. Explore my portfolio showcasing projects built with React and Firebase."
        />
        <meta
          name="keywords"
          content="Srujal Audarya, Android Developer, Web Developer, React Developer, Firebase, Portfolio, Computer Science, SSGMCE"
        />
        <meta name="author" content="Srujal Audarya" />
        <meta property="og:title" content="Srujal Audarya | Developer Portfolio" />
        <meta
          property="og:description"
          content="Android & Web Developer | Building modern applications with a focus on performance and innovation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://srujalaudarya.me" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Srujal Audarya | Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Android & Web Developer | Building modern applications with a focus on performance and innovation."
        />
        <link rel="canonical" href="https://srujal-portfolio.vercel.app/" />
      </Helmet>

      <Hero />
    </Layout>
  );
};

export default Index;
