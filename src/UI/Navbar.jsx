import { IoMenu } from "react-icons/io5";
import NavbarBtns from "./NavbarBtns";
import NavbarLinks from "./NavbarLinks";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="border-b border-b-gray-200 p-5 shadow-sm lg:px-16 lg:py-6">
      <div className="container flex flex-row items-center justify-between">
        <IoMenu className="block h-6 w-6 text-primary md:hidden" />

        <Link to="/">
          <img
            src="/Images/Logo.svg"
            alt="Tharkhineh-Logo"
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
