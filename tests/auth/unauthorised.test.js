require('dotenv').config();
const req = require('supertest');
const app = require('./../../app');
const connectToTestEnv= require("./../test_connect");

connectToTestEnv();

describe('make sure all endpoints are inaccesible without token', () => {
    it('Staff', (done) => {
      req(app)
        .get('/staff')
        .expect(401, done);
    });
    it('Customers', (done) => {
        req(app)
          .get('/customers')
          .expect(401, done);
      });
      it('Reviews', (done) => {
        req(app)
          .get('/reviews')
          .expect(401, done);
      });
      it('Images', (done) => {
        req(app)
          .get('/images')
          .expect(401, done);
      });
      it('Stats', (done) => {
        req(app)
          .get('/stats')
          .expect(401, done);
      });

  });