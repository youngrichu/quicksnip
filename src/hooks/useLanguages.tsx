import { LanguageType } from "../types";
import { useFetch } from "./useFetch";

export const useLanguages = () => {
  const { data, loading, error } = useFetch<LanguageType[]>("/data/index.json");

  return { fetchedLanguages: data || [], loading, error };
};
