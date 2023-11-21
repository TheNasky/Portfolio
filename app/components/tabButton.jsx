import { motion } from "framer-motion";

const variants = {
   default: { width: 0 },
   active: { width: "calc(100% - 0.75rem)" },
};

export default function TabButton({ active, selectTab, children }) {
   const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
   return (
      <button onClick={selectTab}>
         <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>{children}</p>
         <motion.div
            animate={active ? "active" : "default"}
            variants={variants}
            className="h-0.5 bg-[#3fcb7c] mt-1 mr-3"
         ></motion.div>
      </button>
   );
}
