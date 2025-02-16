const API_BASE_URL = import.meta.env.VITE_API_URL;

export class ApiDataService {
  // Method to get basic user data
  async getUserData(userId) {
    try {
      // Fetching user data from the API
      const response = await fetch(`${API_BASE_URL}/user/${userId}`);
      if (!response.ok) {
        throw new Error('Unable to fetch user data from API');
      }
      const userData = await response.json();
      return userData.data; // Returning the user data
    } catch (error) {
      console.error('Error while retrieving user data from API', error);
      throw error; // Rethrowing error for caller to handle
    }
  }

  // Method to get user activity data
  async getUserActivity(userId) {
    try {
      // Fetching user activity data from the API
      const response = await fetch(`${API_BASE_URL}/user/${userId}/activity`);
      if (!response.ok) {
        throw new Error('Error while retrieving activity data from API');
      }
      const data = await response.json();
      return data; // Returning the activity data
    } catch (error) {
      console.error('Error while retrieving activity data from API', error);
      throw error; // Rethrowing error for caller to handle
    }
  }

  // Method to get user average session data
  async getUserAverageSessions(userId) {
    try {
      // Fetching user average session data from the API
      const response = await fetch(
        `${API_BASE_URL}/user/${userId}/average-sessions`,
      );
      if (!response.ok) {
        throw new Error('Error while retrieving average session data from API');
      }
      const data = await response.json();
      return data; // Returning the average session data
    } catch (error) {
      console.error(
        'Error while retrieving average session data from API',
        error,
      );
      throw error; // Rethrowing error for caller to handle
    }
  }

  // Method to get user performance data
  async getUserPerformance(userId) {
    try {
      // Fetching user performance data from the API
      const response = await fetch(
        `${API_BASE_URL}/user/${userId}/performance`,
      );
      if (!response.ok) {
        throw new Error('Error while retrieving performance data from API');
      }
      const data = await response.json();
      return data; // Returning the performance data
    } catch (error) {
      console.error('Error while retrieving performance data from API', error);
      throw error; // Rethrowing error for caller to handle
    }
  }
}
