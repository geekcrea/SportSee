import { ApiDataService } from '/src/services/apiService';
import { MockDataService } from '/src/services/mockService';
import { useMockData } from '/src/config';

export class UserDataModel {
  constructor() {
    // Determines whether to use mock data or live API based on the configuration
    this.dataService = useMockData
      ? new MockDataService()
      : new ApiDataService();
  }

  // Fetches user basic information
  async getUserInfo(userId) {
    try {
      const userData = await this.dataService.getUserData(userId);
      return userData; // Returning user data
    } catch (error) {
      console.error(
        'Error while retrieving user data from data service:',
        error,
      );
      throw error; // Rethrowing error for caller to handle
    }
  }

  // Fetches user activity data
  async getUserActivity(userId) {
    try {
      const userActivity = await this.dataService.getUserActivity(userId);
      return userActivity; // Returning user activity data
    } catch (error) {
      console.error(
        'Error while retrieving user activity from data service:',
        error,
      );
      throw error; // Rethrowing error for caller to handle
    }
  }

  // Fetches user average session data
  async getUserAverageSessions(userId) {
    try {
      const userAverageSessions =
        await this.dataService.getUserAverageSessions(userId);
      return userAverageSessions; // Returning user average session data
    } catch (error) {
      console.error(
        'Error while retrieving user average sessions from data service:',
        error,
      );
      throw error; // Rethrowing error for caller to handle
    }
  }

  // Fetches user performance data
  async getUserPerformance(userId) {
    try {
      const userPerformance = await this.dataService.getUserPerformance(userId);
      return userPerformance; // Returning user performance data
    } catch (error) {
      console.error(
        'Error while retrieving user performance from data service:',
        error,
      );
      throw error; // Rethrowing error for caller to handle
    }
  }
}
