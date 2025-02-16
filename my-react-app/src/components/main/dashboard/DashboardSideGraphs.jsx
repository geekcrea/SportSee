import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { UserDataModel } from '/src/services/userDataModel';

// Importing icons for each category
import Calories from '/src/assets/icons/cards/calories.png';
import Proteines from '/src/assets/icons/cards/proteines.png';
import Glucides from '/src/assets/icons/cards/glucides.png';
import Lipides from '/src/assets/icons/cards/lipides.png';

// Component for displaying the user's key data in the form of cards
function DashboardSideGraphs({ userId }) {
  const [keyData, setKeyData] = useState(null); // State for storing key data of the user
  const userDataModel = new UserDataModel(); // Instance of UserDataModel for data fetching

  // useEffect hook to fetch user data when the component mounts or userId changes
  useEffect(() => {
    const fetchData = async () => {
      const data = await userDataModel.getUserInfo(userId); // Fetching user data
      if (data && data.keyData) {
        setKeyData(data.keyData); // Storing key data in state
      }
    };
  
    fetchData();
  }, [userId]);
  
  // Function to determine background color based on category
  const getBackgroundColor = (category) => {
    switch (category) {
      case "Calories":
        return "#FF0000";
      case "Protéines":
        return "#4AB8FF";
      case "Glucides":
        return "#F9CE23";
      case "Lipides":
        return "#FD5181";
      default:
        return "#FFFFFF";
    }
  };

  // Display a loading message if keyData is not yet available
  if (!keyData) {
    return <div>Loading...</div>;
  }

  // Rendering Card components for each category with respective data and styling
  return (
    <div className="sideDashboard">
      <Card
        imageUrl={Calories}
        data={`${keyData.calorieCount}kCal`}
        category="Calories"
        backgroundColor={getBackgroundColor("Calories")}
      />
      <Card
        imageUrl={Proteines}
        data={`${keyData.proteinCount}g`}
        category="Protéines"
        backgroundColor={getBackgroundColor("Protéines")}
      />
      <Card
        imageUrl={Glucides}
        data={`${keyData.carbohydrateCount}g`}
        category="Glucides"
        backgroundColor={getBackgroundColor("Glucides")}
      />
      <Card
        imageUrl={Lipides}
        data={`${keyData.lipidCount}g`}
        category="Lipides"
        backgroundColor={getBackgroundColor("Lipides")}
      />
    </div>
  );
}

DashboardSideGraphs.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default DashboardSideGraphs;
