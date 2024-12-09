import { createContext, useContext, useState } from "react";
import { AppState, LanguageType, SnippetType } from "../types";

// tokens
const defaultLanguage: LanguageType = {
  lang: "CSS",
  icon: "/icons/css.svg",
};

// TODO: add custom loading and error handling
const defaultState: AppState = {
  language: defaultLanguage,
  setLanguage: () => {},
  category: "",
  setCategory: () => {},
  snippet: null,
  setSnippet: () => {},
};

const AppContext = createContext<AppState>(defaultState);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<LanguageType>(defaultLanguage);
  const [category, setCategory] = useState<string>("");
  const [snippet, setSnippet] = useState<SnippetType | null>(null);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        category,
        setCategory,
        snippet,
        setSnippet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
