import { LanguageType } from "@types";

import { useFetch } from "./useFetch";

export const useLanguages = () => {
  const { data, loading, error } =
    useFetch<LanguageType[]>("/data/_index.json");

  return { fetchedLanguages: data || [], loading, error };
};
