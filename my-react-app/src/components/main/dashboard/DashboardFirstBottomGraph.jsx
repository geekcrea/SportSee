import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, Rectangle
} from 'recharts';
import { UserDataModel } from '/src/services/userDataModel';

// Component for displaying the first bottom graph of the dashboard
function DashboardFirstBottomGraph({ userId }) {
  const [averageSessionsData, setAverageSessionsData] = useState([]); // State to store average session data
  const userDataModel = new UserDataModel(); // Instance of UserDataModel for fetching data

  useEffect(() => {
    const fetchData = async () => {
      const data = await userDataModel.getUserAverageSessions(userId); // Fetching average session data
      if (data && data.data && data.data.sessions) {
        const sessions = data.data.sessions.map(session => ({
          dayNumber: session.day, 
          sessionLength: session.sessionLength                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        }));
  
        const startValue = sessions[0].sessionLength;
        const endValue = sessions[sessions.length - 1].sessionLength;
        const averageSessionsDataWithPadding = [
          { dayNumber: 'Start', sessionLength: startValue },
          ...sessions,
          { dayNumber: 'End', sessionLength: endValue }
        ];
  
        setAverageSessionsData(averageSessionsDataWithPadding);
      }
    };
  
    fetchData();
  }, [userId]);
  
  

// Convert a day number to a day name
const daysTranslations = {
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
  7: "D"
};

// Define the custom tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length && label !== 'Start' && label !== 'End') {
    return (
      <div style={{ backgroundColor: '#fff', color: '#000', padding: '5px', border: '1px solid #ccc', fontSize:'10px', fontWeigh:'500' }}>
        {`${payload[0].value} min`}
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
  })),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

// Define the custom tick
const CustomTick = (props) => {
  const { x, y, payload } = props;
  const dayName = daysTranslations[payload.value] || ''; 
  return (
    <g transform={`translate(${x},${y+5})`}>
      <text 
        x={0} 
        y={0} 
        dy={16} 
        textAnchor="middle" 
        fill="#fff" 
        opacity={0.5} 
        fontSize="12px" 
        fontWeight="500"
        >  
        {dayName}
      </text>
    </g>
  );
};

CustomTick.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object,
  index: PropTypes.number,
};

// Define the custom cursor
const CustomCursor = (props) => {
  const { points, width, height} = props;
  const { x, y } = points[0];
  return (
    <Rectangle fill="#000000" opacity={0.1} x={x} y={y - 48} width={width + 48} height={height + 100} />
  );
};

CustomCursor.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  })),
  width: PropTypes.number,
  height: PropTypes.number,
};

// Define the custom active dot
const CustomActiveDot = (props) => {
  // Check if the dot is the fictive point
  if (props.payload.dayNumber === 'Start' || props.payload.dayNumber === 'End') {
    return null;
  }
  return <circle cx={props.cx} cy={props.cy} r={4} stroke="blue" fill="white" />;
};

CustomActiveDot.propTypes = {
  payload: PropTypes.object,
  cx: PropTypes.number,
  cy: PropTypes.number,
};

// Define the custom tick formatter
const formatTick = (tickItem) => {
  return daysTranslations[tickItem] || '';
  };

  return (
      <ResponsiveContainer className="firstBottomGraph" width="1%" height={263}>
        <AreaChart data={averageSessionsData} margin={{ top: 50, right: -15, left: -15, bottom: 25 }}>
            <text x="35%" y="40" textAnchor="middle" fill="#fff" fontSize={15} fontWeight="500" opacity={0.5}>
              Durée moyenne <tspan x="31%" dy="20">des sessions</tspan>
            </text>
            <XAxis 
              dataKey="dayNumber"
              axisLine={false}
              tickLine={false}
              tick={<CustomTick />}
              tickFormatter={formatTick}
              ticks={[1, 2, 3, 4, 5, 6, 7]}
              interval={0}
              scale="point"
            />
            <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
            <defs>
              <linearGradient id="strokeGradient" x1="0" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity={0.1} />
                <stop offset="100%" stopColor="#ffffff" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="sessionLength"
              stroke="url(#strokeGradient)"
              strokeWidth={3}
              fillOpacity={0}
              activeDot={<CustomActiveDot />}
            />
        </AreaChart>
      </ResponsiveContainer>
  );
}

DashboardFirstBottomGraph.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default DashboardFirstBottomGraph;