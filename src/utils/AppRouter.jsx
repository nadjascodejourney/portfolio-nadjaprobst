import { createBrowserRouter } from "react-router-dom";

import { App } from "../App.jsx";
import About from "../pages/About";
import TechStack from "../pages/TechStack.jsx";
import NotFound from "../pages/NotFoundPage";

export const AppRouter = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    errorElement: <NotFound />,
    children: [
      {
        element: <About />,
        path: "/about",
      },
      {
        element: <TechStack />,
        path: "/techstack",
      },
    ],
  },
]);
