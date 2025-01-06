import { useEffect, useState } from "react";

import { useAppContext } from "@contexts/AppContext";
import { LanguageType } from "@types";

type SubLanguageSelectorProps = {
  mainLanguage: LanguageType;
  afterSelect: () => void;
  onDropdownToggle: (openedLang: LanguageType) => void;
  opened: boolean;
};

const SubLanguageSelector = ({
  mainLanguage,
  afterSelect,
  onDropdownToggle,
  opened,
}: SubLanguageSelectorProps) => {
  const { language, setLanguage } = useAppContext();
  const [isOpen, setIsOpen] = useState(
    mainLanguage.subLanguages.some(
      (subLanguage) => language.name === subLanguage.name
    )
  );

  const handleSelect = (selected: LanguageType) => {
    setLanguage(selected);
    setIsOpen(false);
    onDropdownToggle(mainLanguage);
    afterSelect();
  };

  return (
    <>
      <li
        key={mainLanguage.name}
        role="option"
        tabIndex={-1}
        className={`selector__item ${
          language.name === mainLanguage.name ? "selected" : ""
        }`}
        aria-selected={language.name === mainLanguage.name}
        onClick={() => setLanguage(mainLanguage)}
      >
        <label>
          <img src={mainLanguage.icon} alt={mainLanguage.name} />
          <span>{mainLanguage.name}</span>
          <button
            className="sublanguage__button"
            tabIndex={-1}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            <span className="sublanguage__arrow" />
          </button>
        </label>
      </li>

      {(opened || isOpen) && (
        <>
          {mainLanguage.subLanguages.map((subLanguage) => (
            <li
              key={subLanguage.name}
              role="option"
              tabIndex={-1}
              className={`selector__item sublanguage__item ${
                language.name === subLanguage.name ? "selected" : ""
              }`}
              aria-selected={language.name === subLanguage.name}
              onClick={() => {
                handleSelect({
                  ...subLanguage,
                  mainLanguage: mainLanguage,
                  subLanguages: [],
                });
                setIsOpen(false);
              }}
            >
              <label>
                <img src={subLanguage.icon} alt={subLanguage.name} />
                <span>{subLanguage.name}</span>
              </label>
            </li>
          ))}
        </>
      )}
    </>
  );
};

export default SubLanguageSelector;
