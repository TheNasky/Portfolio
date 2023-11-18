import { getIcon, getIconTt } from "@/public/icons/icons";
import Link from "next/link";

export default function EmailSection() {
   return (
      <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
         <div>
            <h5 className="text-xl font-bold text-white my-2">Let's Connect!</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
               I'm always looking for new opportunities and my inbox is always open whether you
               have a question or just want to say hi. I'll try my best to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
               <Link href={"/"}>{getIconTt("Github", { size: 30 })} </Link>
               <Link href={"/"}>{getIconTt("Linkedin", { size: 30 })} </Link>
            </div>
         </div>
         <div>
            <form className="flex flex-col">
               <div className="mb-6">
                  <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                     Your Email
                  </label>
                  <input
                     type="email"
                     id="email"
                     required
                     placeholder="YourEmail@gmail.com"
                     className="bg-[#18191E] border border-[#33353f placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  />
               </div>
               <div className="mb-6">
                  <label
                     htmlFor="subject"
                     className="text-white block mb-2 text-sm font-medium"
                  >
                     Subject
                  </label>
                  <input
                     type="text"
                     id="subject"
                     required
                     placeholder="Just saying hi"
                     className="bg-[#18191E] border border-[#33353f placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  />
               </div>
               <div className="mb-6">
                  <label
                     htmlFor="message"
                     className="text-white block mb-2 text-sm font-medium"
                  >
                     Message
                  </label>
                  <textarea
                     name="message"
                     id="message"
                     className="bg-[#18191E] border border-[#33353f placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                     placeholder="Let's talk about..."
                  ></textarea>
               </div>
               <button type="submit"></button>
            </form>
         </div>
      </section>
   );
}
