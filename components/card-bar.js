import React from "react";
import { Card, CardHeader, CardBody, Text, Flex } from "@chakra-ui/react";
import CardWithChart from "./bar-chart";

export default function CardBar({ id, title, sd }) {
  return (
    <Card key={id} boxShadow="lg">
      <CardHeader as="h3" size="md" fontStyle="italic">
        {title}
      </CardHeader>
      <CardBody pt={0}>
        <CardWithChart />
        <Flex justifyContent="flex-end" flexDirection="row">
          <Text fontSize="md" pr={2}>
            Standard Deviation:
          </Text>
          <Text fontSize="lg" fontStyle="italic" fontWeight="bold">
            {sd}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
}
