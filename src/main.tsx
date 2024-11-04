import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import SnippetList from "./components/SnippetList";
import SnippetModal from "./components/SnippetModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ":language",
        element: <CategoryList />,
      },
      {
        path: ":language/:category",
        element: <SnippetList />,
      },
      {
        path: ":language/:category/:snippet_title",
        element: <SnippetModal />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
