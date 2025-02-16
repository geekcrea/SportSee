import React from 'react';
import { useParams } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import DashboardMain from './DashboardMain';

// function to render the dashboard
function Dashboard() {
  const { userId } = useParams(); // Retrieving the user's ID from the URL parameter
  return (
    <div className='dashboardContainer'>
      {/* DashboardHeader component, passing the userId as a prop */}
      <DashboardHeader userId={userId} />
      {/* DashboardMain component, passing the userId as a prop */}
      <DashboardMain userId={userId} />
    </div>
  );
}

export default Dashboard;