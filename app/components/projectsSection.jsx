"use client";
import ProjectCard from "./projectCard";
import ProjectTag from "./projectTag";
import { useState } from "react";
import { Tailwind, NextJs, ReactJs } from "@/public/icons/icons";
import { getIcon, getIconTt } from "@/public/icons/icons";

const projectsData = [
   {
      id: 1,
      title: "NextJs Portfolio",
      description: "My 2023 Portfolio built with NextJs",
      image: "/images/projects/Portfolio.webp",
      tags: ["All", "Personal"],
      githubURL: "/",
      previewURL: "/",
      icons: [getIconTt("ReactJs"), getIconTt("NextJs"), getIconTt("Tailwind")],
   },
   {
      id: 2,
      title: "Placeholder",
      description: "Placeholder Project",
      image: "/images/projects/juan.jfif",
      tags: ["All"],
      githubURL: "/",
      previewURL: "/",
      icons: [getIconTt("ReactJs"), getIconTt("NextJs"), getIconTt("Tailwind")],
   },
   {
      id: 3,
      title: "Placeholder",
      description: "Placeholder Project",
      image: "/images/projects/juan.jfif",
      tags: ["All"],
      githubURL: "/",
      previewURL: "/",
      icons: [getIconTt("ReactJs"), getIconTt("NextJs"), getIconTt("Tailwind")],
   },
   {
      id: 4,
      title: "Placeholder",
      description: "Placeholder Project",
      image: "/images/projects/juan.jfif",
      tags: ["All"],
      githubURL: "/",
      previewURL: "/",
      icons: [getIconTt("ReactJs"), getIconTt("NextJs"), getIconTt("Tailwind")],
   },
];

export default function ProjectsSection() {
   const [tag, setTag] = useState("All");

   const handleTagChange = (newTag) => {
      setTag(newTag);
   };
   const filteredProjects = projectsData.filter((project) => project.tags.includes(tag));

   return (
      <section id="projects">
         <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 lg:mb-12">
            My Projects
         </h2>
         <div className="text-[#ADB7BE] flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag
               onClick={handleTagChange}
               name="All"
               isSelected={tag === "All"}
            ></ProjectTag>
            <ProjectTag
               onClick={handleTagChange}
               name="Personal"
               isSelected={tag === "Personal"}
            ></ProjectTag>
         </div>
         <div className="grid md:grid-cols-3 gap-8 md-gap-12">
            {filteredProjects.map((project) => (
               <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  githubURL={project.githubURL}
                  previewURL={project.previewURL}
                  icons={project.icons}
               ></ProjectCard>
            ))}
         </div>
      </section>
   );
}
