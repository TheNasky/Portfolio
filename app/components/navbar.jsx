"use client";
import Link from "next/link";
import NavLink2 from "./navLink2";
import { useState } from "react";
import NavLink from "./navLink";

const navLinks = [
   { title: "About", path: "#about", offset: -55 },
   { title: "Projects", path: "#projects", offset: -110 },
   { title: "Contact", path: "#contact", offset: -140 },
];

export default function Navbar() {
   const [navbarOpen, setNavbarOpen] = useState(false);

   const scrollToSection = (path, offset) => {
      const element = document.querySelector(path);
      if (element) {
         const offsetTop = element.offsetTop + offset;
         window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
         });
         setNavbarOpen(false);
      }
   };

   return (
      <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95 mb-4 border-b-2 border-[#33353f] pb-3">
         <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href={"/"} className="text-2xl md:text-3xl text-white font-semibold">
               <span className="font-extrabold">Valentín</span>
               <span className="font-extralight">Ballesteros</span>
               <span className="font-extrabold text-transparent bg-clip-text gradient-background">
                  .
               </span>
            </Link>
            <div className="mobile-menu block md:hidden">
               {navbarOpen ? (
                  <button
                     onClick={() => setNavbarOpen(false)}
                     className="flex items-center rounded px-3 py-2 border border-slate-200 text-slate-200 hover:text-white hover:border-white"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M6 18L18 6M6 6l12 12"
                        />
                     </svg>
                  </button>
               ) : (
                  <button
                     onClick={() => setNavbarOpen(true)}
                     aria-label="Navbar Button"
                     className="flex items-center rounded px-3 py-2 border border-slate-200 text-slate-200 hover:text-white hover:border-white"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                     </svg>
                  </button>
               )}
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
               <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                  {navLinks.map((link, index) => (
                     <li key={index}>
                        <NavLink2
                           onClick={() => scrollToSection(link.path, link.offset)}
                           title={link.title}
                        />
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         {navbarOpen
            ? navLinks.map((link, index) => (
               <li key={index}>
               <NavLink
                  onClick={() => scrollToSection(link.path, link.offset)}
                  title={link.title}
               />
               </li>
                  ))
            : null}
      </nav>
   );
}
