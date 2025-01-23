import { NavLink } from "react-router-dom";
import { useToggle } from "../Contexts/ToggleContext";

function CustomNavLink({ to, children, className }) {
  const { setIsToggleOpen } = useToggle();

  return (
    <NavLink
      to={to}
      onClick={() => setIsToggleOpen(false)}
      className={({ isActive }) =>
        isActive
          ? `${className} flex flex-row items-center gap-x-2 text-primary md:border-b md:border-b-primary md:font-bold`
          : "flex flex-row items-center gap-x-2"
      }
    >
      {children}
    </NavLink>
  );
}
export default CustomNavLink;
