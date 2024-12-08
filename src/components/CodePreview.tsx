import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  language: string;
  children: string;
};

const CodePreview = ({ language = "markdown", children }: Props) => {
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
