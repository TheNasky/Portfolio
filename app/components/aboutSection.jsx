// Import necessary libraries and components
"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./tabButton";
import { getIcon, getIconTt } from "@/app/icons/icons";

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
         <div className="grid grid-cols-3 text-xs lg:text-lg sm:text-s 2xl:mt-6 mt-4">
            <ul>
               <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2">
                  React.Js
                  <span className="pt-2 pl-1 hidden show-at-370">
                     {getIcon("ReactJs", { size: 25 })}
                  </span>
               </li>
               <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2">
                  Next.Js
                  <span className="pt-2 pl-1 hidden show-at-370">
                     {getIcon("NextJs", { size: 25 })}
                  </span>
               </li>
               <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2">
                  Node.Js
                  <span className="pt-2 pl-1 hidden show-at-370">
                     {getIcon("NodeJs", { size: 25 })}
                  </span>
               </li>
               <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2">
                  Nest.Js
                  <span className="pt-2 pl-1 hidden show-at-370">
                     {getIcon("NestJs", { size: 25 })}
                  </span>
               </li>
               <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2">
                  Express.Js
                  <span className="pt-2 pl-1 hidden show-at-370">
                     {getIcon("ExpressJs", { size: 25 })}
                  </span>
               </li>
            </ul>
            <ul>
               <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2">
                  Tailwind
                  <span className="pt-2 pl-1 hidden show-at-370">
                     {getIcon("Tailwind", { size: 25 })}
                  </span>
               </li>
               <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2">
                  JavaScript
                  <span className="pt-2 pl-1 hidden show-at-370">
                     {getIcon("JavaScript", { size: 25 })}
                  </span>
               </li>
               <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2">
                  TypeScript
                  <span className="pt-2 pl-1 hidden show-at-370">
                     {getIcon("TypeScript", { size: 25 })}
                  </span>
               </li>
               <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2">
                  MongoDB
                  <span className="pt-2 pl-1 hidden show-at-370">
                     {getIcon("MongoDB", { size: 25 })}
                  </span>
               </li>
               <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2">
                  Firebase
                  <span className="pt-2 pl-1 hidden show-at-370">
                     {getIcon("Firebase", { size: 25 })}
                  </span>
               </li>
            </ul>
            <ul>
               <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2">
                  Docker
                  <span className="pt-2 pl-1 hidden show-at-370">
                     {getIcon("Docker", { size: 25 })}
                  </span>
               </li>
               <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2">
                  Kubernetes
                  <span className="pt-2 pl-1 hidden show-at-370">
                     {getIcon("Kubernetes", { size: 25 })}
                  </span>
               </li>
               <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2">
                  HTML5{" "}
                  <span className="pt-2 pl-1 hidden show-at-370">
                     {getIcon("HTML5", { size: 25 })}
                  </span>
               </li>
               <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2">
                  CSS
                  <span className="pt-2 pl-1 hidden show-at-370">
                     {getIcon("CSS", { size: 25 })}
                  </span>
               </li>
               <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2">
                  SASS
                  <span className="pt-2 pl-1 hidden show-at-370">
                     {getIcon("SASS", { size: 25 })}
                  </span>
               </li>
            </ul>
         </div>
      ),
   },
   {
      title: "Experience",
      id: "experience",
      content: (
         <ul>
            <li>Team Leader at: UltraCode From: Oct,2022 to Now</li>
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
      <section id="about" className="mb-24 2xl:mb-60 2xl:pt-36">
         <div className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16">
               <div className="flex justify-center lg:justify-start">
                  <Image
                     src="/images/Desktop.webp"
                     alt="About me image"
                     className="rounded-lg 2xl:w-5/6 2xl:h-full"
                     width={500}
                     height={500}
                  />
               </div>

               <div className="mt-4 md:mt-0 text-left flex flex-col h-full bg-[#181818] rounded-lg p-4 2xl:p-8 2xl:w-full 2xl:h-full">
                  <h2 className="text-4xl font-bold text-white mb-4 2xl:text-6xl">About Me</h2>
                  <p className="text-base md:text-m 2xl:text-xl 2xl:mb-2">
                     I'm Valentín, Dedicated
                     <span className="text-transparent bg-clip-text gradient-background">
                        {" "}
                        Full Stack{" "}
                     </span>
                     Web Developer boasting
                     <span className="text-transparent bg-clip-text gradient-background">
                        {" "}
                        2 years{" "}
                     </span>
                     of practical experience in Node.js, React, Next.js, Nest.js, ExpressJs,
                     and Databases, with Demonstrated success in developing efficient web
                     applications and designing robust RESTful APIs.
                  </p>
                  <div className="flex flex-row mt-8 lg:justify-start justify-around text-m 2xl:text-2xl">
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
                  <div className="mt-3 ">
                     {TAB_DATA.find((t) => t.id === currentTab).content}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
