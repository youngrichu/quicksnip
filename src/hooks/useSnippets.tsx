import { useState, useEffect } from "react";
import { LanguageData } from "../types";
import slugify from "../utils/slugify";

type SnippetType = {
  title: string;
  description: string;
  code: string;
  tags: string[];
  author: string;
};

export const useSnippets = (language: string, category: string) => {
  const [fetchedSnippets, setFetchedSnippets] = useState<SnippetType[]>([]);

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const res = await fetch(`/data/${slugify(language)}.json`);
        if (!res.ok) {
          throw new Error("Failed to fetch language data");
        }

        const data: LanguageData = await res.json();

        const fetchedCategory = data.find(
          (item) => slugify(item.categoryName) === slugify(category)
        );
        const snippets = fetchedCategory ? fetchedCategory.snippets : [];

        setFetchedSnippets(snippets);
      } catch (error) {
        throw new Error("Something went wrong!" + error);
      }
    };

    fetchSnippets();
  }, [language, category]);

  return { fetchedSnippets };
};
