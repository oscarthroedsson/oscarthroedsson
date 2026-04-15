import { createContext } from "react";

export const RoutingContext = createContext<{
  isRouting: boolean;
  navigate: (path: string) => void;
}>({ isRouting: false, navigate: () => {} });
