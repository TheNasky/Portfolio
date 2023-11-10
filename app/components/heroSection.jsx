import Image from "next/image";

export default function HeroSection() {
   return (
      <section>
         <div className="grid grid-cols-1 md:grid-cols-12 p-2 lg:p-0">
            <div className="col-span-7 place-self-center text-center md:text-left">
               <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 via-green-400 to-teal-700">Hello, I'm{""}</span> Valentín!
               </h1>
               <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid
                  molestias, reiciendis dolore exercitationem nam,
               </p>
               <div className="flex justify-center md:justify-normal ">
                  <button className="px-6 py-3 w-full md:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-500 via-green-400 to-teal-700 hover:bg-slate-200 text-white mt-3">
                     Contact Me
                  </button>
                  <button className="px-6 py-3 w-full md:w-fit rounded-full bg-transparent hover:bg-slate-800 border border-white text-white mt-3">
                     Resume
                  </button>
               </div>
            </div>
            <div className="col-span-5 place-self-center mt-8 lg:mt-0">
               <div className="rounded-full overflow-hidden bg-[#181818] w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] md:w-[335px] md:h-[335px] relative">
                  <Image
                     src="/images/1.png"
                     alt="hero image"
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
