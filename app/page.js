import AboutSection from "./components/aboutSection";
import EmailSection from "./components/emailSection";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import ProjectsSection from "./components/projectsSection";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
         <Navbar></Navbar>
         <div className="container mx-auto mt-16 lg:mt-24 py-8 px-6 lg:px-0">
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <ProjectsSection></ProjectsSection>
            <EmailSection></EmailSection>
         </div>      
      </main>
   );
}
