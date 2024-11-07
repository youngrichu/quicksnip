import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { LanguageData, SnippetType } from "../types";
import { getSnippetByTitleAndCategory } from "../utils/filters";
import { CloseIcon } from "./Icons";
import Button from "./Button";
import CodePreview from "./CodePreview";

const SnippetModal = () => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  const { language, category, snippet_title } = useParams();
  const [snippet, setSnippet] = useState<SnippetType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const res = await fetch(`/data/${language}.json`);
        if (!res.ok) {
          throw new Error("Failed to fetch languages in SnippetModal.tsx");
        }
        const data: LanguageData = await res.json();

        // TODO: instead of "", use default category as fallback
        const filteredSnippet = getSnippetByTitleAndCategory(
          data,
          category || "",
          snippet_title || ""
        );

        setSnippet(filteredSnippet);
      } catch (error) {
        console.error("Error occured with SnippetModal.tsx: ", error);
      }
    };

    fetchSnippets();
  }, [snippet_title]);

  if (!snippet) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal | flow" data-flow-space="lg">
        <div className="modal__header">
          <h2 className="section-title">{snippet.title}</h2>
          <Button isIcon={true} onClick={() => navigate(-1)}>
            <CloseIcon />
          </Button>
        </div>
        <div className="code-preview">
          <CodePreview language={language}>{snippet.code}</CodePreview>
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
    </div>,
    modalRoot
  );
};

export default SnippetModal;
