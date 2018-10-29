const mongoose = require('mongoose');
const seed = require('./dbSeed.js');

mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('we\'re connected!');
});

const robinHoodSchema = new mongoose.Schema({
  id: Number,
  company: String,
  prices: [],
  volume: [],
  dates: []
});

const Robin = mongoose.model('Robin', robinHoodSchema);

const seedDB = ()=> {
  const dataObj = [];
  const names = seed.createCompNames();
  for (let i = 0; i < names.length; i++) {
    const prices = seed.prices();
    const volume = seed.volume();
    const dates = seed.date();
    const obj = {
      id: i,
      company: names[i],
      prices,
      volume,
      dates
    };
    dataObj.push(obj);
  }
  Robin.insertMany(dataObj, (err, docs) => {
    if (err) {
      console.log('failed to save in db');
    } else {
      console.log('sucess in seeding database');
    }
  });
};

seedDB();
