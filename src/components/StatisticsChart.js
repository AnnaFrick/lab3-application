import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import '../Chart.css'

const ChartComponent = ({ characterCounts }) => {

  const characterCountsArray = Object.keys(characterCounts).map((character) => ({
    character,
    count: characterCounts[character],
  }));

  return (
    <div className="chart-container">
      <div className="bar-chart">
        <BarChart width={400} height={300} data={characterCountsArray}>
          <XAxis dataKey="character" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="darkorange" />
        </BarChart>
      </div>
    </div>
  );
};

export default ChartComponent
