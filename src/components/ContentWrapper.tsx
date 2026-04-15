import type { ReactNode } from "react";

interface Props extends React.ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
}

export default function ContentWrapper({ children, ...props }: Props) {
  return <section {...props}>{children}</section>;
}
