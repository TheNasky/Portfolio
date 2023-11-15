export default function ProjectTag({ name, onClick, isSelected }) {
   const buttonStyles = isSelected
      ? "text-white border-[#3fcb7c]"
      : "border-gray-600 text-[#ADB7BE] hover:border-white";
   return (
      <button
         className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl`}
         onClick={()=>onClick(name)}
      >
         {name}
      </button>
   );
}
