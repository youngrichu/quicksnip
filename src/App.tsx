import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import SnippetList from "./components/SnippetList";
import Sidebar from "./layouts/Sidebar";

const App = () => {
  return (
    <div className="container flow" data-flow-space="lg">
      <Header />
      <div className="heading">
        <h1 className="main-title">
          Made to save your <span className="text-highlight">time.</span>
        </h1>
        <p>
          Find the necessary snippet in seconds, across multiple languages. Just
          search and copy!
        </p>
      </div>
      <main className="main">
        <Sidebar />
        <SnippetList />
      </main>
      <hr className="divider" />
      <Footer />
    </div>
  );
};

export default App;
