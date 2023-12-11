const axios = require('axios');

const testAPI = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/test');
    console.log('API Test Result:', response.data);
  } catch (error) {
    console.error('API Test Failed:', error.message);
  }
};

testAPI();
