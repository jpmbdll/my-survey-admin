import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", pv: 2400, amt: 2400 },
  { name: "Feb", pv: 1398, amt: 2210 },
  { name: "Mar", pv: 9800, amt: 2290 },
  { name: "Apr", pv: 3908, amt: 2000 },
  { name: "May", pv: 4800, amt: 2181 },
  { name: "Jun", pv: 3800, amt: 2500 },
  { name: "Jul", pv: 4300, amt: 2100 },
];

const error = console.error;
console.error = (...args) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

const CardWithChart = () => {
  return (
    <Box overflow="hidden">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#9B2C2C" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CardWithChart;
