export type RawSnippetType = {
  title: string;
  description: string;
  author: string;
  code: string;
  tags: string;
  contributors?: string;
};

export type SnippetType = {
  title: string;
  description: string;
  author: string;
  code: string;
  tags: string[];
  contributors: string[];
};

export type CategoryType = {
  name: string;
  snippets: SnippetType[];
};

export type LanguageType = {
  name: string;
  icon: string;
  subIndexes: {
    name: string;
    icon: string;
  }[];
};

export type AllSnippetsType = {
  languageName: LanguageType["name"];
  languageIcon: LanguageType["icon"];
  categories: CategoryType[];
};

export type SearchItemType = {
  languageName: LanguageType["name"];
  languageIcon: LanguageType["icon"];
  categoryName: CategoryType["name"];
  snippets: SnippetType[];
};

export type AppState = {
  language: LanguageType;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageType>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  snippet: SnippetType | null;
  setSnippet: React.Dispatch<React.SetStateAction<SnippetType | null>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};
