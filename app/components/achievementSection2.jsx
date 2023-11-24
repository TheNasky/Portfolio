"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), { ssr: false });

const AchievementsSection2 = () => {
   const [commitCount, setCommitCount] = useState(0);

   useEffect(() => {
      const fetchCommits = async () => {
         try {
            const lastFetchTime = localStorage.getItem("lastFetchTime");
            const currentTime = new Date().getTime();
            const isCachedValueValid =
               lastFetchTime && currentTime - parseInt(lastFetchTime) < 600000; // 10 minutes in milliseconds

            if (isCachedValueValid) {
               // Use cached value
               const cachedValue = localStorage.getItem("cachedCommitCount");
               setCommitCount(parseInt(cachedValue));
            } else {
               // Replace 'YOUR_GITHUB_TOKEN' with your actual GitHub personal access token
               const githubToken = process.env.GITHUB_TOKEN
               const response = await fetch("https://api.github.com/user/repos", {
                  headers: {
                     Authorization: `Bearer ${githubToken}`,
                  },
               });

               if (!response.ok) {
                  throw new Error(`GitHub API request failed with status: ${response.status}`);
               }

               const repositories = await response.json();

               // Calculate total commits for all repositories
               const totalCommits = await Promise.all(
                  repositories.map(async (repo) => {
                     const commitResponse = await fetch(
                        `https://api.github.com/repos/${repo.full_name}/commits`,
                        {
                           headers: {
                              Authorization: `Bearer ${githubToken}`,
                           },
                        }
                     );

                     if (!commitResponse.ok) {
                        throw new Error(
                           `GitHub API request failed with status: ${commitResponse.status}`
                        );
                     }

                     const commits = await commitResponse.json();
                     return commits.length;
                  })
               );

               const sumCommits = totalCommits.reduce((acc, count) => acc + count, 0);
               const newCommitCount = sumCommits + 300;

               // Save new value and timestamp in local storage
               localStorage.setItem("cachedCommitCount", newCommitCount);
               localStorage.setItem("lastFetchTime", currentTime.toString());

               setCommitCount(newCommitCount);
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
