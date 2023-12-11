const axios = require('axios');

const teardown = async () => {
  
  await axios.get('http://localhost:3001/api/shutdown');
};

module.exports = teardown;
