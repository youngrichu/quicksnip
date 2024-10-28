import { CategoryProps } from "../types";

const Category = ({ title }: CategoryProps) => {
  return (
    <li className={`category ${title === "API Requests" ? "active" : null}`}>
      <a className="category__link" href="#">
        {title}
      </a>
    </li>
  );
};

export default Category;
