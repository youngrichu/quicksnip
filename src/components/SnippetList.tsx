import { useParams } from "react-router-dom";
import SnippetCard from "./SnippetCard";
import { LanguageData, SnippetType } from "../types";
import { useEffect, useState } from "react";
import { getCategoryNames, getSnippetsByCategory } from "../utils/filters";
import slugify from "../utils/slugify";

const SnippetList = () => {
  const { language, category } = useParams();
  const [snippets, setSnippets] = useState<SnippetType[] | null>(null);
  const [categoryTitle, setCategoryTitle] = useState<string>("");

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const res = await fetch(`/data/${language}.json`);
        if (!res.ok) {
          throw new Error("Failed to fetch languages in SnippetList.tsx");
        }
        const data: LanguageData = await res.json();

        const filteredCategoryTitle = getCategoryNames(data).find(
          (item) => slugify(item) === slugify(category || "")
        );
        setCategoryTitle(filteredCategoryTitle || "");

        // TODO: instead of "", use default category as fallback
        const filteredSnippets = getSnippetsByCategory(data, category || "");
        setSnippets(filteredSnippets);
      } catch (error) {
        console.error("Error occured with SnippetList.tsx: ", error);
      }
    };

    fetchSnippets();
  }, [category]);

  if (!snippets) return <div>empty</div>;

  return (
    <section className="flow">
      <h2 className="section-title">{categoryTitle}</h2>
      <ul role="list" className="snippets">
        {snippets.map((snippet) => (
          <SnippetCard
            key={snippet.title}
            language={language || ""}
            category={category || ""}
            {...snippet}
          />
        ))}
      </ul>
    </section>
  );
};

export default SnippetList;
