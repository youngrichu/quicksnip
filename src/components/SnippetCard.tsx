import { SnippetCardProps } from "../types";
import { IconButton } from "./Button";
import { CopyIcon, ExpandIcon } from "./Icons";

const SnippetCard = ({ title }: SnippetCardProps) => {
  return (
    <li className="snippet">
      <div className="snippet__preview">
        <IconButton className="snippet__copy">
          <CopyIcon />
        </IconButton>
      </div>
      <div className="snippet__content">
        <h3 className="snippet__title">{title}</h3>
        <IconButton>
          <ExpandIcon />
        </IconButton>
      </div>
    </li>
  );
};

export default SnippetCard;
