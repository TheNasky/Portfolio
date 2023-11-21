"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { getIconTt } from "@/public/icons/icons";

const EmailSection = () => {
   const [emailSubmitted, setEmailSubmitted] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
         email: e.target.email.value,
         subject: e.target.subject.value,
         message: e.target.message.value,
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/email";

      // Form the request for sending data to the server.
      const options = {
         // The method is POST because we are sending data.
         method: "POST",
         // Tell the server we're sending JSON.
         headers: {
            "Content-Type": "application/json",
         },
         // Body of the request is the JSON data we created above.
         body: JSONdata,
      };

      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
         console.log("Message sent.");
         setEmailSubmitted(true);
      }
   };

   return (
      <section
         id="contact"
         className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      >
         <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
               I'm always looking for new opportunities and my inbox is always open whether you
               have a question or just want to say hi. I'll try my best to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
               <Link href={"https://github.com/TheNasky"}>
                  {getIconTt("Github", { size: 30 })}{" "}
               </Link>
               <Link href={"https://www.linkedin.com/in/valent%C3%ADn-ballesteros-49868023a/"}>
                  {getIconTt("Linkedin", { size: 30 })}{" "}
               </Link>
               <Link href={"https://www.linkedin.com/in/valent%C3%ADn-ballesteros-49868023a/"}>
                  {getIconTt("Whatsapp", { size: 30 })}{" "}
               </Link>
            </div>
         </div>
         <div>
            {emailSubmitted ? (
               <p className="text-green-500 text-sm text-center lg:text-2xl mt-2">
                  Email sent successfully!
               </p>
            ) : (
               <form className="flex flex-col" onSubmit={handleSubmit}>
                  <div className="mb-6">
                     <label
                        htmlFor="email"
                        className="text-white block mb-2 text-sm font-medium"
                     >
                        Your E-Mail Address
                     </label>
                     <input
                        name="email"
                        type="email"
                        id="email"
                        required
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="YourEmail@google.com"
                     />
                  </div>
                  <div className="mb-6">
                     <label
                        htmlFor="subject"
                        className="text-white block text-sm mb-2 font-medium"
                     >
                        Subject
                     </label>
                     <input
                        name="subject"
                        type="text"
                        id="subject"
                        required
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Just saying hi"
                     />
                  </div>
                  <div className="mb-6">
                     <label
                        htmlFor="message"
                        className="text-white block text-sm mb-2 font-medium"
                     >
                        Message
                     </label>
                     <textarea
                        name="message"
                        id="message"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Let's talk about..."
                     />
                  </div>
                  <button
                     type="submit"
                     className="mr-4 px-1 py-1 w-full gradient-background font-medium rounded-lg text-white"
                  >
                     <span className="transition ease-in-out delay-45 w-full block bg-[#121212] hover:bg-stone-700 rounded-lg px-6 py-3 2xl:text-2xl 2xl:px-8 2xl:py-4">
                        Send Message
                     </span>
                  </button>
               </form>
            )}
         </div>
      </section>
   );
};

export default EmailSection;
