import React from 'react';
import PropTypes from 'prop-types';
import DashboardMainTopGraph from './DashboardMainTopGraph';
import DashboardMainBottomGraphs from './DashboardMainBottomGraphs';

// DashboardMainGraphs component: Renders the main graph sections of the dashboard
function DashboardMainGraphs({userId}) {
  return (
    <>
      <div className='mainGraphs'>
        {/* Top graph section, passing the userId prop */}
        <DashboardMainTopGraph userId={userId} />
        {/* Bottom graphs section, also passing the userId prop */}
        <DashboardMainBottomGraphs userId={userId} />
      </div>
    </>
  );
}

DashboardMainGraphs.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default DashboardMainGraphs;