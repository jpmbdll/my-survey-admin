"use client";

import { DataProvider } from "@/contexts/useDataContext";

export default function Layout({ children }) {
  return <DataProvider>{children}</DataProvider>;
}
