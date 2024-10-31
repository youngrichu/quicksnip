export type SnippetCardProps = {
  title: string;
  description: string;
  code: string;
  tags: string[];
  author: string;
  language?: string;
  category?: string;
};

export type CategoryProps = {
  title: string;
  language: string;
};

export type LanguageTypes = {
  languages: string[];
};

export type SnippetType = {
  title: string;
  description: string;
  code: string;
  tags: string[];
  author: string;
};

export type CategoriesType = {
  categoryName: string;
  snippets: SnippetType[];
};

export type FileType = CategoriesType[];
