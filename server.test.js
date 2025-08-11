const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
  it('should return Hello from Express server!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Hello from Express server!');
  });
});
