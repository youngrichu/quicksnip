import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      <motion.ul
        role="list"
        className="snippets"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {fetchedSnippets.map((snippet, idx) => (
          <motion.li
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <motion.button
              className="snippet | flow"
              data-flow-space="sm"
              onClick={() => handleOpenModal(snippet)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="snippet__preview">
                <img src={language.icon} alt={language.lang} />
              </div>

              <h3 className="snippet__title">{snippet.title}</h3>
            </motion.button>
          </motion.li>
        ))}
      </motion.ul>

      <AnimatePresence>
        {isModalOpen && snippet && (
          <SnippetModal
            snippet={snippet}
            handleCloseModal={handleCloseModal}
            language={language.lang}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SnippetList;
