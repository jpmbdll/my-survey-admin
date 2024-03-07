import React from "react";
import { Card, CardHeader, CardBody, Text, Flex } from "@chakra-ui/react";
import CardWithChart from "./bar-chart";

export default function CardBar({ id, title, sd, averages }) {
  return (
    <Card key={id} boxShadow="lg">
      <CardHeader
        as="h1"
        fontSize={{ base: "sm", md: "md" }}
        fontStyle="italic"
      >
        {title}
      </CardHeader>
      <CardBody pt={0}>
        <CardWithChart averages={averages} />
        <Flex justifyContent="flex-end" flexDirection="row">
          <Text fontSize={{ base: "sm", md: "md" }} pr={2}>
            Standard Deviation:
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontStyle="italic"
            fontWeight="bold"
          >
            {sd}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
}
