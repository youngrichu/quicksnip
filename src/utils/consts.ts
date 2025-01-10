import { AppState, CategoryType, LanguageType } from "@types";

export const defaultLanguage: LanguageType = {
  name: "JAVASCRIPT",
  icon: "/icons/javascript.svg",
  subIndexes: [],
};

export const defaultCategory: CategoryType = {
  name: "",
  snippets: [],
};

// TODO: add custom loading and error handling
export const defaultState: AppState = {
  language: defaultLanguage,
  setLanguage: () => {},
  category: defaultCategory.name,
  setCategory: () => {},
  snippet: null,
  setSnippet: () => {},
  searchText: "",
  setSearchText: () => {},
};
