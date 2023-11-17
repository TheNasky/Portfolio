import NavLink from "./navLink";

export default function MenuOverlay({ links }) {
   return (
      <ul className="flex flex-col py-4 items-center ">
         {links.map((onClick, index) => (
            <li key={index}>
               <NavLink onClick={onClick} title={link.title}></NavLink>
            </li>
         ))}{" "}
      </ul>
   );
}
