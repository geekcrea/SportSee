import mockData from '/src/services/mockData.json';

export class MockDataService {
  // Method to get basic user data from mock data
  async getUserData(userId) {
    if (mockData[userId]) {
      return mockData[userId].userInfo; // Returning the user info if found
    } else {
      throw new Error('Error while retrieving user data from API'); // Error if user not found
    }
  }

  // Method to get user activity data from mock data
  async getUserActivity(userId) {
    if (mockData[userId] && mockData[userId].userActivity) {
      // Encapsulate activity data in a 'data' object to match API format
      return { data: mockData[userId].userActivity };
    } else {
      throw new Error(
        "Error while retrieving user's activity data from API", // Error if activity data not found
      );
    }
  }

  // Method to get user average session data from mock data
  async getUserAverageSessions(userId) {
    if (
      mockData[userId] &&
      mockData[userId].averageSessions &&
      mockData[userId].averageSessions.sessions
    ) {
      // Encaspulate average sessions data in a 'data' object to match API format
      return { data: { sessions: mockData[userId].averageSessions.sessions } };
    } else {
      throw new Error(
        'Error while retrieving user average sessions from API', // Error if session data not found
      );
    }
  }

  // Method to get user performance data from mock data
  async getUserPerformance(userId) {
    if (mockData[userId] && mockData[userId].performance) {
      // Encapsuate performance data in a 'data' object to match API format
      return { data: mockData[userId].performance };
    } else {
      throw new Error(
        'Error while retrieving user performance from API', // Error if performance data not found
      );
    }
  }
}
