import { useState } from "react";
import { SnippetType } from "../types";
import { useAppContext } from "../contexts/AppContext";
import { useSnippets } from "../hooks/useSnippets";

import SnippetModal from "./SnippetModal";
import { LeftAngleArrowIcon } from "./Icons";

const SnippetList = () => {
  const { language, snippet, setSnippet } = useAppContext();
  const { fetchedSnippets } = useSnippets();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!fetchedSnippets)
    return (
      <div>
        <LeftAngleArrowIcon />
      </div>
    );

  const handleOpenModal = (activeSnippet: SnippetType) => {
    setIsModalOpen(true);
    setSnippet(activeSnippet);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSnippet(null);
  };

  return (
    <>
      <ul role="list" className="snippets">
        {fetchedSnippets.map((snippet, idx) => (
          <li key={idx}>
            <button
              className="snippet | flow"
              data-flow-space="sm"
              onClick={() => handleOpenModal(snippet)}
            >
              <div className="snippet__preview">
                <img src={language.icon} alt={language.lang} />
              </div>

              <h3 className="snippet__title">{snippet.title}</h3>
            </button>
          </li>
        ))}
      </ul>

      {isModalOpen && snippet && (
        <SnippetModal
          snippet={snippet}
          handleCloseModal={handleCloseModal}
          language={language.lang}
        />
      )}
    </>
  );
};

export default SnippetList;
