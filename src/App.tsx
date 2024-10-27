import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import SnippetList from "./layouts/SnippetList";

const App = () => {
  return (
    <div className="container">
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
      <main>
        <Sidebar />
        <SnippetList />
      </main>
      <hr className="divider" />
      <Footer />
    </div>
  );
};

export default App;
