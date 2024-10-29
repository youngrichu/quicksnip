import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import SnippetList from "./layouts/SnippetList";
import SnippetModal from "./components/SnippetModal";
import { fetchCategories, fetchLanguages, fetchSnippets } from "./services/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: fetchLanguages,
    children: [
      {
        path: ":language",
        element: <CategoryList />,
        loader: fetchCategories,
        children: [
          {
            path: ":category",
            element: <SnippetList />,
            loader: fetchSnippets,
            children: [
              {
                path: ":snippet",
                element: <SnippetModal />,
                loader: fetchSnippets,
              },
            ],
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
