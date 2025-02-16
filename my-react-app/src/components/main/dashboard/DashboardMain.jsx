import React from 'react';
import PropTypes from 'prop-types';
import DashboardMainGraphs from './DashboardMainGraphs';
import DashboardSideGraphs from './DashboardSideGraphs';

// DashboardMain component: Renders the main content area of the dashboard
function DashboardMain({userId}) {
  return (
    <div className='dashboardMain'>
      {/* DashboardMainGraphs component - handles the rendering of main graph sections */}
      <DashboardMainGraphs userId={userId} />  
      {/* DashboardSideGraphs component - handles the rendering of side graph sections */}    
      <DashboardSideGraphs userId={userId} />
    </div>
  );
}

DashboardMain.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default DashboardMain;