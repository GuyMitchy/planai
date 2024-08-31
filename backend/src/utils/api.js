import axios from 'axios';

const API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
});

const validateApiKey = (apiKey) => {
};

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('userToken');
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  const openAiApiKey = process.env.OPENAI_API_KEY;
  validateApiKey(openAiApiKey);
  config.headers['Authorization'] = 'Bearer ' + openAiApiKey;
  return config;
});

export const login = (email, password) => api.post('/login', { email, password });
export const register = (username, email, password) => api.post('/register', { username, email, password });
export const sendMessage = (message) => api.post('/chat', { message });
export const search = (query) => api.post('/search', { query });
export default api;
