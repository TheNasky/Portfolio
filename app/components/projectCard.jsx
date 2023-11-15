import Link from "next/link";

export default function ProjectCard({
   imgUrl,
   title,
   description,
   gitHubUrl,
   previewUrl,
   icons,
}) {
   return (
      <div>
         <div
            className="h-52 rounded-t-xl relative group"
            style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
         >
            <div
               className="overlay items-center justify-center absolute top-0 left 0 w-full h-full bg-[#181818] bg-opacity-0 hidden
               group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-t-xl"
            >
               <Link
                  href={"gitHubUrl"}
                  className="h-14 w-14 border-2 mr-8 relative rounded-full border-[#ADB7BE] hover:border-[#3fcb7c] group/link"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="icon icon-tabler icon-tabler-brand-github h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white text-[#ADB7BE]"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     strokeWidth="2"
                     stroke="currentColor"
                     fill="none"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                     <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
               </Link>
               <Link
                  href={"previewUrl"}
                  className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-[#3fcb7c] group/link2"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link2:text-white"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                     />
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                     />
                  </svg>
               </Link>
            </div>
         </div>
         <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
            <div className="flex justify-between mb-1 border-[#ADB7BE] border-b-2 ">
               <h5 className="text-xl font-semibold mb-1">{title} </h5>{" "}
               <span className="flex flex-wrap">
                  {icons.map((Icon, index) => (
                     <span key={index} className="relative inline-block group">
                        <Icon className="w-6 h-6 text-[#ADB7BE] group-hover:text-white" />
                        <span className="opacity-0 bg-[#1E293B] text-white text-xs py-1 px-2 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-opacity duration-300">
                           {Icon.displayName || Icon.name}
                        </span>
                     </span>
                  ))}
               </span>
            </div>
            <p className="text-[#ADB7BE]">{description} </p>
         </div>
      </div>
   );
}
