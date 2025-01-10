import { useCallback, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppContext } from "@contexts/AppContext";
import { QueryParams } from "@utils/enums";

import { SearchIcon } from "./Icons";

const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { searchText, setSearchText } = useAppContext();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearchFieldClick = () => {
    inputRef.current?.focus();
  };

  const handleSearchKeyPress = (e: KeyboardEvent) => {
    if (e.key === "/") {
      e.preventDefault();
      inputRef.current?.focus();
    }
  };

  const clearSearch = useCallback(() => {
    setSearchText("");
    searchParams.delete(QueryParams.SEARCH);
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, setSearchText]);

  const handleEscapePress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== "Escape") {
        return;
      }

      // check if the input is focused
      if (document.activeElement !== inputRef.current) {
        return;
      }

      inputRef.current?.blur();

      clearSearch();
    },
    [clearSearch]
  );

  const handleReturnPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== "Enter") {
        return;
      }

      // check if the input is focused
      if (document.activeElement !== inputRef.current) {
        return;
      }

      const formattedVal = searchText.trim().toLowerCase() || "";

      setSearchText(formattedVal);
      if (!formattedVal) {
        searchParams.delete(QueryParams.SEARCH);
        setSearchParams(searchParams);
      } else {
        searchParams.set(QueryParams.SEARCH, formattedVal);
        setSearchParams(searchParams);
      }
    },
    [searchParams, searchText, setSearchParams, setSearchText]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleSearchKeyPress);
    document.addEventListener("keyup", handleEscapePress);
    document.addEventListener("keyup", handleReturnPress);

    return () => {
      document.removeEventListener("keyup", handleSearchKeyPress);
      document.removeEventListener("keyup", handleEscapePress);
      document.removeEventListener("keyup", handleReturnPress);
    };
  }, [handleEscapePress, handleReturnPress]);

  /**
   * Set the search text to the search query from the URL
   */
  useEffect(() => {
    const searchQuery = searchParams.get(QueryParams.SEARCH);
    if (!searchQuery) {
      return;
    }

    setSearchText(searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="search-field" onClick={handleSearchFieldClick}>
      <SearchIcon />
      <input
        ref={inputRef}
        value={searchText}
        type="search"
        id="search"
        autoComplete="off"
        onChange={(e) => {
          const newValue = e.target.value;
          if (!newValue) {
            clearSearch();
            return;
          }
          setSearchText(newValue);
        }}
      />
      {!searchText && (
        <label htmlFor="search">
          Type <kbd>/</kbd> to search
        </label>
      )}
    </div>
  );
};

export default SearchInput;
