"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
   return (
      <section id="home">
         <div className="grid grid-cols-1 md:grid-cols-12 gap-2 p-2 lg:p-0 mb-10 mt-5 2xl:mb-40">
            <div className="col-span-7 xl:col-span-8 place-self-center text-center md:text-left">
               <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold 2xl:text-8xl">
                  <div>
                     <span className="text-transparent bg-clip-text gradient-background">
                        Hello, I'm{""}
                     </span>
                     <span> Valentín </span>
                  </div>
                  <TypeAnimation
                     sequence={[
                        "Web Developer",
                        3500,
                        "API Architect",
                        4500,
                        "Ux/Ui Designer",
                        3500,
                     ]}
                     wrapper="span"
                     speed={50}
                     style={{ fontSize: "1em", display: "inline-block" }}
                     repeat={Infinity}
                  />
               </h1>
               <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6 lg:w-11/12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid
                  molestias, reiciendis dolore exercitationem nam,
               </p>
               <div className="flex justify-center md:justify-normal ">
                  <button className="px-6 py-3 w-full md:w-fit rounded-full mr-4 gradient-background2 text-[#181818] font-bold mt-3 2xl:text-2xl 2xl:px-8 2xl:py-4">
                     Contact Me
                  </button>
                  <button className=" px-1 py-1 w-full md:w-fit rounded-full bg-gradient-to-br from-cyan-400 via-teal-400 to-green-500 hover:bg-slate-800 text-white mt-3">
                     <span className="transition ease-in-out delay-45 w-full block bg-[#121212] hover:bg-stone-700 rounded-full px-6 py-3 2xl:text-2xl 2xl:px-8 2xl:py-4">
                        Download CV
                     </span>
                  </button>
               </div>
            </div>
            <div className="col-span-5 xl:col-span-4 place-self-center mt-8 lg:mt-0">
               <div className="rounded-full overflow-hidden bg-[#181818] w-[290px] h-[290px]  2xl:w-[500px] 2xl:h-[500px] lg:w-[400px] lg:h-[400px] md:w-[315px] md:h-[315px] relative">
                  <Image
                     src="/images/1.webp"
                     alt="hero image"
                     priority
                     loading="eager"
                     className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 mt-4 pr-7"
                     width={500}
                     height={500}
                  />
               </div>
            </div>
         </div>
      </section>
   );
}
