"use client";

import React, { useMemo, useCallback } from "react";
import CardBar from "@/components/card-bar";
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
import filterByCategory from "@/utils/filter-by-category";
import Count from "@/components/count";

export default function Statistics() {
  const { data, isLoading } = useDataContext();
  const memoizedTransformFunction = useCallback(
    () => transformDataToUI(data),
    [data]
  );

  const fullData = useMemo(() => {
    if (isLoading) {
      return [];
    }
    return memoizedTransformFunction();
  }, [memoizedTransformFunction, isLoading]);

  const tabData1 = useMemo(
    () => fullData.filter((item) => item.title.startsWith("1")),
    [fullData]
  );
  const tabData2 = useMemo(
    () => fullData.filter((item) => item.title.startsWith("2")),
    [fullData]
  );
  const tabData3 = useMemo(
    () => fullData.filter((item) => item.title.startsWith("3")),
    [fullData]
  );

  const panelObjects = [
    {
      items: [
        filterByCategory(tabData1, 1),
        filterByCategory(tabData1, 2),
        filterByCategory(tabData1, 3),
        filterByCategory(tabData1, 4),
      ],
    },
    {
      items: [
        filterByCategory(tabData2, 1),
        filterByCategory(tabData2, 2),
        filterByCategory(tabData2, 3),
        filterByCategory(tabData2, 4),
      ],
    },
    {
      items: [
        filterByCategory(tabData3, 1),
        filterByCategory(tabData3, 2),
        filterByCategory(tabData3, 3),
        filterByCategory(tabData3, 4),
      ],
    },
  ];

  return (
    <Stack bg="#f2f2f2" width="100%" height="100%">
      <Stack
        mx={{ base: 3, sm: 6, md: 12 }}
        my={{ base: 3, sm: 5, md: 10 }}
        spacing={6}
      >
        <Count />
        {isLoading && (
          <>
            <Skeleton height={24} width="100%" />
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5} pd={0}>
              {[...Array(10)].map((data, i) => (
                <Skeleton key={i} height="300px" width="100%" />
              ))}
            </SimpleGrid>
          </>
        )}
        {!isLoading && (
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
              {panelObjects.map(({ items }, i) => (
                <TabPanel px={0} py={5} key={i}>
                  <Tabs size={"sm"} variant="soft-rounded" colorScheme="red">
                    <TabList>
                      <Tab>Vision</Tab>
                      <Tab>Mission</Tab>
                      <Tab>Goals</Tab>
                      <Tab>Objectives</Tab>
                    </TabList>
                    <TabPanels>
                      {items.map((item, k) => (
                        <TabPanel px={0} key={k}>
                          <SimpleGrid
                            key={k}
                            columns={{ base: 1, lg: 2 }}
                            spacing={5}
                            pd={0}
                          >
                            {item.map((card, i) => (
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
                        </TabPanel>
                      ))}
                    </TabPanels>
                  </Tabs>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        )}
      </Stack>
    </Stack>
  );
}
