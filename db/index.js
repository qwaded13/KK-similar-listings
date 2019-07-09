let mongoose = require('mongoose');
let dbURL = 'mongodb://localhost/similarlistings';

let db = mongoose.connect(dbURL, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to DB');
  }
});

let Schema = mongoose.Schema;

let similarSchema = new Schema({
  listingName: {
    type: String,
    unique: true
  },
  listingId: {
    type: Number,
    unique: true
  },
  propertyType: String,
  beds: Number,
  price: Number,
  rating: Number,
  numberOfReviews: Number,
  imageLink: String
});

let SimilarListing = mongoose.model('SimilarListing', similarSchema);

module.exports = {
  db,
  SimilarListing
};
