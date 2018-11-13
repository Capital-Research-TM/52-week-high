const mongoose = require('mongoose');


const db = mongoose.connection;


mongoose.connect('mongodb://jonpaul110:hrsf104@ds141406.mlab.com:41406/price_range');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('we\'re connected to the database!');
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
  console.log('helo ')
  db.dropDatabase(function (err) {
    console.log('dropped database');
    initialize = false;
  });
}
