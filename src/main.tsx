import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import SnippetList from "./layouts/SnippetList";
import SnippetModal from "./components/SnippetModal";
import { fetchCategories, fetchSnippets } from "./services/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ":language",
        element: <CategoryList />,
        loader: ({ params }) => fetchCategories(params),
      },
      {
        path: ":language/:category",
        element: <SnippetList />,
        loader: ({ params }) => fetchSnippets(params),
      },
      {
        path: ":language/:category/:snippet",
        element: <SnippetModal />,
        loader: ({ params }) => fetchSnippets(params),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
