const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');

let { db, SimilarListing } = require('../db/index.js');
// let insertAllListings = require('../db/insertAllListings');

let app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(compression());
app.use(morgan('dev'));

app.use('/:id(\\d+)', express.static(path.join(__dirname, '../client/dist')));

// without the ID endpoint
// app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/similar-listings/:listingId', (req, res) => {
  let listingId = req.params.listingId;
  let sampleSize = listingId % 2 ? 7 : 13;
  SimilarListing.aggregate([{ $sample: { size: sampleSize } }])
    .then((sample) => {
      if (!sample) {
        res.sendStatus(400);
      } else {
        res.send(sample);
      }
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

let port = 3003;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Server connected! Listening on http://localhost:' + port);
});
