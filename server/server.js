const express = require('express');
const bodyParser = require('body-parser');
const Path = require('path');

let app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

let port = 3003;

app.listen(port, (err) => {
  if (err) { console.log(err) }
  console.log('Server connected! Listening on http://localhost:' + port)
});