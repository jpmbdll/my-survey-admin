"use client";

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
  Button,
} from "@chakra-ui/react";

export default function Home() {
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
    { id: 1, title: "Card 1", content: "Content for Card 1" },
    { id: 2, title: "Card 2", content: "Content for Card 2" },
    { id: 3, title: "Card 3", content: "Content for Card 3" },
    { id: 4, title: "Card 4", content: "Content for Card 4" },
    { id: 5, title: "Card 5", content: "Content for Card 5" },
    { id: 6, title: "Card 6", content: "Content for Card 6" },
  ];

  const stats = [
    { id: 1, title: "Total Respondents", count: 10, main: true },
    { id: 2, title: "Students", count: 15 },
    { id: 3, title: "Faculty", count: 45 },
    { id: 4, title: "Alumni", count: 123 },
    { id: 5, title: "Parents", count: 42 },
    { id: 6, title: "Maintenance", count: 6 },
  ];
  // useEffect(() => {
  //   const get = async () => {
  //     try {
  //       const res = await fetch(
  //         "https://sheet.best/api/sheets/539a76a7-e086-45c8-8fb1-e584db6f48e0"
  //       );
  //       const data = await res.json();
  //       console.log(JSON.stringify(data));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   get();
  // });
  console.log(transformDataToUI(data));
  return (
    <Stack mx={{ sm: 6, md: 12 }} my={{ sm: 5, md: 10 }}>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 6 }} spacing={5}>
        {stats.map((card) => (
          <CardStat
            key={card.id}
            title={card.title}
            count={card.count}
            main={card.main}
          />
        ))}
      </SimpleGrid>
      <Divider my={5} />
      <Tabs variant="soft-rounded" colorScheme="blue" pd={0}>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel px={0}>
            <SimpleGrid columns={[1, null, 2]} spacing={5} pd={0}>
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
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
}
