import React from "react";
import ReactDOM from "react-dom";

type Props = {
  children: React.ReactNode;
};

const SnippetModal: React.FC<Props> = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">{children}</div>,
    modalRoot
  );
};

export default SnippetModal;
