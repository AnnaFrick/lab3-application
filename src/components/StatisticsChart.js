import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import '../Chart.css';
import '../CharacterComponent.css'

const ChartComponent = ({ characterCounts }) => {
  try {
    if (!characterCounts || !Object.keys(characterCounts).length) {
      throw new Error('No character counts data available');
    }

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
  } catch (error) {
    console.error('An error occurred:', error);
    return (
      <div className='character-component'>
        <h4>An error occured while loading charts: {error}</h4>
      </div>
    )
  }
}

export default ChartComponent
