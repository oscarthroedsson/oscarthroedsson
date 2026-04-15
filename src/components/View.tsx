import type React from "react";

// Vi definierar interfacet här för tydlighet
interface ViewProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function View({ children, ...props }: ViewProps) {
  return (
    <section
      {...props}
      className={`relative flex flex-col h-screen w-screen p-4 overflow-auto ${props.className || ""}`}
    >
      {children}
    </section>
  );
}
