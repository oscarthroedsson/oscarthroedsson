import { useState } from "react";

import { NavigationContext } from "../context/navigation.context";

export default function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return <NavigationContext.Provider value={{ toggleOpen, isOpen }}>{children}</NavigationContext.Provider>;
}
