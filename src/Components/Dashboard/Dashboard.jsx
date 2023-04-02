import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const students = [
    {
      id: 1,
      name: "Alice",
      physics: 75,
      chemistry: 80,
      math: 90,
    },
    {
      id: 2,
      name: "Bob",
      physics: 80,
      chemistry: 85,
      math: 75,
    },
    {
      id: 3,
      name: "Charlie",
      physics: 70,
      chemistry: 65,
      math: 80,
    },
    {
      id: 4,
      name: "Dave",
      physics: 90,
      chemistry: 85,
      math: 95,
    },
    {
      id: 5,
      name: "Eve",
      physics: 60,
      chemistry: 75,
      math: 70,
    },
    {
      id: 6,
      name: "Frank",
      physics: 85,
      chemistry: 80,
      math: 90,
    },
    {
      id: 7,
      name: "Grace",
      physics: 90,
      chemistry: 95,
      math: 80,
    },
    {
      id: 8,
      name: "Harry",
      physics: 75,
      chemistry: 80,
      math: 85,
    },
    {
      id: 9,
      name: "Ivy",
      physics: 85,
      chemistry: 70,
      math: 75,
    },
    {
      id: 10,
      name: "Jack",
      physics: 70,
      chemistry: 80,
      math: 65,
    },
    {
      id: 11,
      name: "Kelly",
      physics: 80,
      chemistry: 85,
      math: 90,
    },
    {
      id: 12,
      name: "Liam",
      physics: 95,
      chemistry: 90,
      math: 85,
    },
  ];

  return (
    <div>
      <LineChart width={1000} height={300} data={students}>
        <Line dataKey="physics"></Line>
        <Line stroke="#8884d8" dataKey="math"></Line>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Dashboard;
