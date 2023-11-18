// Import necessary libraries and components
"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./tabButton";
import { getIcon, getIconTt } from "@/public/icons/icons";

// Tooltip component
const Tooltip = ({ text }) => (
   <div className="hidden group-hover:block absolute z-10 p-2 bg-gray-800 text-white rounded-md">
      {text}
   </div>
);

// Data for tabs
const TAB_DATA = [
   {
      title: "Skills",
      id: "skills",
      content: (
         <ul className="grid grid-cols-3 text-xs lg:text-lg sm:text-s">
            <div>
               <li className="xl:pb-1 flex items-center">
                  React.Js
                  <span className="pt-2 pl-1">{getIcon("ReactJs", { size: 25 })}</span>
               </li>
               <li className="xl:pb-1 flex items-center">
                  Next.Js
                  <span className="pt-2 pl-1">{getIcon("NextJs", { size: 25 })}</span>
               </li>
               <li className="xl:pb-1 flex items-center">
                  Node.Js
                  <span className="pt-2 pl-1">{getIcon("NodeJs", { size: 25 })}</span>
               </li>
               <li className="xl:pb-1 flex items-center">
                  Nest.Js
                  <span className="pt-2 pl-1">{getIcon("NestJs", { size: 25 })}</span>
               </li>
               <li className="xl:pb-1 flex items-center">
                  Express.Js
                  <span className="pt-2 pl-1">{getIcon("ExpressJs", { size: 25 })}</span>
               </li>
            </div>
            <div>
               <li className="xl:pb-1 flex items-center">
                  Tailwind
                  <span className="pt-2 pl-1">{getIcon("Tailwind", { size: 25 })}</span>
               </li>
               <li className="xl:pb-1 flex items-center">
                  JavaScript
                  <span className="pt-2 pl-1">{getIcon("JavaScript", { size: 25 })}</span>
               </li>
               <li className="xl:pb-1 flex items-center">
                  TypeScript
                  <span className="pt-2 pl-1">{getIcon("TypeScript", { size: 25 })}</span>
               </li>
               <li className="xl:pb-1 flex items-center">
                  MongoDB
                  <span className="pt-2 pl-1">{getIcon("MongoDB", { size: 25 })}</span>
               </li>
               <li className="xl:pb-1 flex items-center">
                  Firebase
                  <span className="pt-2 pl-1">{getIcon("Firebase", { size: 25 })}</span>
               </li>
            </div>
            <div>
               <li className="xl:pb-1 flex items-center">
                  Docker
                  <span className="pt-2 pl-1">{getIcon("Docker", { size: 25 })}</span>
               </li>
               <li className="xl:pb-1 flex items-center">
                  Kubernetes
                  <span className="pt-2 pl-1">{getIcon("Kubernetes", { size: 25 })}</span>
               </li>
               <li className="xl:pb-1 flex items-center">
                  HTML5 <span className="pt-2 pl-1">{getIcon("HTML5", { size: 25 })}</span>
               </li>
               <li className="xl:pb-1 flex items-center">
                  CSS
                  <span className="pt-2 pl-1">{getIcon("CSS", { size: 25 })}</span>
               </li>
               <li className="xl:pb-1 flex items-center">
                  SASS
                  <span className="pt-2 pl-1">{getIcon("SASS", { size: 25 })}</span>
               </li>
            </div>
         </ul>
      ),
   },
   {
      title: "Experience",
      id: "experience",
      content: (
         <ul>
            <li>Team Leader at: UltraCode From: Oct,2022 to Now</li>
            <li>Freelancer Web Developer</li>
         </ul>
      ),
   },
   {
      title: "Education",
      id: "education",
      content: (
         <ul>
            <li>
               Technical Title in Programming at: National University of Quilmes From: Feb 2021
               to Now
            </li>
            <li>Coderhouse Full Stack Development Courses</li>
         </ul>
      ),
   },
];

// AboutSection component
export default function AboutSection() {
   // State and transition logic
   const [currentTab, setCurrentTab] = useState("skills");
   const [isPending, startTransition] = useTransition();

   const handleTabChange = (id) => {
      startTransition(() => {
         setCurrentTab(id);
      });
   };

   // Render the component
   return (
      <section id="about" className="mb-14">
         <div className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16 xl-px-16">
               <Image
                  src="/images/Desktop.webp"
                  alt="About me image"
                  className="rounded-lg"
                  width={500}
                  height={500}
               />
               <div className="mt-4 md:mt-0 text-left flex flex-col h-full bg-[#181818] rounded-lg p-4">
                  <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                  <p className="text-base md:text-lg">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
                     perspiciatis dicta sunt harum fugiat quos. Consectetur voluptatum sit
                     recusandae iste, dignissimos natus sequi ex doloremque quo tempora quod,
                     accusantium magni!
                  </p>
                  <div className="flex flex-row mt-8 lg:justify-start justify-center">
                     <TabButton
                        selectTab={() => handleTabChange("skills")}
                        active={currentTab === "skills"}
                     >
                        SKILLS
                     </TabButton>
                     <TabButton
                        selectTab={() => handleTabChange("experience")}
                        active={currentTab === "experience"}
                     >
                        EXPERIENCE
                     </TabButton>
                     <TabButton
                        selectTab={() => handleTabChange("education")}
                        active={currentTab === "education"}
                     >
                        EDUCATION
                     </TabButton>
                  </div>
                  <div className="mt-4">
                     {TAB_DATA.find((t) => t.id === currentTab).content}{" "}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
