/* eslint-disable */
const { default: Link } = require("next/link");

const NavLink = ({ onClick, title }) => {
   return (
      <button
         onClick={onClick}
         className="block py-2 pl-3 pr-4 uppercase text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      >
         {title}
      </button>
   );
};

export default NavLink;
