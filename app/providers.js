// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { DataProvider } from "@/contexts/useDataContext";

export function Providers({ children }) {
  return (
    <ChakraProvider>
      <DataProvider>{children}</DataProvider>
    </ChakraProvider>
  );
}
