/* eslint-disable */
const { default: Link } = require("next/link");

const NavLink2 = ({ onClick, title }) => {
   return (
      <button
         onClick={onClick}
         className="relative font-medium -top-1 -left-1 hover:top-0 hover:left-0 transition-all bg-[#181818] py-2.5 px-5 uppercase text-[#ADB7BE] hover:text-white before:content-[''] before:absolute before:top-1 before:left-1 before:hover:top-0 before:hover:left-0 before:w-full before:h-full before:border-2 before:hover:border-[#181818] before:border-[#3fcb7c] before:-z-10 before:transition-all before:rounded-full rounded-full "
      >
         {title}
      </button>
   );
};


export default NavLink2;
