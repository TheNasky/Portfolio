import NavLink from "./navLink";

export default function MenuOverlay({ links }) {
   return (
      <ul className="flex flex-col py-4 items-center ">
         {links.map((link, index) => (
            <li key={index}>
               <NavLink href={link.path} title={link.title}></NavLink>
            </li>
         ))}{" "}
      </ul>
   );
}
