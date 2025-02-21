import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { UserDataModel } from '/src/services/userDataModel';

// DashboardHeader component: Displays the header section of the dashboard
function DashboardHeader({ userId }) {
  const [userInfos, setUserInfos] = useState(null); // State to store user information
  

  useEffect(() => {
    const fetchData = async () => { 
      try {
        const userDataModel = new UserDataModel(); // Instance of UserDataModel for data fetching
        const userData = await userDataModel.getUserInfo(userId); // Fetching user data

        if (userData && userData.userInfos) {
          setUserInfos(userData.userInfos); // Setting user information in state
        }
      } catch (error) {
        console.error('Error while fetching user infos:', error); // Logging any errors during fetch
      }
    };

    fetchData();
  }, [userId]); // Dependency array ensures this effect runs when userId changes

  if (!userInfos) {
    return <div>Loading...</div>;
  }

  return (
    <div className='dashboardHeader'>
      {/* Personalized greeting using the user's first name */}
      <h1>Bonjour <span className='firstName'>{userInfos.firstName}</span></h1>
      <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
    </div>
  );
}

DashboardHeader.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default DashboardHeader;
