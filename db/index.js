let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/similar');

let db = mongoose.connection;

let Schema = mongoose.Schema;

let similarSchema = new Schema({
  style: String,
  beds: Number,
  name: {
    type: String,
    unique: true
  },
  price: Number,
  rating: Number,
  imageLink: String
});


let Similar = mongoose.model('Similar', similarSchema);

module.exports = Similar;