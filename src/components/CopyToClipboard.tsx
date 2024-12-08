import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import Button from "./Button";
import { CopyIcon } from "./Icons";

const CopyToClipboard = ({ ...props }) => {
  const { snippet } = useAppContext();
  const [isCopied, setIsCopied] = useState(false);

  const snippetCode = snippet ? snippet.code : "";

  const copySnippetCode = () => {
    navigator.clipboard
      .writeText(snippetCode)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => alert("Error occured: " + err));
  };

  return (
    <Button isIcon={true} onClick={copySnippetCode} {...props}>
      {isCopied ? "Copied!" : <CopyIcon />}
    </Button>
  );
};

export default CopyToClipboard;
