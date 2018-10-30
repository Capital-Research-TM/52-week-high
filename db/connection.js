const mongoose = require('mongoose');


const db = mongoose.connection;


mongoose.connect('mongodb://localhost/test');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('we\'re connected!');
});

const robinHoodSchema = new mongoose.Schema({
  id: Number,
  company: String,
  prices: Number,
  volume: Number,
  dates: Number
});

module.exports.Robin = mongoose.model('Robin', robinHoodSchema);


module.exports.drop = () => {
  console.log('this is a function');
  db.dropDatabase(function (err) {
    console.log('dropped database');
    mongoose.connection.close();
    initialize = false;
  });
}
