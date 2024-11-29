import { LanguageType, useLanguages } from "../hooks/useLanguages";
import { LanguageData, SnippetType } from "../types";
import slugify from "./slugify";

// export const getLanguageInfo = (language: string) => {
//   const { languages } = useLanguages();

//   for (let i = 0; i < languages.length; i++) {
//     if (slugify(languages[i].language) === slugify(language)) {
//       return languages[i];
//     }
//   }

//   return languages[0];
// };

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
