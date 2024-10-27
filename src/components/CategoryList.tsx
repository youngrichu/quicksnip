import { CategoryProps } from "../types";
import Category from "./Category";

const CategoryList = () => {
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
    <ul role="list">
      {sampleData.map((category) => (
        <Category {...category} />
      ))}
    </ul>
  );
};

export default CategoryList;
