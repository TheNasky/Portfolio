import Head from "next/head";
import AboutSection from "./components/aboutSection";
import AchievementsSection from "./components/achievementSection";
import AchievementsSection2 from "./components/achievementSection2";
import EmailSection from "./components/emailSection";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import ProjectsSection from "./components/projectsSection";
import ScrollUpButton from "./components/scrollUpButton";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
         <Head>
            <title>Valentín Ballesteros' Portfolio</title>
            <meta name="description" content="Valentín Ballesteros' Portfolio" />
            {/* Open Graph meta tags for better sharing on social media */}
            <meta property="og:title" content="Valentín Ballesteros' Portfolio" />
            <meta property="og:description" content="Valentín Ballesteros' Portfolio" />
            <meta property="og:image" content="./public/images/icons/NextJs.webp" />
            {/* Favicon */}
            <link rel="icon" href="./public/images/icons/NextJs.webp" />
         </Head>
         <Navbar />
         <div className="container mx-auto mt-16 lg:mt-24 py-8 px-6 lg:px-0">
            <ScrollUpButton />
            <HeroSection />
            <AchievementsSection />
            <AboutSection />
            <ProjectsSection />
            <AchievementsSection2 />
            <EmailSection />
         </div>
      </main>
   );
}
