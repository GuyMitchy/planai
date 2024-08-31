
import axios from 'axios';

const API_URL = 'http://your-api-url.com';

export const login = async (credentials) => {
    return await axios.post(`${API_URL}/login`, credentials);
};

export const register = async (userData) => {
    return await axios.post(`${API_URL}/register`, userData);
};

export const chat = async (message) => {
    return await axios.post(`${API_URL}/chat`, message);
};
