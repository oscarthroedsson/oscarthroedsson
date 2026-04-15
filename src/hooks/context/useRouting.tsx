import { useContext } from "react";

import { RoutingContext } from "../../context/routing.context";

export default function useRouting() {
  const cnxt = useContext(RoutingContext);
  if (!cnxt) throw new Error("useRouting must be used within a RoutingProvider");
  return cnxt;
}
