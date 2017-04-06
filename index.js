'use strict';

const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

const cn = {
  host: 'localhost',
  port: '5433',
  database: 'dienthoai',
  user: 'postgres',
  password: 'abc'
};

nunjucks.configure('publish', {
  autoescape: true,
  express   : app
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/publish/index.html');
});

const options = {
  promiseLib: Promise // overriding the default (ES6 Promise);
};
const pgp = require('pg-promise')(options);

const port = 3000;

app.listen(port, () => {
    console.log('\nReady for GET requests on http://localhost:' + port);
});

module.exports.db = pgp(cn);