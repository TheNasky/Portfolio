import Link from "next/link";
export default function Footer() {
   return (
      <footer className="footer border border-t-[#33353f] border-l-transparent border-r-transparent border-b-transparent text-white ">
         <div className=" px-12 pt-4 pb-1 2xl:py-8 flex justify-between items-center">
            <Link href={"/"} className="text-1xl md:text-3xl text-white font-semibold">
               <span className="font-extrabold">Valentín</span>
               <span className="font-extralight">Ballesteros</span>
               <span className="font-extrabold text-transparent bg-clip-text gradient-background">
                  .
               </span>
            </Link>
            <p className="text-[#ADB7BE] text-sm">All Rights Reserved.</p>
         </div>
      </footer>
   );
}
