// RouteTransition.tsx
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

export const setRouteVisible: { fn: ((v: boolean) => void) | null } = { fn: null };

export default function RouteTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [visible, setVisible] = useState(true);

  setRouteVisible.fn = setVisible;

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="w-full h-full transition-opacity duration-300 ease-in-out" style={{ opacity: visible ? 1 : 0 }}>
      {children}
    </div>
  );
}
