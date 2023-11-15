// Import necessary libraries and components
"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./tabButton";
import { NextJs, Tailwind, ReactJs } from "@/public/icons/iconsBig";

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
         <ul>
            <li>NodeJs</li>
            <li>ExpressJs</li>
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
                  src="/Images/Desktop.webp"
                  alt="About me image"
                  width={500}
                  height={500}
               />
               <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                  <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                  <p className="text-base md:text-lg">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
                     perspiciatis dicta sunt harum fugiat quos. Consectetur voluptatum sit
                     recusandae iste, dignissimos natus sequi ex doloremque quo tempora quod,
                     accusantium magni!
                  </p>
                  <div className="flex flex-row mt-8">
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
                  <div className="mt-8">
                     {TAB_DATA.find((t) => t.id === currentTab).content}{" "}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
