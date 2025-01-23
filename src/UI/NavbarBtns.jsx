import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";

function NavbarBtns() {
  return (
    <div className="flex items-center gap-x-1 md:gap-x-2">
      <button className="rounded bg-tint-100 p-1">
        <CiSearch className="icon text-primary" />
      </button>

      <button className="rounded bg-tint-100 p-1">
        <CiShoppingCart className="icon text-primary" />
      </button>

      <button className="hidden rounded bg-tint-100 p-1 lg:block">
        <CiUser className="icon text-primary" />
      </button>
    </div>
  );
}
export default NavbarBtns;
