import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;
console.log("API_BASE_URL:", API_BASE_URL);

export class ApiDataService {
  // Method to get basic user data
  async getUserData(userId) {
    try {
      const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
      return response.data.data; // Returning the user data
    } catch (error) {
      console.error('Error while retrieving user data from API', error);
      throw error; // Rethrowing error for caller to handle
    }
  }

  // Method to get user activity data
  async getUserActivity(userId) {
    try {
      const response = await axios.get(`${API_BASE_URL}/user/${userId}/activity`);
      return response.data; // Returning the activity data
    } catch (error) {
      console.error('Error while retrieving activity data from API', error);
      throw error; // Rethrowing error for caller to handle
    }
  }

  // Method to get user average session data
  async getUserAverageSessions(userId) {
    try {
      const response = await axios.get(`${API_BASE_URL}/user/${userId}/average-sessions`);
      return response.data; // Returning the average session data
    } catch (error) {
      console.error('Error while retrieving average session data from API', error);
      throw error; // Rethrowing error for caller to handle
    }
  }

  // Method to get user performance data
  async getUserPerformance(userId) {
    try {
      const response = await axios.get(`${API_BASE_URL}/user/${userId}/performance`);
      return response.data; // Returning the performance data
    } catch (error) {
      console.error('Error while retrieving performance data from API', error);
      throw error; // Rethrowing error for caller to handle
    }
  }
}
