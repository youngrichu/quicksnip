import { useMemo } from "react";

import { useAppContext } from "contexts";
import { SnippetType } from "types";
import { slugify } from "utils";

import { useFetch } from "./";

type CategoryData = {
  categoryName: string;
  snippets: SnippetType[];
};

export const useCategories = () => {
  const { language } = useAppContext();
  const { data, loading, error } = useFetch<CategoryData[]>(
    `/data/${slugify(language.lang)}.json`
  );

  const fetchedCategories = useMemo(() => {
    return data ? data.map((item) => item.categoryName) : [];
  }, [data]);

  return { fetchedCategories, loading, error };
};
