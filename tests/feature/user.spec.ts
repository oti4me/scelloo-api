import { expect } from 'chai';
import supertest from 'supertest';
import { app } from '../../src/server';
import { validUser, invalidEmail, userUpdate } from '../data';
import db from '../../src/database';

const request = supertest(app);

describe('Users Controller Tests', () => {
  describe('Create User POST: /api/v1/users', () => {
    it('should successfully create a new user', (done) => {
      request
        .post('/api/v1/users')
        .send(validUser)
        .expect(201)
        .end(async (err, res) => {
          const { status, payload } = res.body;
          if (err) return done(err);
          expect(status).to.equal('Success');
          expect(payload.email).to.equal(validUser.email);
          done();
        });
    });
  });
  describe('Create User Validation POST: /api/v1/users', () => {
    it('should return 409 if user with email already exists', (done) => {
      request
        .post('/api/v1/users')
        .send(validUser)
        .expect(409)
        .end(async (err, res) => {
          const { message } = res.body;
          if (err) return done(err);
          expect(message).to.equal(
            `A user with the email '${validUser.email}' already exists`
          );
          done();
        });
    });
    it('should return 422 if user email is invalid', (done) => {
      request
        .post('/api/v1/users')
        .send(invalidEmail)
        .expect(422)
        .end(async (err, res) => {
          const { message, body } = res.body;
          if (err) return done(err);
          expect(message).to.equal(`Request validation failed`);
          expect(body[0].msg).to.equal(`Invalid email`);
          done();
        });
    });
    it('should return 422 if user first name is less than 3 or more than 25 chars', (done) => {
      request
        .post('/api/v1/users')
        .send({ ...validUser, fname: 'ot' })
        .expect(422)
        .end(async (err, res) => {
          const { message, body } = res.body;
          if (err) return done(err);
          expect(message).to.equal(`Request validation failed`);
          expect(body[0].msg).to.equal(`First nane must be 3-25 chars long`);
          done();
        });
    });
    it('should return 422 if user last name is less than 3 or more than 25 chars', (done) => {
      request
        .post('/api/v1/users')
        .send({ ...validUser, lname: 'og' })
        .expect(422)
        .end(async (err, res) => {
          const { message, body } = res.body;
          if (err) return done(err);
          expect(message).to.equal(`Request validation failed`);
          expect(body[0].msg).to.equal(`Last nane must be 3-25 chars long`);
          done();
        });
    });
  });

  describe('Edit User PUT: /api/v1/users/:', () => {
    describe('Update User', () => {
      it('should successfully update a user', (done) => {
        request
          .put('/api/v1/users/1')
          .send(userUpdate)
          .expect(200)
          .end(async (err, res) => {
            const { status, payload } = res.body;
            if (err) return done(err);
            expect(status).to.equal(`Success`);
            expect(payload.user.fname).to.equal(userUpdate.fname);
            expect(payload.user.email).to.equal(userUpdate.email);
            done();
          });
      });

      it('should return 404 if user not found', (done) => {
        request
          .put('/api/v1/users/198')
          .send(userUpdate)
          .expect(404)
          .end(async (err, res) => {
            const { message } = res.body;
            if (err) return done(err);
            expect(message).to.equal(`User not found`);
            done();
          });
      });

      it('should return 422 if provided data is invalid', (done) => {
        request
          .put('/api/v1/users/198')
          .send({ ...userUpdate, fname: 'ot' })
          .expect(422)
          .end(async (err, res) => {
            const { message, body } = res.body;
            if (err) return done(err);
            expect(message).to.equal(`Request validation failed`);
            expect(body[0].msg).to.equal(`First nane must be 3-25 chars long`);
            done();
          });
      });
    });
  });

  describe('Delete User DELETE: /api/v1/users/:id', () => {
    describe('Delete User', () => {
      it('should successfully delete a user', (done) => {
        request
          .delete('/api/v1/users/1')
          .expect(200)
          .end(async (err, res) => {
            const { status, payload } = res.body;
            if (err) return done(err);
            expect(status).to.equal(`Success`);
            expect(payload.message).to.equal(`User deleted!`);
            done();
          });
      });

      it('should return 404 if user not found', (done) => {
        request
          .delete('/api/v1/users/198')
          .expect(404)
          .end(async (err, res) => {
            const { message } = res.body;
            if (err) return done(err);
            expect(message).to.equal(`User not found`);
            done();
          });
      });
    });
  });
});

describe('Error Tests', () => {
  describe('404 GET: invalid route', () => {
    it('should successfully create a new user', (done) => {
      expect(true).to.equal(true);
      request
        .get('/api/v1/invalid')
        .send(validUser)
        .expect(404)
        .end(async (err, res) => {
          const { message } = res.body;
          if (err) return done(err);
          expect(message).to.equal(`Not Found - /api/v1/invalid`);
          done();
        });
    });
  });
});
