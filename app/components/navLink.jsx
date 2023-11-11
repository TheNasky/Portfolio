/* eslint-disable */
const { default: Link } = require("next/link");

const NavLink = ({ href, title }) => {
   return (
      <Link
         href={href}
         className="block py-2 pl-3 pr-4 uppercase text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      >
         {title}
      </Link>
   );
};

export default NavLink;
