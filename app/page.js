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
