import { useState } from "react";
import { SnippetType } from "../types";
import { useAppContext } from "../contexts/AppContext";
import { useSnippets } from "../hooks/useSnippets";
import slugify from "../utils/slugify";

import Button from "./Button";
import CodePreview from "./CodePreview";
import SnippetModal from "./SnippetModal";
import CopyToClipboard from "./CopyToClipboard";
import { CloseIcon, ExpandIcon } from "./Icons";

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
            {/* <Button isIcon={true} className="snippet__copy">
              <CopyIcon />
            </Button> */}
          </div>

          <div className="snippet__content">
            <h3 className="snippet__title">{snippet.title}</h3>
            <Button isIcon={true} onClick={() => handleOpenModal(snippet)}>
              <ExpandIcon />
            </Button>
          </div>
          {isModalOpen && (
            <SnippetModal>
              <div className="modal | flow" data-flow-space="lg">
                <div className="modal__header">
                  <h2 className="section-title">{snippet.title}</h2>
                  <Button isIcon={true} onClick={handleCloseModal}>
                    <CloseIcon />
                  </Button>
                </div>
                <div className="code-preview">
                  <CopyToClipboard className="modal__copy" />
                  <CodePreview language={slugify(language.lang)}>
                    {snippet.code}
                  </CodePreview>
                </div>
                <p>
                  <b>Description: </b>
                  {snippet.description}
                </p>
                <p>
                  Contributed by <b>{snippet.author}</b>
                </p>
                <ul role="list" className="modal__tags">
                  {snippet.tags.map((tag) => (
                    <li key={tag} className="modal__tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </SnippetModal>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SnippetList;
