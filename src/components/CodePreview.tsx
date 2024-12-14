import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyToClipboard from "./CopyToClipboard";

type Props = {
  language: string;
  children: string;
};

const CodePreview = ({ language = "markdown", children }: Props) => {
  return (
    <div className="code-preview">
      <CopyToClipboard text={children} className="modal__copy" />
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        wrapLines={true}
        customStyle={{ margin: "0" }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodePreview;
