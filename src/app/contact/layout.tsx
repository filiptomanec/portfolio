import type { Metadata } from "next";
import type { ReactNode } from "react";

// Stránka je klientská komponenta, kanonický odkaz proto nastavuje layout
export const metadata: Metadata = { alternates: { canonical: "/contact" } };

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
