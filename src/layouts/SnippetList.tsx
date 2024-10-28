import SnippetCard from "../components/SnippetCard";
import { SnippetCardProps } from "../types";

const SnippetList = () => {
  const sampleData: SnippetCardProps[] = [
    {
      title: "GET Request",
    },
    {
      title: "POST Request",
    },
    {
      title: "fetch() Request",
    },
    {
      title: "Async/Await",
    },
    {
      title: "Fetching with Axios",
    },
  ];

  return (
    <section className="flow">
      <h2 className="section-title">API Requests</h2>
      <ul role="list" className="snippets">
        {sampleData.map((snippet) => (
          <SnippetCard {...snippet} />
        ))}
      </ul>
    </section>
  );
};

export default SnippetList;
