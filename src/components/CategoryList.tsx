import { useLoaderData, useParams } from "react-router-dom";
import { CategoryProps } from "../types";
import Category from "./Category";

const CategoryList = () => {
  const { language } = useParams();
  // const data = useLoaderData();

  const sampleData: CategoryProps[] = [
    {
      title: "DOM Manipulation",
    },
    {
      title: "API Requests",
    },
    {
      title: "Local Storage",
    },
    {
      title: "Performance Optimization",
    },
    {
      title: "Date and Time",
    },
  ];

  return (
    <>
      <p>{language}</p>
      <ul role="list" className="categories">
        {sampleData.map((category) => (
          <Category key={category.title} {...category} />
        ))}
      </ul>
    </>
  );
};

export default CategoryList;
