   "use client";
   import { useEffect, useState } from "react";

   const ScrollUpButton = () => {
      const [isVisible, setIsVisible] = useState(false);

      const handleScroll = () => {
         if (window.scrollY > 240) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
      };

      const scrollToTop = () => {
         window.scrollTo({
            top: 0,
            behavior: "smooth",
         });
      };

      useEffect(() => {
         window.addEventListener("scroll", handleScroll);
         return () => {
            window.removeEventListener("scroll", handleScroll);
         };
      }, []);

      return (
         <button
            className={`${
               isVisible ? "block" : "hidden"
            } fixed top-60 left-4 p-4 m-1 2xl:ml-12 2xl:p-6 gradient-background2 z-50 text-white rounded-full cursor-pointer`}
            onClick={scrollToTop}
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={1.5}
               stroke="currentColor"
               className="w-6 h-6 2xl:w-12 2xl:h-12"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
               />
            </svg>
         </button>
      );
   };

   export default ScrollUpButton;
