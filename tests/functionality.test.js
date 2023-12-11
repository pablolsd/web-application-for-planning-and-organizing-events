const request = require('supertest');
const app = require('../backend/app');

describe('Functionality Tests', () => {
  it('should create a new event', async () => {
    const res = await request(app)
      .post('/api/events')
      .send({ name: 'Birthday Party', date: '2023-12-31', venue: 'Party Hall' });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

});
