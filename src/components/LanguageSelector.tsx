import React, { useState, useRef, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { useLanguages } from "../hooks/useLanguages";
import { LanguageType } from "../types";

// Inspired by https://blog.logrocket.com/creating-custom-select-dropdown-css/

const LanguageSelector = () => {
  const { language, setLanguage } = useAppContext();
  const { fetchedLanguages, loading, error } = useLanguages();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageType>(language);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (langObj: LanguageType) => {
    const selected = fetchedLanguages.find(
      (item) => item.lang === langObj.lang
    );
    if (selected) {
      setSelectedLanguage(selected);
      setLanguage(selected);
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleKeyDown = (event: React.KeyboardEvent, lang: LanguageType) => {
    if (event.key === "Enter") {
      handleLanguageChange(lang);
    } else if (event.key === "Escape") {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loading) {
    return <p>Loading languages...</p>;
  }

  if (error) {
    return <p>Error fetching languages: {error}</p>;
  }

  return (
    <div
      className={`selector ${isDropdownOpen ? "selector--open" : ""}`}
      ref={dropdownRef}
    >
      <button
        className="selector__button"
        aria-label="select button"
        aria-haspopup="listbox"
        aria-expanded={isDropdownOpen}
        onClick={toggleDropdown}
      >
        <div className="selector__value">
          <img src={selectedLanguage.icon} alt="" />
          <span>{selectedLanguage.lang || "Select a language"}</span>
        </div>
        <span className="selector__arrow"></span>
      </button>
      {isDropdownOpen && (
        <ul className="selector__dropdown" role="listbox">
          {fetchedLanguages.map((lang) => (
            <li
              key={lang.lang}
              role="option"
              tabIndex={0}
              onClick={() => handleLanguageChange(lang)}
              onKeyDown={(e) => handleKeyDown(e, lang)}
              className={`selector__item ${
                selectedLanguage.lang === lang.lang ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                id={`selector-for-${lang.lang}`}
                name="language"
                value={lang.lang}
                checked={selectedLanguage === lang}
                readOnly
              />
              <label htmlFor={`selector-for-${lang.lang}`}>
                <img src={lang.icon} alt="" />
                <span>{lang.lang}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
