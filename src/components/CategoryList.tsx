import { useParams } from "react-router-dom";
import Category from "./Category";
import { useEffect, useState } from "react";
import { LanguageData } from "../types";
import { getCategoryNames } from "../utils/filters";

const CategoryList = () => {
  const { language } = useParams();
  const [categoryNames, setCategoryNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`/data/${language}.json`);
        if (!res.ok) {
          throw new Error("Failed to fetch languages in CategoryList.tsx");
        }
        const data: LanguageData = await res.json();
        const filteredCategoryNames = getCategoryNames(data);

        setCategoryNames(filteredCategoryNames);
      } catch (error) {
        console.error("Error occured with CategoryList.tsx", error);
      }
    };

    fetchCategories();
  }, [language]);

  if (!categoryNames) {
    return <div>empty</div>;
  }

  return (
    <>
      <ul role="list" className="categories">
        {categoryNames.map((name) => (
          <Category key={name} title={name} language={language || ""} />
        ))}
      </ul>
    </>
  );
};

export default CategoryList;
