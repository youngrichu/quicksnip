import { useAppContext } from "./contexts/AppContext";

import Header from "./layouts/Header";
import Banner from "./layouts/Banner";
import Sidebar from "./layouts/Sidebar";
import Footer from "./layouts/Footer";

import SnippetList from "./components/SnippetList";

const App = () => {
  const { category } = useAppContext();

  return (
    <div className="container flow" data-flow-space="xl">
      <Header />
      <Banner />
      <main className="main">
        <Sidebar />
        <section className="flow">
          <h2 className="section-title">{category}</h2>
          <SnippetList />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
