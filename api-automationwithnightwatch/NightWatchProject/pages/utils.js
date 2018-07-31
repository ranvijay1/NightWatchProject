'use strict';

const HOST = 'https://jsonplaceholder.typicode.com';

module.exports.BASE_URL = HOST;
module.exports.url = (path, query) => [HOST, path].join('/') + (query ? '?' + query : '');