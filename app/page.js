"use client";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { BarChart } from "@/components/bar-chart";
import computeStandardDeviation from "@/utils/compute-standard-deviation";
import filterPerType from "@/utils/filter-per-type";
import computeMean from "@/utils/compute-mean";
import filterRespondentsValuePerQuestion from "@/utils/filter-respondents-value-per-question";
import transformDataToUI from "@/utils/transform-data-to-ui";

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
    <Box width="100vw" height="100vh">
      <UserButton />
      <BarChart />
    </Box>
  );
}

// [
//   {
//     title: "1.1 Question",
//     averages: [
//       { respondentType: "Sudent", average: 2.5 },
//       { respondentType: "Alumni", average: 2 },
//     ],
//   },
//   {
//     title: "1.2 Question",
//     averages: [
//       { respondentType: "Sudent", average: 2 },
//       { respondentType: "Alumni", average: 3 },
//     ],
//   },
// ];
