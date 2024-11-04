import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { LanguageData, SnippetType } from "../types";
import { getSnippetByTitleAndCategory } from "../utils/filters";

const SnippetModal = () => {
  console.log("hello modal");
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  const { language, category, snippet_title } = useParams();
  const [snippet, setSnippet] = useState<SnippetType | null>(null);
  const navigate = useNavigate();
  console.log(language, category, snippet_title);

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
  }, []);

  if (!snippet) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {snippet.title}
        <button onClick={() => navigate(-1)}>Close</button>
      </div>
    </div>,
    modalRoot
  );
};

export default SnippetModal;
