"use client";
import { useEffect } from "react";
import transformDataToUI from "@/utils/transform-data-to-ui";
import CardBar from "@/components/card-bar";
import CardStat from "@/components/card-stat";
import {
  SimpleGrid,
  Stack,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [serverData, setServerData] = useState(null);
  const data = [
    {
      Timestamp: "26/02/2024 14:50:37",
      "Respondent type": "Student",
      "1.1 Question": "2",
      "1.2 Question": "1",
      // "2.1 Question": "2",
      // "2.2 Question": "2",
      // "3.1 Question": "3",
      // "3.2 Question": "3",
    },
    {
      Timestamp: "26/02/2024 14:51:47",
      "Respondent type": "Student",
      "1.1 Question": "3",
      "1.2 Question": "3",
      // "2.1 Question": "3",
      // "2.2 Question": "4",
      // "3.1 Question": "4",
      // "3.2 Question": "4",
    },
    {
      Timestamp: "26/02/2024 14:51:59",
      "Respondent type": "Alumni",
      "1.1 Question": "2",
      "1.2 Question": "3",
      // "2.1 Question": "3",
      // "2.2 Question": "3",
      // "3.1 Question": "4",
      // "3.2 Question": "4",
    },
    {
      Timestamp: "26/02/2024 14:51:59",
      "Respondent type": "Faculty",
      "1.1 Question": "3",
      "1.2 Question": "3",
      // "2.1 Question": "5",
      // "2.2 Question": "3",
      // "3.1 Question": "4",
      // "3.2 Question": "4",
    },
    {
      Timestamp: "26/02/2024 14:51:59",
      "Respondent type": "Faculty",
      "1.1 Question": "4",
      "1.2 Question": "3",
      // "2.1 Question": "5",
      // "2.2 Question": "3",
      // "3.1 Question": "4",
      // "3.2 Question": "4",
    },
  ];

  const cards = [
    { id: 1, title: "Question 1" },
    { id: 2, title: "Question 2" },
    { id: 3, title: "Question 3" },
    { id: 4, title: "Question 4" },
    { id: 5, title: "Question 5" },
    { id: 6, title: "Question 6" },
    { id: 7, title: "Question 7" },
    { id: 8, title: "Question 8" },
    { id: 9, title: "Question 9" },
    { id: 10, title: "Question 10" },
  ];

  useEffect(() => {
    const get = async () => {
      try {
        const res = await fetch(
          "https://sheet.best/api/sheets/539a76a7-e086-45c8-8fb1-e584db6f48e0"
        );
        const data = await res.json();
        setServerData(data);
      } catch (error) {
        console.log(error);
      }
    };
    get();
  }, []);
  // console.log(transformDataToUI(data));
  console.log(serverData);
  const stats = [
    {
      id: 1,
      title: "Total Respondents",
      count: serverData ? serverData.length : 0,
      main: true,
    },
    { id: 2, title: "Students", count: 15 },
    { id: 3, title: "Faculty", count: 45 },
    { id: 4, title: "Alumni", count: 123 },
    { id: 5, title: "Non-teaching Staff", count: 42 },
    { id: 6, title: "Administrator", count: 6 },
  ];
  return (
    <Stack bg="#f2f2f2">
      <Stack
        mx={{ base: 3, sm: 6, md: 12 }}
        my={{ base: 3, sm: 5, md: 10 }}
        spacing={6}
      >
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
        <Tabs colorScheme="red" pd={0}>
          <TabList>
            <Tab fontSize={{ base: 14, md: 16 }}>Awareness</Tab>
            <Tab fontSize={{ base: 14, md: 16 }}>Acceptance</Tab>
            <Tab fontSize={{ base: 14, md: 16 }}>Understanding</Tab>
          </TabList>
          <TabPanels>
            <TabPanel px={0} py={5}>
              <SimpleGrid
                columns={{ base: 1, sm: 2, lg: 3 }}
                spacing={5}
                pd={0}
              >
                {cards.map((card) => (
                  <CardBar
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    sd={"14.01"}
                  />
                ))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel px={0} py={5}>
              <SimpleGrid
                columns={{ base: 1, sm: 2, lg: 3 }}
                spacing={5}
                pd={0}
              >
                {cards.map((card) => (
                  <CardBar
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    sd={"14.01"}
                  />
                ))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel px={0} py={5}>
              <SimpleGrid
                columns={{ base: 1, sm: 2, lg: 3 }}
                spacing={5}
                pd={0}
              >
                {cards.map((card) => (
                  <CardBar
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    sd={"14.01"}
                  />
                ))}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Stack>
  );
}
