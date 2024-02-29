import React from "react";
import {
  Flex,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { vision, mission, goals, objectives } from "@/constants/definition";

const map = [
  { title: "Mission", content: mission },
  { title: "Vision", content: vision },
  { title: "Goals", content: goals },
  { title: "Objectives", content: objectives },
];

export default function Home() {
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="stretch"
      height={{ base: "100%", lg: "calc(100vh - 73px)" }}
      px={{ base: 4, md: 12, lg: 16 }}
      py={{ base: 3, md: 8, lg: 10 }}
    >
      {map.map(({ title, content }, i) => (
        <Card
          flex={{ base: "0 0 100%", lg: "0 0 calc(50% - 24px)" }}
          maxWidth={{ base: "100%", lg: "calc(50% - 24px)" }}
          margin={3}
        >
          <CardHeader pb={0}>
            <Heading size={{ base: "md", lg: "lg" }}>{title}</Heading>
          </CardHeader>
          <CardBody>
            <Text color="gray.600" fontSize={{ base: "sm", lg: "md" }}>
              {content}
            </Text>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
}
