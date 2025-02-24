import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export class ApiDataService {
  // Méthode pour gérer les erreurs et afficher une notification
  handleApiError(error, message) {
    console.error(message, error);
    toast.error("🚨 Erreur : Impossible de charger les données !");
    throw error; // Rethrow pour que l'appelant puisse gérer l'erreur si nécessaire
  }

  // Récupérer les données utilisateur
  async getUserData(userId) {
    try {
      const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
      return response.data.data;
    } catch (error) {
      this.handleApiError(error, "Erreur lors de la récupération des données utilisateur");
    }
  }

  // Récupérer l'activité utilisateur
  async getUserActivity(userId) {
    try {
      const response = await axios.get(`${API_BASE_URL}/user/${userId}/activity`);
      return response.data;
    } catch (error) {
      this.handleApiError(error, "Erreur lors de la récupération de l'activité utilisateur");
    }
  }

  // Récupérer les sessions moyennes utilisateur
  async getUserAverageSessions(userId) {
    try {
      const response = await axios.get(`${API_BASE_URL}/user/${userId}/average-sessions`);
      return response.data;
    } catch (error) {
      this.handleApiError(error, "Erreur lors de la récupération des sessions moyennes");
    }
  }

  // Récupérer la performance utilisateur
  async getUserPerformance(userId) {
    try {
      const response = await axios.get(`${API_BASE_URL}/user/${userId}/performance`);
      return response.data;
    } catch (error) {
      this.handleApiError(error, "Erreur lors de la récupération des performances utilisateur");
    }
  }
}