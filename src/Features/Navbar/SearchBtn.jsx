import { CiSearch } from "react-icons/ci";
import Modal from "../../UI/Modal";
import SearchBar from "../../UI/SearchBar";
import { useState } from "react";

function SearchBtn() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsSearchOpen(true)}
        className="hidden rounded bg-tint-100 p-1 lg:block"
      >
        <CiSearch className="icon text-primary" />
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
export default SearchBtn;
