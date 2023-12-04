"use client";
import ProjectCard from "./projectCard";
import ProjectTag from "./projectTag";
import { useState, useRef } from "react";
import { getIcon, getIconTt } from "@/public/icons/icons";
import { motion, useInView } from "framer-motion";
const projectsData = [
   {
      id: 1,
      title: "NextJs Portfolio",
      description: "My 2023 Portfolio built with NextJs",
      image: "/images/projects/Portfolio.webp",
      tags: ["All", "Personal"],
      githubURL: "https://github.com/TheNasky/Portfolio",
      previewURL: "https://valentinballesteros2023.vercel.app/",
      icons: [getIconTt("ReactJs"), getIconTt("NextJs"), getIconTt("Tailwind")],
   },
   {
      id: 2,
      title: "Placeholder",
      description: "Placeholder Project",
      image: "/images/Desktop.webp",
      tags: ["All"],
      githubURL: "/",
      previewURL: "/",
      icons: [getIconTt("ReactJs"), getIconTt("NextJs"), getIconTt("Tailwind")],
   },
   {
      id: 3,
      title: "Placeholder",
      description: "Placeholder Project",
      image: "/images/Desktop.webp",
      tags: ["All"],
      githubURL: "/",
      previewURL: "/",
      icons: [getIconTt("ReactJs"), getIconTt("NextJs"), getIconTt("Tailwind")],
   },
   {
      id: 4,
      title: "Placeholder",
      description: "Placeholder Project",
      image: "/images/Desktop.webp",
      tags: ["All"],
      githubURL: "/",
      previewURL: "/",
      icons: [getIconTt("ReactJs"), getIconTt("NextJs"), getIconTt("Tailwind")],
   },
];

export default function ProjectsSection() {
   const [tag, setTag] = useState("All");
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

   const handleTagChange = (newTag) => {
      setTag(newTag);
   };
   const filteredProjects = projectsData.filter((project) => project.tags.includes(tag));
   const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
   };
   return (
      <section id="projects" className="2xl:pt-12">
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
         <ul ref={ref} className="grid md:grid-cols-3 gap-8 md-gap-12">
            {filteredProjects.map((project, index) => (
               <motion.li
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration:0.3, delay: index*0.4}}
               >
                  <ProjectCard
                     key={project.id}
                     title={project.title}
                     description={project.description}
                     imgUrl={project.image}
                     githubURL={project.githubURL}
                     previewURL={project.previewURL}
                     icons={project.icons}
                  ></ProjectCard>
               </motion.li>
            ))}
         </ul>
      </section>
   );
}
