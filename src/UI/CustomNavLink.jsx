import { NavLink } from "react-router-dom";

function CustomNavLink({ to, children, className }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `${className} flex flex-row items-center gap-x-2 text-primary md:border-b md:border-b-primary md:font-bold`
          : "flex flex-row items-center gap-x-2"
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}
export default CustomNavLink;
