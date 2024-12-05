import { useAppContext } from "../contexts/AppContext";
import { useSnippets } from "../hooks/useSnippets";
import Button from "./Button";
import { CopyIcon, ExpandIcon } from "./Icons";

const SnippetList = () => {
  const { language } = useAppContext();
  const { fetchedSnippets } = useSnippets();

  if (!fetchedSnippets) return <p>Empty List</p>;

  return (
    <ul role="list" className="snippets">
      {fetchedSnippets.map((snippet) => (
        <li className="snippet">
          <div className="snippet__preview">
            <img src={language.icon} alt={language.lang} />
            <Button isIcon={true} className="snippet__copy">
              <CopyIcon />
            </Button>
          </div>

          <div className="snippet__content">
            <h3 className="snippet__title">{snippet.title}</h3>
            <Button isIcon={true}>
              <ExpandIcon />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SnippetList;
