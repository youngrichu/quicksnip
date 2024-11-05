import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import SnippetList from "./components/SnippetList";
import Sidebar from "./layouts/Sidebar";
import { Navigate, useLocation } from "react-router-dom";
import SnippetModal from "./components/SnippetModal";

const App = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return <Navigate to="/javascript/dom-manipulation" replace />;
  }

  return (
    <>
      {/* Had to put the modal in App.tsx as well for it to work despite
        it's also being created in HTML with portal. 
        If you know why it's that way, please let me know. */}
      <SnippetModal />
      <div className="container flow" data-flow-space="xl">
        <Header />
        <div className="heading">
          <h1 className="main-title">
            Made to save your <span className="text-highlight">time.</span>
          </h1>
          <p>
            Find the necessary snippet in seconds, across multiple languages.
            Just search and copy!
          </p>
        </div>
        <main className="main">
          <Sidebar />
          <SnippetList />
        </main>
        <hr className="divider" />
        <Footer />
      </div>
    </>
  );
};

export default App;
