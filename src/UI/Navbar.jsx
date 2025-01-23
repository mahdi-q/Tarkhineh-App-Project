import NavbarBtns from "./NavbarBtns";
import NavbarLinks from "./NavbarLinks";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useToggle } from "../Contexts/ToggleContext";

function Navbar() {
  const { isToggleOpen } = useToggle();

  return (
    <div className="border-b border-b-gray-200 p-5 shadow-sm lg:px-16 lg:py-6">
      <div className="container flex flex-row items-center justify-between">
        <div
          className={
            isToggleOpen
              ? "fixed left-0 top-0 h-screen w-full bg-gray-600/30 backdrop-blur-sm"
              : ""
          }
        >
          <Sidebar />
        </div>

        <Link to="/">
          <img
            src="/Images/Logo.svg"
            alt="tharkhineh-logo"
            className="h-10 w-32 lg:h-12 lg:w-36"
          />
        </Link>

        <div className="hidden md:block">
          <NavbarLinks />
        </div>

        <NavbarBtns />
      </div>
    </div>
  );
}
export default Navbar;
