import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodePreviewProps = {
  language?: string;
  children: string;
};

const CodePreview = ({ language, children }: CodePreviewProps) => {
  if (!language) {
    language = "markdown"; // for fallback
  }

  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      wrapLines={true}
      customStyle={{ margin: "0" }}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodePreview;
