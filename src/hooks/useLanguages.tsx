import { useEffect, useState } from "react";

type LanguageType = {
  language: string;
  icon: string;
};

export const useLanguages = () => {
  const [fetchedLanguages, setFetchedLanguages] = useState<LanguageType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const res = await fetch(`/data/index.json`);
        if (!res.ok) {
          throw new Error("Failed to fetch languages");
        }
        const data = await res.json();
        setFetchedLanguages(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchLanguages();
  }, []);

  return { fetchedLanguages, loading, error };
};
