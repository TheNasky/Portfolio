"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const AnimatedNumbers = dynamic(
   () => {
      return import("react-animated-numbers");
   },
   { ssr: false }
);

const AchievementsSection2 = () => {
   const [commitCount, setCommitCount] = useState(0);

   useEffect(() => {
      const fetchCommits = async () => {
         try {
            const response = await fetch("https://api.github.com/users/TheNasky/repos", {
               headers: {
                  Authorization:
                     "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",
               },
            });
            const repositories = await response.json();

            // Calculate total commits for all repositories
            const totalCommits = await Promise.all(
               repositories.map(async (repo) => {
                  const commitResponse = await fetch(
                     `https://api.github.com/repos/TheNasky/${repo.name}/commits`,
                     {
                        headers: {
                           Authorization:
                              "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",
                        },
                     }
                  );
                  const commits = await commitResponse.json();
                  return commits.length;
               })
            );

            const sumCommits = totalCommits.reduce((acc, count) => acc + count, 0);
            setCommitCount(sumCommits + 300);
            if (commitCount == NaN) {
               setCommitCount(0);
            }
         } catch (error) {
            console.error("Error fetching commits:", error);
         }
      };

      fetchCommits();
   }, []);
   const achievementsList = [
      {
         prefix: "+",
         metric: "Years",
         value: "2",
      },
      {
         metric: "Projects",
         value: "15",
         postfix: "+",
      },
      {
         prefix: "~",
         metric: "Clients",
         value: "10",
      },
      {
         metric: "Commits",
         value: commitCount.toString(),
      },
   ];

   return (
      <section className="py-8  xl:gap-16 sm:py-16 2xl:pt-12 mt-12 2xl:mt-16 hidden sm:block">
         <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
            {achievementsList.map((achievement, index) => {
               return (
                  <div
                     key={index}
                     className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
                  >
                     <h2 className="text-white text-4xl font-bold flex flex-row">
                        {achievement.prefix}
                        <AnimatedNumbers
                           includeComma
                           animateToNumber={parseInt(achievement.value)}
                           locale="en-US"
                           className="text-white text-4xl font-bold"
                           configs={(_, index) => {
                              return {
                                 mass: 1,
                                 friction: 100,
                                 tensions: 140 * (index + 1),
                              };
                           }}
                        />
                        {achievement.postfix}
                     </h2>
                     <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
                  </div>
               );
            })}
         </div>
      </section>
   );
};

export default AchievementsSection2;
