import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const ChartComponent = ({ characterCounts }) => {

  const characterCountsArray = Object.keys(characterCounts).map((character) => ({
    character,
    count: characterCounts[character],
  }));

  return (
    <BarChart width={400} height={300} data={characterCountsArray}>
      <XAxis dataKey="character" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="rgba(75, 192, 192, 0.6)" />
    </BarChart>
  );
};

export default ChartComponent
