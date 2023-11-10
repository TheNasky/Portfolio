import HeroSection from "./components/heroSection";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
         <div className="container mx-auto py-12 px-6 lg:px-0">
            <HeroSection></HeroSection>
         </div>
      </main>
   );
}
