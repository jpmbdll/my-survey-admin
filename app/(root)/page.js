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
    <Stack>
      <Box
        position="fixed"
        backgroundImage="/bsu_logo.png"
        backgroundSize="contain"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        w="100%"
        height={{ base: "100%", lg: "calc(100vh - 75px)" }}
        opacity={0.2}
      ></Box>
      <Flex
        bg="#f2f2f2"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="stretch"
        height={{ base: "100%" }}
        px={{ base: 4, md: 12, lg: 16 }}
        py={{ base: 3, md: 8, lg: 10 }}
      >
        {map.map(({ title, content }, i) => {
          let d = (
            <Text color="white" fontSize={{ base: "sm", lg: "md" }}>
              {content}
            </Text>
          );
          if (title === "Goals") {
            d = content.map((c, i) => (
              <Box>
                <Text color="white" fontSize={{ base: "sm", lg: "md" }} pb={0}>
                  {c.pillar}
                </Text>
                <Text color="white" fontSize={{ base: "sm", lg: "md" }} pb={5}>
                  {c.goal}
                </Text>
              </Box>
            ));
          }
          return (
            <Card
              color="white"
              key={i}
              backgroundColor="rgba(0,0,0, 0.4)"
              flex={{ base: "0 0 100%" }}
              maxWidth={{ base: "100%" }}
              margin={3}
            >
              <CardHeader pb={0}>
                <Heading size={{ base: "md", lg: "lg" }}>{title}</Heading>
              </CardHeader>
              <CardBody>{d}</CardBody>
            </Card>
          );
        })}
      </Flex>
    </Stack>
  );
}
