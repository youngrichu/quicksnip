import { useMemo } from "react";

import { useAppContext } from "@contexts/AppContext";
import { CategoryType } from "@types";
import { slugify } from "@utils/slugify";

import { useFetch } from "./useFetch";

export const useSnippets = () => {
  const { language, category, searchText } = useAppContext();
  const { data, loading, error } = useFetch<CategoryType[]>(
    `/consolidated/${slugify(language.name)}.json`
  );

  const fetchedSnippets = useMemo(() => {
    if (!data) {
      return [];
    }

    if (searchText) {
      return data
        .find((item) => item.name === category)
        ?.snippets.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        );
    }
    return data.find((item) => item.name === category)?.snippets;
  }, [category, data, searchText]);

  return { fetchedSnippets, loading, error };
};
