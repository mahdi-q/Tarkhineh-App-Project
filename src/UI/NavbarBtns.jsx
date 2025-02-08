import { useState } from "react";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import Modal from "./Modal";
import SearchBar from "./SearchBar";

function NavbarBtns() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex items-center gap-x-1 md:gap-x-2">
      <button
        onClick={() => setIsSearchOpen(true)}
        className="hidden rounded bg-tint-100 p-1 lg:block"
      >
        <CiSearch className="icon text-primary" />
      </button>

      <button className="rounded bg-tint-100 p-1">
        <CiShoppingCart className="icon text-primary" />
      </button>

      <button className="rounded bg-tint-100 p-1">
        <CiUser className="icon text-primary" />
      </button>

      <Modal
        title={"جستجو"}
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      >
        <div className="flex flex-col items-center justify-center rounded-b-lg bg-white p-10 xl:px-20">
          <p>لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.</p>

          <SearchBar />
        </div>
      </Modal>
    </div>
  );
}
export default NavbarBtns;
