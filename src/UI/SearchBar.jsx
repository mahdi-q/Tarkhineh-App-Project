import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className="mx-auto mt-4 flex w-[80%] items-center justify-between gap-x-6 rounded border border-gray-400 px-4 py-2">
      <input
        placeholder="جستجو"
        className="w-full text-sm text-gray-800 placeholder:text-gray-800"
        type="text"
      />

      <CiSearch className="icon" />
    </div>
  );
}
export default SearchBar;
