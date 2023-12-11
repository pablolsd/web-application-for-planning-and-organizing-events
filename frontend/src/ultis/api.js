import axios from 'axios';

const handleError = (error) => {
  console.error('API Error:', error);
};

const api = {
  get: async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },
  post: async (url, data) => {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },
};

export default api;
