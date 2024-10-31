import { useLoaderData, useParams } from "react-router-dom";
import Category from "./Category";

const CategoryList = () => {
  const { language } = useParams();
  const categories = useLoaderData() as string[];

  console.log(categories);

  if (!categories) {
    return <div>empty</div>;
  }

  return (
    <>
      <ul role="list" className="categories">
        {categories.map((category) => (
          <Category key={category} title={category} language={language || ""} />
        ))}
      </ul>
    </>
  );
};

export default CategoryList;
