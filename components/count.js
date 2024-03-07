import React from "react";
import CardStat from "@/components/card-stat";
import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import { useDataContext } from "@/contexts/useDataContext";

export default function Count() {
  const { data, isLoading } = useDataContext();

  if (isLoading) {
    return (
      <SimpleGrid columns={{ base: 2, sm: 3, lg: 6 }} spacing={5}>
        {[...Array(6)].map((card, i) => (
          <Skeleton key={i} height="97px" width="100%" />
        ))}
      </SimpleGrid>
    );
  }
  const stats = [
    {
      id: 1,
      title: "Total Respondents",
      count: 0,
      main: true,
    },
    { id: 2, title: "Students", count: 0 },
    { id: 3, title: "Faculty", count: 0 },
    { id: 4, title: "Alumni", count: 0 },
    { id: 5, title: "Non-teaching Staff", count: 0 },
    { id: 6, title: "Administrator", count: 0 },
  ];

  data.forEach((item) => {
    stats[0].count++;
    switch (item["Stakeholder Classification"]) {
      case "Student":
        stats[1].count++;
        break;
      case "Alumni":
        stats[3].count++;
        break;
      case "Administrator":
        stats[5].count++;
        break;
      case "Faculty":
        stats[2].count++;
        break;
      case "Non-teaching Staff":
        stats[4].count++;
        break;
      default:
        break;
    }
  });

  return (
    <SimpleGrid columns={{ base: 2, sm: 3, lg: 6 }} spacing={5}>
      {stats.map((card) => (
        <CardStat
          key={card.id}
          title={card.title}
          count={card.count}
          main={card.main}
        />
      ))}
    </SimpleGrid>
  );
}
