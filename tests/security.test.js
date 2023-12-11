const request = require('supertest');
const app = require('../backend/app');

describe('Security Tests', () => {
  it('should deny unauthorized access', async () => {
    const res = await request(app).get('/api/events');
    expect(res.status).toBe(401);
  });

});
