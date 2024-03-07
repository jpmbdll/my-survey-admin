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

const error = console.error;
console.error = (...args) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

const CardWithChart = ({ averages }) => {
  return (
    <Box overflow="hidden">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={averages}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="xAxisLabel" />
          <YAxis />
          <Tooltip
            content={<CustomTooltip title={averages.respondentType} />}
          />
          <Legend />
          <Bar dataKey="mean" stackId="a" fill="#9B2C2C" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  console.log(payload);
  if (active && payload && payload.length) {
    return (
      <Box bg="white" p={3} borderRadius={5} fontSize={12}>
        {`${payload[0].payload.respondentType} : ${payload[0].payload.mean}`}
      </Box>
    );
  }

  return null;
};

export default CardWithChart;
