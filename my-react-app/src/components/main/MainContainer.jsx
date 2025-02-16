import React from 'react';
import SideMenu from './sideMenu/SideMenu';
import Dashboard from './dashboard/Dashboard';

// MainContainer component: Renders the main section of the application
function MainContainer() {
  return (
    <>
    <div className='mainContainer'>
      <SideMenu />
      <Dashboard />
      </div>
    </>
  );
}

export default MainContainer;