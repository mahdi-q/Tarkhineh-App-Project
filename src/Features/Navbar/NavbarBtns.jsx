import { CiShoppingCart, CiUser } from "react-icons/ci";
import SearchBtn from "./SearchBtn";

function NavbarBtns() {
  return (
    <div className="flex items-center gap-x-1 md:gap-x-2">
      <SearchBtn/>
      
      <button className="rounded bg-tint-100 p-1">
        <CiShoppingCart className="icon text-primary" />
      </button>

      <button className="rounded bg-tint-100 p-1">
        <CiUser className="icon text-primary" />
      </button>
    </div>
  );
}
export default NavbarBtns;
