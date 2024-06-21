// services/api.js
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:4000/api";

export const fetchAttractions = async (page = 0, limit = 20) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/attractions?page=${page}&limit=${limit}`
    );
    return response.data; // assuming the server returns the data array directly
  } catch (error) {
    console.error("Error fetching attractions:", error);
    throw error; // Re-throw to handle it in the calling component
  }
};
export const searchItems = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/items/search`, {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getItemById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/items/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAudioFile = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/audio/${id}`, {
      responseType: "blob",
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
