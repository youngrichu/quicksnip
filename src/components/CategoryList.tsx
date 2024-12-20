import { useAppContext } from "../contexts/AppContext";
import { useCategories } from "../hooks/useCategories";

let oldCategories = [] as string[];

const CategoryList = () => {
  const { category, setCategory } = useAppContext();
  const { fetchedCategories, loading, error } = useCategories();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error occured: {error}</div>;

  // NOTE: set the first element as selected
  // switching between categories
  // Just a temporary solution.
  // If you've better solution, I would appreciate it :)
  if (oldCategories !== fetchedCategories) {
    setCategory(fetchedCategories[0]);
    oldCategories = fetchedCategories;
  }

  return (
    <ul role="list" className="categories">
      {fetchedCategories.map((name, idx) => (
        <li key={idx} className="category">
          <button
            className={`category__btn ${
              name === category ? "category__btn--active" : ""
            }`}
            onClick={() => setCategory(name)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
