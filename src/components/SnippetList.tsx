import { useState } from "react";
import { SnippetType } from "../types";
import { useAppContext } from "../contexts/AppContext";
import { useSnippets } from "../hooks/useSnippets";

import Button from "./Button";
import SnippetModal from "./SnippetModal";
import { ExpandIcon } from "./Icons";

const SnippetList = () => {
  const { language, setSnippet } = useAppContext();
  const { fetchedSnippets } = useSnippets();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!fetchedSnippets) return <p>Empty List</p>;

  const handleOpenModal = (activeSnippet: SnippetType) => {
    setIsModalOpen(true);
    setSnippet(activeSnippet);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSnippet(null);
  };

  return (
    <ul role="list" className="snippets">
      {fetchedSnippets.map((snippet, idx) => (
        <li key={idx} className="snippet">
          <div className="snippet__preview">
            <img src={language.icon} alt={language.lang} />
          </div>

          <div className="snippet__content">
            <h3 className="snippet__title">{snippet.title}</h3>
            <Button isIcon={true} onClick={() => handleOpenModal(snippet)}>
              <ExpandIcon />
            </Button>
          </div>
          {isModalOpen && (
            <SnippetModal
              snippet={snippet}
              handleCloseModal={handleCloseModal}
              language={language.lang}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default SnippetList;
