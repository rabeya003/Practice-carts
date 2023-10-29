import { useEffect, useState } from "react";
import "./PhoneBar.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const PhoneBar = () => {
  const [phones, setPhone] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedData = data.data.data;
        const phoneData = loadedData.map((phone) => {
          const part = phone.slug.split("-");
          const price = parseInt(part[1]);
          const phoneInfo = {
            name: phone.phone_name,
            price: price,
          };
          return phoneInfo;
        });
        setPhone(phoneData);
      });
  }, []);
  return (
    <div>
      <BarChart width={1000} height={300} data={phones}>
        <Bar dataKey="price" fill="#8884d8"></Bar>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
      </BarChart>
    </div>
  );
};

export default PhoneBar;
