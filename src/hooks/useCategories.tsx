import { useEffect, useState } from "react";
import { LanguageData } from "../types";

export const useCategories = (language: string) => {
  const [fetchedCategories, setFetchedCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`/data/${language}.json`);
        if (!res.ok) {
          throw new Error("Failed to fetch languages in CategoryList.tsx");
        }
        const data: LanguageData = await res.json();
        const filteredCategoryNames = data.map(
          (category) => category.categoryName
        );

        setFetchedCategories(filteredCategoryNames);
      } catch (error) {
        console.error("Error occured with CategoryList.tsx", error);
      }
    };

    fetchCategories();
  }, [language]);

  return { fetchedCategories };
};
