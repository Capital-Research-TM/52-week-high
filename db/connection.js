const mongoose = require('mongoose');
const seed = require('./dbseed.js');
const faker = require('faker');

mongoose.connect('mongodb://localhost/test');

var robinHoodSchema = new mongoose.Schema({
  id: Number,
  company: String,
  prices: [],
  volume: [],
  dates: []
});

var Robin = mongoose.model('Robin', robinHoodSchema);

const seedDB = ()=> {
  let dataObj = [];
  let names = seed.createCompNames();
  for (let i = 0; i < names.length; i++) {
    let prices = seed.prices();
    let volume = seed.volume();
    let dates = seed.date();
    let obj = {
      id : i,
      company: names[i],
      prices: prices,
      volume: volume,
      dates: dates
    };
    dataObj.push(obj);
  }


  Robin.insertMany(dataObj, (err, docs)=> {
    if (err) {
      console.log('failed to save in db');
    } else {
      console.log(docs);
    }

  });

}
seedDB();
