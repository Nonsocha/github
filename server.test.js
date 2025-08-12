const request = require('supertest');
const app = require('./server'); // Verify correct path to your app

describe('GET /', () => {
  it('should return Hello from Express server!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from Express server!'); // Use .toBe instead of .toContain
  });
});