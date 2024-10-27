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
  ];

  return (
    <section>
      <h2>API Requests</h2>
      <ul role="list">
        {sampleData.map((snippet) => (
          <SnippetCard {...snippet} />
        ))}
      </ul>
    </section>
  );
};

export default SnippetList;
