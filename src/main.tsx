import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { StrictMode } from "react";

import { routes } from "./routes.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="relative h-screen ">
      <RouterProvider router={routes} />;
    </main>
  </StrictMode>,
);
