import React from "react";
import CardBar from "@/components/card-bar";
import CardStat from "@/components/card-stat";
import {
  SimpleGrid,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Skeleton,
} from "@chakra-ui/react";
import { useDataContext } from "@/contexts/useDataContext";
import transformDataToUI from "@/utils/transform-data-to-ui";
import computeStandardDeviation from "@/utils/compute-standard-deviation";

export default function Statistics() {
  const { data, isLoading } = useDataContext();

  return (
    <Stack
      mx={{ base: 3, sm: 6, md: 12 }}
      my={{ base: 3, sm: 5, md: 10 }}
      spacing={6}
    >
      <RenderCount />
      <Tabs colorScheme="red" pd={0}>
        <TabList>
          <Tab fontSize={{ base: 14, md: 16 }} isDisabled={isLoading}>
            Awareness
          </Tab>
          <Tab fontSize={{ base: 14, md: 16 }} isDisabled={isLoading}>
            Acceptance
          </Tab>
          <Tab fontSize={{ base: 14, md: 16 }} isDisabled={isLoading}>
            Understanding
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel px={0} py={5}>
            {isLoading && (
              <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5} pd={0}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((card, i) => (
                  <Skeleton key={card + i} height="360px" width="100%" />
                ))}
              </SimpleGrid>
            )}
            {!isLoading && (
              <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5} pd={0}>
                {transformDataToUI(data)
                  .slice(0, 30) //remove
                  .map((card, i) => (
                    <CardBar
                      key={i}
                      id={i}
                      title={card.title}
                      averages={card.averages}
                      sd={computeStandardDeviation(
                        card.averages.map((obj) => obj.mean)
                      )}
                    />
                  ))}
              </SimpleGrid>
            )}
          </TabPanel>
          <TabPanel px={0} py={5}>
            <SimpleGrid
              columns={{ base: 1, sm: 2, lg: 3 }}
              spacing={5}
              pd={0}
            ></SimpleGrid>
          </TabPanel>
          <TabPanel px={0} py={5}>
            <SimpleGrid
              columns={{ base: 1, sm: 2, lg: 3 }}
              spacing={5}
              pd={0}
            ></SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
}

function RenderCount() {
  const { data, isLoading } = useDataContext();

  console.log(isLoading);

  if (isLoading) {
    return (
      <SimpleGrid columns={{ base: 2, sm: 3, lg: 6 }} spacing={5}>
        {[1, 2, 3, 4, 5, 6].map((card, i) => (
          <Skeleton key={card + i} height="97px" width="100%" />
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
