const db = require('./connection.js');
const faker = require('faker');

const seedCreateCompNames = ()=> {
  let companyNames = [];
  for (let i = 0; i < 100; i ++) {
    let name = faker.company.companyName();
    companyNames.push(name);
  }
  return companyNames;
}

const seedPrices =()=> {
  let prices = [];
  for (let i = 0; i < 30; i ++) {
    let price = faker.commerce.price();
    prices.push(price);
  }
  return prices;
}

const seedVolume =()=> {
  let volumes = [];
  for (let i = 0; i < 30; i ++) {
    let volume = faker.random.number({min:0, max:50});
    volumes.push(volume);
  }
  return volumes;
}

const seedDate = ()=> {
  let dates = [];
  for (let i = 0; i < 30; i ++) {
    dates.push(i);
  }
  return dates;
}

const seedDB = ()=> {
  const dataObj = [];
  const companyNames = seedCreateCompNames();
  for (let i = 0; i < companyNames.length; i++) {
    const prices = seedPrices();
    const volume = seedVolume();
    const dates = seedDate();
    for (let j = 0; j < 30; j++) {
      const companyObj = {
        id: i,
        company: companyNames[i],
        prices: prices[j],
        volume: volume[j],
        dates: dates[j]
      };
      dataObj.push(companyObj);
    }
  }
  db.Robin.insertMany(dataObj, (err, docs) => {
    if (err) {
      console.log('failed to save in db');
    } else {
      console.log(docs);
    }
  });
};

seedDB();
