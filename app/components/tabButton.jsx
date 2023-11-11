export default function TabButton({ active, selectTab, children }) {
   const buttonClasses = active ? "text-white border-b border-[#3fcb7c]" : "text-[#ADB7BE]";
   return (
      <button onClick={selectTab}>
         <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>{children}</p>
      </button>
   );
}
