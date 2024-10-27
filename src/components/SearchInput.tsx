import { SearchIcon } from "./Icons";

const SearchInput = () => {
  return (
    <div className="search-field">
      <label htmlFor="search">
        <SearchIcon />
      </label>
      <input
        type="search"
        id="search"
        placeholder="Search here..."
        autoComplete="off"
      />
    </div>
  );
};

export default SearchInput;
