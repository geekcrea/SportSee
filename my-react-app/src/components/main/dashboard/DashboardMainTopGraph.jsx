import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Scatter, ReferenceLine
} from 'recharts';
import { UserDataModel } from '/src/services/userDataModel';

// Component for displaying the main top graph of the dashboard
function DashboardMainTopGraph({ userId }) {
  const [userActivity, setUserActivity] = useState([]); // State to store user activity data
  const userDataModel = new UserDataModel(); // Instance of UserDataModel for fetching data

  useEffect(() => {
    const fetchData = async () => {
      const userData = await userDataModel.getUserActivity(userId); // Fetching user activity data
      if (userData && userData.data && userData.data.sessions) {
        setUserActivity(userData.data.sessions); // Setting user activity data in state
      }
    };
    fetchData();
  }, [userId]);

// Transforming data for the chart
const dataForChart = userActivity.map((session, index) => ({
  day: index + 1, // Sequential day number
  kilogram: session.kilogram,
  calories: session.calories
}));

// Calculating ticks for the Y axis
const calculateTicks = (min, max) => {
  const mid = (min + max) / 2;
  return [min, mid, max];
};

// Getting min and max values for the Y axis
const minPoids = Math.min(...dataForChart.map(item => item.kilogram)) - 1;
const maxPoids = Math.max(...dataForChart.map(item => item.kilogram)) + 1;
const yAxisTicks = calculateTicks(minPoids, maxPoids);

// Custom X axis tick component
const CustomTickXAxis = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y + 10})`}>
      <text x={0} y={-3} dy={20} textAnchor="middle" fill="#9B9EAC">
        {payload.value}
      </text>
    </g>
  );
};

CustomTickXAxis.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object,
};

// Custom Y axis tick component
const CustomTickYAxis = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={3} dx={50} textAnchor="end" fill="#9B9EAC">
        {payload.value}
      </text>
    </g>
  );
};

CustomTickYAxis.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object,
};

// Custom tooltip component for the chart
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='topGraphTooltip'>
        <p className='topTooltip'>{payload[0].value}kg</p>
        <p>{payload[1].value}kcal</p>
      </div>
    );
  }
  return null;
};

// Define the prop types
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired
  }))
};

// Main render method for the dashboard's top graph
  return (
      <div className='topGraph'>
        <ResponsiveContainer  width="95%" height={180} style={{ margin: '0 auto' }}>
        <h2>Activité quotidienne</h2>
          <BarChart data={dataForChart}>
          {yAxisTicks.map((tick, index) => (
            <ReferenceLine
              key={`line-${index}`}
              yAxisId="right"
              y={tick}
              strokeDasharray="3 3"
              stroke="#ccc"
            />
          ))}
            {/* Setting up X and Y axes with custom ticks */}
            <XAxis dataKey="day" tick={<CustomTickXAxis />} tickLine={false} />
            <YAxis yAxisId="left" orientation="left" hide={true} />
            <YAxis yAxisId="right" orientation="right" stroke="#282D30" domain={[minPoids, maxPoids]} ticks={yAxisTicks} tick={<CustomTickYAxis />} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Legend iconType="circle" verticalAlign="top" align="right"  iconSize={8} style={{ marginRight: '10px' }} />
            <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" name="Poids (kg)" radius={[3.5, 3.5, 0, 0]} barSize={7} />
            <Bar yAxisId="left" dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" radius={[3.5, 3.5, 0, 0]} barSize={7} />
            <Scatter dataKey="cnt" fill="red" />
          </BarChart>
        </ResponsiveContainer>
        
      </div>
  );
}

DashboardMainTopGraph.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default DashboardMainTopGraph;
