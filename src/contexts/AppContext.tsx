import { createContext, FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useLanguages } from "@hooks/useLanguages";
import { AppState, LanguageType, SnippetType } from "@types";
import { configureProfile } from "@utils/configureProfile";

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

  const configure = async () => {
    const { language, category } = await configureProfile({
      languageName,
      categoryName,
    });

    setLanguage(language);
    setCategory(category);
  };

  useEffect(() => {
    configure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedLanguages]);

  if (language === null || category === null) {
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
