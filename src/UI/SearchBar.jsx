import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { createSearchParams, useNavigate } from "react-router-dom";

function SearchBar({ pathname = "", onClose = () => {}, defaultValue = "" }) {
  const [searchValue, setSearchValue] = useState(defaultValue);

  const navigate = useNavigate();

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onSearch = () => {
    if (searchValue.trim().length > 0) {
      navigate({
        pathname: pathname,
        search: createSearchParams({
          q: searchValue.trim().replace(/\s+/g, " ").split(" ").join("+"),
        }).toString(),
      });

      setSearchValue("");
      onClose();
    }
  };

  return (
    <div className="mx-auto mt-4 flex w-[80%] items-center justify-between gap-x-6 rounded border border-gray-400 px-4 py-2 focus-within:border-primary hover:border-primary">
      <input
        placeholder="جستجو"
        className="w-full text-sm text-gray-800 placeholder:text-gray-800"
        type="text"
        value={searchValue}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch();
        }}
      />

      <button onClick={onSearch}>
        <CiSearch className="icon" />
      </button>
    </div>
  );
}
export default SearchBar;
