'use strict';

const chakram = require('chakram');
const expect = chakram.expect;
const api = require('./utils/api');
require('./utils/run');


describe('Should sending request using Get method', () => {

    it('should return data and verifying status code is 200', () => {
        const response = chakram.get(api.url('users'));
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it('Verifying content type header is "application/json; charset=utf-8"', () => {
        const response = chakram.get(api.url('users'));
        expect(response).to.have.header("content-type", "application/json; charset=utf-8");

        return chakram.wait();
    });

    it('Verifying content of response body is array of 10 users', () => {
        const response = chakram.get(api.url('users'));
        expect(response).to.have.json(function (users) {
            expect(users.length).to.be.equal(10);
        });

        return chakram.wait();
    });
});
