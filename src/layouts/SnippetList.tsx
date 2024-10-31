import { useLoaderData, useParams } from "react-router-dom";
import SnippetCard from "../components/SnippetCard";
import { SnippetCardProps, SnippetType } from "../types";

const SnippetList = () => {
  const { language, category } = useParams();
  const snippets = useLoaderData() as SnippetType[];

  if (!snippets) return <div>empty</div>;

  return (
    <section className="flow">
      <h2 className="section-title">{category}</h2>
      <ul role="list" className="snippets">
        {snippets.map((snippet) => (
          <SnippetCard
            key={snippet.title}
            language={language}
            category={category}
            {...snippet}
          />
        ))}
      </ul>
    </section>
  );
};

export default SnippetList;
