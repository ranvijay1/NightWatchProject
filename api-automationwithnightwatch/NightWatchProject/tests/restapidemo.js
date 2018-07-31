const Utils = require('./../pages/utils.js');
const https = require('https');
const util = require('util');

module.exports = {
    tags: ['restdemo'],

    before: function (browser) {

    },

    after: function (browser) {
        browser.end();
    },

    'Should launch uri and verify status code is 200': function (browser) {
        var URI = Utils.url('users');
        https.get(URI, (response) => {
            browser.assert.equal(response.statusCode, '200');
        }).on('error', (e) => {
            console.error(e);
        });
    },

    'Should launch uri and verify "content-type" header is "application/json; charset=utf-8"': function (browser) {
        var URI = Utils.url('users');
        https.get(URI, (response) => {
            browser.assert.equal(response.headers['content-type'], 'application/json; charset=utf-8');
        }).on('error', (e) => {
            console.error(e);
        });
    },

    'Should launch uri and verify content of response body has 10 users': function (browser) {
        var URI = Utils.url('users');
        var body = "";
        https.get(URI, (response) => {
            response.on('data', (allData) => {
                body += allData;
                
            });
            response.on('end', () => {
                var data = JSON.parse(body);
                browser.assert.equal(data.length, 10);
            });

        }).on('error', (e) => {
            console.error(e);
        });
    }
};