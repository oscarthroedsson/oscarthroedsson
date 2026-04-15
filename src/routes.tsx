import { createBrowserRouter } from "react-router";

import LandingPage from "./views/LandingPage";
import App from "./App";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
]);
