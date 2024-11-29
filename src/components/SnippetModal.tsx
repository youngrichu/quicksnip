import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { LanguageData, SnippetType } from "../types";
import { getSnippetByTitleAndCategory } from "../utils/filters";
import { CloseIcon, CopyIcon } from "./Icons";
import Button from "./Button";
import CodePreview from "./CodePreview";

const SnippetModal = () => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

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
          <Button isIcon={true} className="modal__copy">
            <CopyIcon />
          </Button>
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
