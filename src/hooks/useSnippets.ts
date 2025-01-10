import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppContext } from "@contexts/AppContext";
import { CategoryType } from "@types";
import { QueryParams } from "@utils/enums";
import { slugify } from "@utils/slugify";

import { useFetch } from "./useFetch";

export const useSnippets = () => {
  const [searchParams] = useSearchParams();

  const { language, category } = useAppContext();
  const { data, loading, error } = useFetch<CategoryType[]>(
    `/consolidated/${slugify(language.name)}.json`
  );

  const fetchedSnippets = useMemo(() => {
    if (!data) {
      return [];
    }

    if (searchParams.has(QueryParams.SEARCH)) {
      return data
        .find((item) => item.name === category)
        ?.snippets.filter((item) =>
          item.title
            .toLowerCase()
            .includes(
              (searchParams.get(QueryParams.SEARCH) || "").toLowerCase()
            )
        );
    }
    return data.find((item) => item.name === category)?.snippets;
  }, [category, data, searchParams]);

  return { fetchedSnippets, loading, error };
};
