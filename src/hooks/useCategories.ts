import { useMemo } from "react";

import { useAppContext } from "@contexts/AppContext";
import { CategoryType } from "@types";
import { getLanguageFileName } from "@utils/languageUtils";

import { useFetch } from "./useFetch";

export const useCategories = () => {
  const { language, subLanguage } = useAppContext();

  const fileName = useMemo(
    () => getLanguageFileName(language.name, subLanguage),
    [language.name, subLanguage]
  );

  const { data, loading, error } = useFetch<CategoryType[]>(fileName);

  const fetchedCategories = useMemo(() => {
    return data ? data.map((item) => item.name) : [];
  }, [data]);

  return { fetchedCategories, loading, error };
};
