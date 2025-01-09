import { Route, Routes } from "react-router-dom";

import Container from "@components/Container";
import SnippetList from "@components/SnippetList";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path="/" element={<SnippetList />} />
        <Route path="/:languageName" element={<SnippetList />} />
        <Route path="/:languageName/:categoryName" element={<SnippetList />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
