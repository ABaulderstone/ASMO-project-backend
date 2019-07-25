require('dotenv').config();
const request = require('supertest');
const app = require('./../../app');
const connectToTestEnv = require("./../test_connect");

connectToTestEnv();

describe('GET /', () => {
  it('Testing home page', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});