import { Link } from "react-router-dom";
import { CategoryProps } from "../types";
import slugify from "../utils/slugify";

const Category = ({ title, language }: CategoryProps) => {
  return (
    <li className="category">
      <Link
        to={`/${slugify(language || "")}/${slugify(title)}`}
        className="category__link"
      >
        {title}
      </Link>
    </li>
  );
};

export default Category;
