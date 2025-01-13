import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useAppContext } from "@contexts/AppContext";
import { useFetch } from "@hooks/useFetch";
import { AllSnippetsType, SearchItemType } from "@types";
import { QueryParams } from "@utils/enums";
import { slugify } from "@utils/slugify";

import Button from "./Button";
import { CloseIcon, SearchIcon } from "./Icons";

const SearchInput = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const { searchText, setSearchText } = useAppContext();
  const { data } = useFetch<AllSnippetsType[]>(`/consolidated/all.json`);

  const filteredData: SearchItemType[] = useMemo(() => {
    if (!data) {
      return [];
    }

    const searchTerm = searchText.toLowerCase();

    return data
      .map((language) => {
        const filteredCategories = language.categories
          .map((category) => {
            const filteredSnippets = category.snippets.filter(
              (snippet) =>
                snippet.title.toLowerCase().includes(searchTerm) ||
                snippet.description.toLowerCase().includes(searchTerm) ||
                snippet.tags.some((tag) =>
                  tag.toLowerCase().includes(searchTerm)
                )
            );

            if (filteredSnippets.length > 0) {
              return {
                categoryName: category.name,
                snippets: filteredSnippets,
              };
            }

            return null;
          })
          .filter(Boolean); // Remove null categories

        if (filteredCategories.length > 0) {
          return filteredCategories.map((filteredCategory) => ({
            languageName: language.languageName,
            languageIcon: language.languageIcon,
            categoryName: filteredCategory!.categoryName,
            snippets: filteredCategory!.snippets,
          }));
        }

        return [];
      })
      .flat();
  }, [data, searchText]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const handleSearchFieldClick = () => {
    setSearchOpen(true);
  };

  const handleInnerSearchFieldClick = () => {
    inputRef.current?.focus();
  };

  const clearSearch = useCallback(() => {
    setSearchText("");
    searchParams.delete(QueryParams.SEARCH);
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, setSearchText]);

  /**
   * Focus the search input when the user presses the `/` key.
   */
  const handleSearchKeyPress = (e: KeyboardEvent) => {
    if (e.key === "/") {
      e.preventDefault();
      setSearchOpen(true);
    }
  };

  /**
   * Clear search text and blur the input when the `Escape` key is pressed.
   */
  const handleEscapeKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== "Escape") {
        return;
      }

      setSearchOpen(false);
      clearSearch();
    },
    [clearSearch]
  );

  const handleSearchItemClick =
    ({
      languageName,
      categoryName,
      snippetName,
    }: {
      languageName: string;
      categoryName: string;
      snippetName: string;
    }) =>
    () => {
      navigate(
        `/${slugify(languageName)}/${slugify(categoryName)}?${QueryParams.SEARCH}=${searchText.toLowerCase()}&${QueryParams.SNIPPET}=${slugify(snippetName)}`,
        { replace: true }
      );
      setSearchOpen(false);
    };

  useEffect(() => {
    window.addEventListener("keydown", handleSearchKeyPress);
    window.addEventListener("keyup", handleEscapeKeyPress);

    return () => {
      window.removeEventListener("keydown", handleSearchKeyPress);
      window.removeEventListener("keyup", handleEscapeKeyPress);
    };
  }, [handleEscapeKeyPress]);

  /**
   * Set the search text to the search query from the URL on mount.
   */
  useEffect(() => {
    const searchQuery = searchParams.get(QueryParams.SEARCH);
    if (!searchQuery) {
      return;
    }

    setSearchText(searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchOpen) {
      inputRef.current?.focus();
    }
  }, [searchOpen]);

  return (
    <>
      <div className="search-field" onClick={handleSearchFieldClick}>
        <SearchIcon />
        <input
          disabled
          id="search"
          type="text"
          value={searchText}
          onChange={() => {}}
        />
        {!searchText && (
          <label htmlFor="search">
            Type <kbd>/</kbd> to search
          </label>
        )}
        {searchText && (
          <Button
            isIcon={true}
            className="search-field__clear"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              clearSearch();
            }}
          >
            <CloseIcon width="20" height="20" />
          </Button>
        )}
      </div>

      <div
        className={`search-field__results search-field__results${searchOpen ? "--open" : "--closed"}`}
      >
        <div
          className="search-field search-field--inner"
          onClick={handleInnerSearchFieldClick}
        >
          <SearchIcon />
          <input
            ref={inputRef}
            value={searchText}
            type="text"
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
          <Button
            isIcon={true}
            onClick={() => {
              setSearchOpen(false);
              clearSearch();
            }}
          >
            <CloseIcon />
          </Button>
        </div>

        <div className="search-field__results__list">
          {filteredData.map(
            (
              { languageName, languageIcon, categoryName, snippets },
              languageIndex
            ) => (
              <div key={`${languageName}-${languageIndex}`}>
                <ul>
                  {snippets.map((snippet, snippetIndex) => (
                    <li
                      key={`${languageName}-${categoryName}-${snippetIndex}`}
                      onClick={handleSearchItemClick({
                        languageName,
                        categoryName,
                        snippetName: snippet.title,
                      })}
                    >
                      <img src={languageIcon} alt={languageName} />
                      <div>
                        <h4>
                          {snippet.title} ({languageName})
                        </h4>
                        <p>{snippet.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default SearchInput;
