const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const cors = require('cors');

var app = express();
module.exports = app;
app.use(bodyParser.json());
app.use(express.static(`${__dirname}./../public`))
