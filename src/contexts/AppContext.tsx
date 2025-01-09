import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";

import { useLanguages } from "@hooks/useLanguages";
import { AppState, CategoryType, LanguageType, SnippetType } from "@types";
import { defaultLanguage } from "@utils/consts";
import { slugify } from "@utils/slugify";

// TODO: add custom loading and error handling
const defaultState: AppState = {
  language: null as unknown as AppState["language"],
  setLanguage: () => {},
  category: null as unknown as AppState["category"],
  setCategory: () => {},
  snippet: null,
  setSnippet: () => {},
  searchText: "",
  setSearchText: () => {},
};

const AppContext = createContext<AppState>(defaultState);

export const AppProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { languageName, categoryName } = useParams();

  const { fetchedLanguages } = useLanguages();

  const [language, setLanguage] = useState<LanguageType | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [snippet, setSnippet] = useState<SnippetType | null>(null);
  const [searchText, setSearchText] = useState<string>("");

  const assignLanguage = useCallback(() => {
    if (fetchedLanguages.length === 0) {
      return;
    }

    const language = fetchedLanguages.find(
      (lang) => slugify(lang.name) === languageName
    );
    if (!language) {
      setLanguage(defaultLanguage);
      return;
    }
    setLanguage(language);
  }, [fetchedLanguages, languageName]);

  const assignCategory = useCallback(async () => {
    if (!language) {
      return;
    }

    let category: CategoryType | undefined;
    try {
      const res = await fetch(`/consolidated/${slugify(language.name)}.json`);
      const data: CategoryType[] = await res.json();
      category = data.find((item) => item.name === categoryName);
      if (!category) {
        setCategory(data[0].name);
        return;
      }
      setCategory(category.name);
    } catch (_error) {
      // no-op
    }
  }, [language, categoryName]);

  useEffect(() => {
    assignLanguage();
  }, [assignLanguage, languageName]);

  useEffect(() => {
    assignCategory();
  }, [assignCategory, categoryName]);

  if (!language || !category) {
    return <div>Loading...</div>;
  }

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage: setLanguage as AppState["setLanguage"],
        category,
        setCategory: setCategory as AppState["setCategory"],
        snippet,
        setSnippet,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);
