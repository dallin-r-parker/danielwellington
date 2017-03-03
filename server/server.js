const express = require('express')
const bodyParser = require('body-parser')
// const massive = require('massive')
const cors = require('cors');
const port = 5000

var app = module.export = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}./../public`))
app.use(cors())




// LISTENING ON PORT ========================================
app.listen(port, () => {
  console.log(`LISTENING ON: ${port}`);
})
