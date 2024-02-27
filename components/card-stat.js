import React from "react";
import { Stat, StatLabel, StatNumber, Card } from "@chakra-ui/react";

export default function CardStat({ title, count, main = false }) {
  return (
    <Card
      p={5}
      bg={main ? "blue" : "white"}
      textColor={main ? "white" : "black"}
    >
      <Stat>
        <StatLabel>{title}</StatLabel>
        <StatNumber>{count}</StatNumber>
      </Stat>
    </Card>
  );
}
