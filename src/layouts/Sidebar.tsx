import CategoryList from "../components/CategoryList";
import LanguageSwitch from "../components/LanguageSwitch";

const Sidebar = () => {
  return (
    <aside>
      <LanguageSwitch />
      <CategoryList />
    </aside>
  );
};

export default Sidebar;
