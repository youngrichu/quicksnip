import { CategoryProps } from "../types";

const Category = ({ title }: CategoryProps) => {
  return (
    <li>
      <a href="#">{title}</a>
    </li>
  );
};

export default Category;
