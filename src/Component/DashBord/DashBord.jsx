import "./DashBord.css";
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

const DashBord = () => {
  const studentMarks = [
    {
      id: 1,
      name: "Student 1",
      math: 95,
      physics: 50,
      chemistry: 88,
    },
    {
      id: 2,
      name: "Student 2",
      math: 92,
      physics: 60,
      chemistry: 75,
    },
    {
      id: 3,
      name: "Student 3",
      math: 78,
      physics: 60,
      chemistry: 80,
    },
    {
      id: 4,
      name: "Student 4",
      math: 95,
      physics: 91,
      chemistry: 87,
    },
    {
      id: 5,
      name: "Student 5",
      math: 89,
      physics: 84,
      chemistry: 92,
    },
    {
      id: 6,
      name: "Student 6",
      math: 66,
      physics: 79,
      chemistry: 58,
    },
    {
      id: 7,
      name: "Student 7",
      math: 93,
      physics: 75,
      chemistry: 60,
    },
    {
      id: 8,
      name: "Student 8",
      math: 80,
      physics: 50,
      chemistry: 79,
    },
    {
      id: 9,
      name: "Student 9",
      math: 88,
      physics: 90,
      chemistry: 86,
    },
    {
      id: 10,
      name: "Student 10",
      math: 91,
      physics: 77,
      chemistry: 45,
    },
    {
      id: 11,
      name: "Student 11",
      math: 34,
      physics: 78,
      chemistry: 2,
    },
    {
      id: 12,
      name: "Student 12",
      math: 86,
      physics: 42,
      chemistry: 30,
    },
  ];

  return (
    <div>
      <LineChart width={1000} height={300} data={studentMarks}>
        <Line dataKey="physics"></Line>
        <Line stroke="#8884d8" dataKey="chemistry"></Line>
        <Line dataKey="math"></Line>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default DashBord;
