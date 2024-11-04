import CategoryList from "../components/CategoryList";
import LanguageSwitch from "../components/LanguageSwitch";

const Sidebar = () => {
  return (
    <aside className="sidebar flow">
      <LanguageSwitch />
      <CategoryList />
    </aside>
  );
};

export default Sidebar;
