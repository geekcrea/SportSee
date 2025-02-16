import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Text } from 'recharts';
import { UserDataModel } from '/src/services/userDataModel';

// Custom label component for the radar chart
function customedLabels({ payload, x, y, cx, cy }) {
  return (
    <Text
      y={y + (y - cy) /10 }
      x={x + (x - cx) /3 }
      fill="#fff" // White color
      fontSize="12" // Font size
      textAnchor="middle"
      dominantBaseline="central"
    >
      {payload.value}
    </Text>
  );
}

// Component to display the user's performance data in a radar chart
function DashboardSecondBottomGraph({ userId }) { 
  const [performanceData, setPerformanceData] = useState([]); // Fetching performance data
  const userDataModel = new UserDataModel(); // Instance of UserDataModel for data fetching

  useEffect(() => {
    const fetchData = async () => {
      const data = await userDataModel.getUserPerformance(userId); // Fetching performance data
      if (data && data.data && data.data.data) {
        // Formatting and translating performance data
        const formattedData = data.data.data.map(item => {
          const categoryName = data.data.kind[item.kind.toString()];
          return {
            category: categoryTranslations[categoryName] || categoryName,
            value: item.value
          };
        });

        setPerformanceData(formattedData); // Setting the formatted data to state
      }
    };

    fetchData();
  }, [userId]);

  // Translation mapping for performance categories
  const categoryTranslations = {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité"
  };

  // Sorting the performance data based on a predefined order
  const orderedCategories = ["Intensité", "Vitesse", "Force", "Endurance", "Énergie", "Cardio"];
  performanceData.sort((a, b) => orderedCategories.indexOf(a.category) - orderedCategories.indexOf(b.category));

  return (
      <ResponsiveContainer className="secondBottomGraph" width="100%" height={263}>
        <RadarChart outerRadius={80} data={performanceData}  >
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis 
            dataKey="category" 
            stroke="#fff" 
            fontSize={12} 
            tickLine={false} 
            tickMargin={30}
            tick={(props) => customedLabels(props)} // Using custom labels for the axis
          />
          <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
  );
}

DashboardSecondBottomGraph.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default DashboardSecondBottomGraph;