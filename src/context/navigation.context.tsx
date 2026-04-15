import { createContext } from "react";

type NavigationContextType = {
  isOpen: boolean;
  toggleOpen: () => void;
};

export const NavigationContext = createContext<NavigationContextType>({
  toggleOpen: () => {},
  isOpen: false,
});
