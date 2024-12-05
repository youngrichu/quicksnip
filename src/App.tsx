import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Banner from "./layouts/Banner";
import LanguageSelector from "./components/LanguageSelector";
import CategoryList from "./components/CategoryList";
import { useAppContext } from "./contexts/AppContext";
import SnippetList from "./components/SnippetList";

const App = () => {
  const { category } = useAppContext();

  return (
    <>
      <div className="container flow" data-flow-space="xl">
        <Header />
        <Banner />
        <main className="main">
          <aside className="sidebar flow">
            <LanguageSelector />
            <CategoryList />
          </aside>
          <section className="flow">
            <h2 className="section-title">{category}</h2>
            <SnippetList />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
