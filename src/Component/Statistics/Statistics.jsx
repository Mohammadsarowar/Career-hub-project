import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const marksArray = [
        {
          id: 1,
          name: "Assignment 1",
          mark: 51
        },
        {
          id: 2,
          name: "Assignment 2",
          mark: 49
        },
        {
          id: 3,
          name: "Assignment 3",
          mark: 31
        },
        {
          id: 4,
          name: "Assignment 4",
          mark: 55
        },
        {
          id: 5,
          name: "Assignment 5",
          mark: 56
        },
        {
          id: 6,
          name: "Assignment 6",
          mark: 43
        },
        {
          id: 7,
          name: "Assignment 7",
          mark: 60
        },
     
      ];
      

    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={marksArray}
            >
                <Line dataKey="physics"></Line>
                <Line stroke="#8884d8" dataKey="mark"></Line>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;