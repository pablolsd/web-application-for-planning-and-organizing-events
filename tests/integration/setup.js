
const axios = require('axios');

const setup = async () => {
  
  await axios.get('http://localhost:3001/api/test');
};

module.exports = setup;
