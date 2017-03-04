const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const cors = require('cors');
const secret = require('./secret.js')
const port = 5000

var app = module.exports = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}./../public`))
app.use(cors())

// MASSIVE ========================================
const massiveUri = `postgres://${secret.dbPw}`
const massiveServer = massive.connectSync({
  connectionString: massiveUri
})

app.set('db', massiveServer)
const db = app.get('db')
const dbCtrl = require('./dbCtrl')














// LISTENING ON PORT ========================================
app.listen(port, () => {
  console.log(`LISTENING ON: ${port}`);
})
