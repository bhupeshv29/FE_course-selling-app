const API_URL = process.env.REACT_APP_BACKEND_URL;

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
}; 