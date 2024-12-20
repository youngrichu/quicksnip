import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyToClipboard from "./CopyToClipboard";

type Props = {
  language: string;
  code: string[];
};

const CodePreview = ({ language = "markdown", code }: Props) => {
  const codeString = code.join("\n");

  return (
    <div className="code-preview">
      <CopyToClipboard text={codeString} className="modal__copy" />
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        wrapLines={true}
        customStyle={{ margin: "0" }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodePreview;
