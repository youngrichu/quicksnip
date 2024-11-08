import { Link } from "react-router-dom";
import { SnippetCardProps } from "../types";
import { CopyIcon, ExpandIcon } from "./Icons";
import slugify from "../utils/slugify";
import Button from "./Button";

const SnippetCard = ({ title, language, category }: SnippetCardProps) => {
  return (
    <li className="snippet">
      <div className="snippet__preview">
        <Button isIcon={true} className="snippet__copy">
          <CopyIcon />
        </Button>
      </div>

      <div className="snippet__content">
        <h3 className="snippet__title">{title}</h3>
        <Link to={`/${language}/${category}/${slugify(title)}`}>
          <ExpandIcon />
        </Link>
      </div>
    </li>
  );
};

export default SnippetCard;
