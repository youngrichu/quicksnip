import { LanguageData, SnippetType } from "../types";
import slugify from "./slugify";

export const getCategoryNames = (data: LanguageData): string[] => {
  return data.map((category) => category.categoryName);
};

export const getSnippetsByCategory = (
  data: LanguageData,
  categoryName: string
): SnippetType[] | null => {
  const category = data.find(
    (category) => slugify(category.categoryName) === slugify(categoryName)
  );
  return category ? category.snippets : null;
};

export const getSnippetByTitleAndCategory = (
  data: LanguageData,
  categoryName: string,
  title: string
): SnippetType | null => {
  const category = data.find(
    (category) => slugify(category.categoryName) === slugify(categoryName)
  );
  if (!category) return null;
  const snippet = category.snippets.find(
    (snippet) => slugify(snippet.title) === slugify(title)
  );
  return snippet || null;
};
