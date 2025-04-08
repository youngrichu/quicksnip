import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppContext } from "@contexts/AppContext";
import { CategoryType } from "@types";
import { defaultCategoryName } from "@utils/consts";
import { QueryParams } from "@utils/enums";
import { getLanguageFileName } from "@utils/languageUtils";
import { slugify } from "@utils/slugify";

import { useFetch } from "./useFetch";

export const useSnippets = () => {
  const [searchParams] = useSearchParams();

  const { language, subLanguage, category } = useAppContext();

  const fileName = useMemo(
    () => getLanguageFileName(language.name, subLanguage),
    [language.name, subLanguage]
  );

  const { data, loading, error } = useFetch<CategoryType[]>(fileName);

  const fetchedSnippets = useMemo(() => {
    if (!data) {
      return [];
    }

    // If the category is the default category, return all snippets for the given language.
    const snippets =
      slugify(category) === slugify(defaultCategoryName)
        ? data.flatMap((item) => item.snippets)
        : (data.find((item) => item.name === category)?.snippets ?? []);

    if (!searchParams.has(QueryParams.SEARCH)) {
      return snippets;
    }

    return snippets.filter((item) => {
      const searchTerm = (
        searchParams.get(QueryParams.SEARCH) || ""
      ).toLowerCase();
      return (
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
      );
    });
  }, [category, data, searchParams]);

  return { fetchedSnippets, loading, error };
};
