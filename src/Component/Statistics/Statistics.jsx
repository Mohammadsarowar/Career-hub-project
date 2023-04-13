import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const marks = useLoaderData();

  return (
    <div className="w-10/12 mx-auto mt-5">
      <h2 className="text-2xl text-center font-bold mb-5">Statistics</h2>
      <div className="w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={marks}>
              <Area
                type="monotone"
                dataKey="mark"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <XAxis dataKey="assignment" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
