import { useFetch } from "./useFetch";
import { useAppContext } from "../contexts/AppContext";
import { SnippetType } from "../types";
import slugify from "../utils/slugify";

type CategoryData = {
  categoryName: string;
  snippets: SnippetType[];
};

export const useCategories = () => {
  const { language } = useAppContext();
  const { data, loading, error } = useFetch<CategoryData[]>(
    `/data/${slugify(language.lang)}.json`
  );

  const fetchedCategories = data ? data.map((item) => item.categoryName) : [];

  return { fetchedCategories, loading, error };
};
