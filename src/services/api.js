import axios from "axios";

const API_BASE_URL = "https://api.example.com";

export const getSchedules = async () => {
  const response = await axios.get(`${API_BASE_URL}/schedules`);
  return response.data;
};

export const createAppointment = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/appointments`, data);
  return response.data;
};
