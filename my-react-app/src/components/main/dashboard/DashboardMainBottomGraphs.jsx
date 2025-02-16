import React from 'react';
import PropTypes from 'prop-types';
import DashboardFirstBottomGraph from './DashboardFirstBottomGraph';
import DashboardSecondBottomGraph from './DashboardSecondBottomGraph';
import DashboardThirdBottomGraph from './DashboardThirdBottomGraph';

// Component to render the bottom part of the Dashboard's main section with graphs
function DashboardMainBottomGraph({userId}) {
  return (
      <div className='bottomGraphs'>
        {/* Each Dashboard graph component is passed the userId prop for specific user data */}
        <DashboardFirstBottomGraph userId={userId} />
        <DashboardSecondBottomGraph userId={userId} />
        <DashboardThirdBottomGraph userId={userId} />
      </div>
  );
}

DashboardMainBottomGraph.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default DashboardMainBottomGraph;
