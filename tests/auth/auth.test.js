
require('dotenv').config();
const req = require('supertest');
const app = require('./../../app');
const connectToTestEnv= require("./../test_connect");

connectToTestEnv();

describe('Test auth flow', () => {
  it('Tests request without body, expect failure', (done) => {
    req(app)
      .post('/auth/register')
      .send({})
      .expect(422, done);
  });
  it('Tests register', (done) => {
    req(app)
      .post('/auth/register')
      .send({
        email: "alex@test.com",
        password: "testing",
        confrimPassword: "testing"
      })
      .expect(200, done);
  });

  it('Tests register already existing user', (done) => {
    req(app)
      .post('/auth/register')
      .send({
        email: "alex@test.com",
        password: "testing",
        confrimPassword: "testing"
      })
      .expect(500, done);
  });

  it('Tests login', (done) => {
    req(app)
      .post('/auth/login')
      .send({
        email: "alex@test.com",
        password: "testing",
      })
      .expect(200, done);
  });

  it('Tests login with bad credentials', (done) => {
    req(app)
      .post('/auth/login')
      .send({
        email: "alex@test.com",
        password: "testidfsdf",
      })
      .expect(401, done);
  });
});