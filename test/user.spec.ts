import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app';
import {} from 'jasmine';

const req = request(app);

describe('User Test', () => {
    it('Get /user', (done) => {
        req.get('/user')
            .expect(200, done);
    });
});
