import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";

import { RoutingContext } from "../context/routing.context";

export function RoutingProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const nav = useNavigate();
  const [isRouting, setIsRouting] = useState(false);

  useEffect(() => {
    console.log("📍 pathname changed:", location.pathname);
    const timeout = setTimeout(() => {
      console.log("✅ setting isRouting to false");
      setIsRouting(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  function navigate(path: string) {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    if (normalized === location.pathname) return;
    setIsRouting(true);
    setTimeout(() => nav(normalized), 350);
  }

  return <RoutingContext.Provider value={{ isRouting, navigate }}>{children}</RoutingContext.Provider>;
}
