
import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:8000'; // Replace with your backend API URL

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/login`, { username, password });
    const { token } = response.data;

    // Store the token in a cookie
    Cookies.set('token', token);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const logout = () => {
  // Remove the token from the cookie
  Cookies.remove('token');
};

export const getToken = () => {
  return Cookies.get('token');
};
