import React from "react";
import {
  Flex,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  Stack,
  Box,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { vision, mission, goals, coreValues } from "@/constants/definition";

const map = [
  { title: "Mission", content: mission },
  { title: "Vision", content: vision },
  { title: "Goals", content: goals },
  { title: "Core Values", content: coreValues },
];

export default function Home() {
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="stretch"
      height={{ base: "100%" }}
      px={{ base: 4, md: 12, lg: 16 }}
      pt={{ base: 16, sm: 20, md: 24 }}
      backgroundImage="root_bg.png"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      {map.map(({ title, content }, i) => {
        let d = (
          <Text color="black" fontSize={{ base: "sm", lg: "md" }}>
            {content}
          </Text>
        );
        if (title === "Goals") {
          d = content.map((c, i) => (
            <Box key={i}>
              <Text color="black" fontSize={{ base: "sm", lg: "md" }} pb={0}>
                {c.pillar}
              </Text>
              <Text color="black" fontSize={{ base: "sm", lg: "md" }} pb={5}>
                {c.goal}
              </Text>
            </Box>
          ));
        }

        if (title === "Core Values") {
          d = (
            <UnorderedList>
              {content.map((c, i) => (
                <ListItem key={i}>{c}</ListItem>
              ))}
            </UnorderedList>
          );
        }
        return (
          <Card
            color="black"
            key={i}
            backgroundColor="white"
            flex={{ base: "0 0 100%" }}
            maxWidth={{ base: "100%" }}
            margin={3}
          >
            <CardHeader pb={0}>
              <Heading size={{ base: "md", lg: "lg" }}>{title}</Heading>
            </CardHeader>
            <CardBody color={"#000"}>{d}</CardBody>
          </Card>
        );
      })}
    </Flex>
  );
}
