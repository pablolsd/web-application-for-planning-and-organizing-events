const axios = require('axios');

describe('Example Integration Test', () => {
  it('should make a request to the API', async () => {
    const response = await axios.get('http://localhost:3001/api/test');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('message');
  });
});
