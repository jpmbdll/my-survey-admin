"use client";

import { useDataContext } from "@/contexts/useDataContext";
import { Stack } from "@chakra-ui/react";
import Statistics from "@/components/statistics";
import Home from "@/components/home";

export default function Page() {
  const { page } = useDataContext();

  return (
    <Stack bg="#f2f2f2" width="100%" height="100%">
      {page === "home" && <Home />}
      {page === "stats" && <Statistics />}
    </Stack>
  );
}
