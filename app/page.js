"use client";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";

// const countVotes = (data) => {
//   const questions = Object.keys(data[0]).filter((key) => key !== "Timestamp");

//   return questions.map((question) => {
//     const count = {};

//     data.forEach((entry) => {
//       const option = entry[question].replace("Option ", "");
//       count[option] = (count[option] || 0) + 1;
//     });

//     const dataCount = Object.keys(count).map((option) => ({
//       option,
//       value: count[option],
//     }));

//     return { title: question, dataCount };
//   });
// };

export default function Home() {
  // const data = [
  //   {
  //     Timestamp: "15/02/2024 16:07:34",
  //     question1: "Option 2",
  //     question2: "Option 2",
  //   },
  //   {
  //     Timestamp: "24/02/2024 13:45:58",
  //     question1: "Option 1",
  //     question2: "Option 2",
  //   },
  //   {
  //     Timestamp: "24/02/2024 13:47:26",
  //     question1: "Option 1",
  //     question2: "Option 2",
  //   },
  //   {
  //     Timestamp: "24/02/2024 13:55:29",
  //     question1: "Option 2",
  //     question2: "Option 2",
  //   },
  //   {
  //     Timestamp: "24/02/2024 13:55:49",
  //     question1: "Option 2",
  //     question2: "Option 2",
  //   },
  //   {
  //     Timestamp: "24/02/2024 13:56:30",
  //     question1: "Option 1",
  //     question2: "Option 1",
  //   },
  //   {
  //     Timestamp: "24/02/2024 13:56:41",
  //     question1: "Option 1",
  //     question2: "Option 2",
  //   },
  //   {
  //     Timestamp: "24/02/2024 13:58:36",
  //     question1: "Option 1",
  //     question2: "Option 2",
  //   },
  // ];

  // console.log(countVotes(data));

  // const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // const RADIAN = Math.PI / 180;
  // const renderCustomizedLabel = ({
  //   cx,
  //   cy,
  //   midAngle,
  //   innerRadius,
  //   outerRadius,
  //   percent,
  //   index,
  // }) => {
  //   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //   const y = cy + radius * Math.sin(-midAngle * RADIAN);

  //   return (
  //     <text
  //       x={x}
  //       y={y}
  //       fill="white"
  //       textAnchor={x > cx ? "start" : "end"}
  //       dominantBaseline="central"
  //     >
  //       {`${(percent * 100).toFixed(0)}%`}
  //     </text>
  //   );
  // };

  const displayData = countVotes(data);
  useEffect(() => {
    const get = async () => {
      try {
        const res = await fetch(
          "https://sheet.best/api/sheets/9d1d54f7-3c54-4123-b8a4-7215917c076f"
        );
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    get();
  });
  return (
    <Box width="100vw" height="100vh">
      <UserButton />
      {/* {displayData.map((data, i) => (
        <Box width={"200px"} height="200px" key={i}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.dataCount}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={"100%"}
                fill="#8884d8"
                dataKey="value"
              >
                {data.dataCount.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Box>
      ))} */}
    </Box>
  );
}
