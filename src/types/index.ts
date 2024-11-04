export type SnippetCardProps = {
  title: string;
  description: string;
  code: string;
  tags: string[];
  author: string;
  language: string;
  category: string;
};

export type SnippetType = {
  title: string;
  description: string;
  code: string;
  tags: string[];
  author: string;
};

export type CategoryType = {
  categoryName: string;
  snippets: SnippetType[];
};

export type LanguageData = CategoryType[];

export type CategoryProps = {
  title: string;
  language: string;
};
