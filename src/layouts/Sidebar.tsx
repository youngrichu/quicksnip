import LanguageSelector from "../components/LanguageSelector";
import CategoryList from "../components/CategoryList";

const Sidebar = () => {
  return (
    <aside className="sidebar flow">
      <LanguageSelector />
      <CategoryList />
    </aside>
  );
};

export default Sidebar;
