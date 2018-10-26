const faker = require('faker');

module.exports.createCompNames = ()=> {
  let companyNames = [];
  for (let i = 0; i < 100; i ++) {
    let name = faker.company.companyName();
    companyNames.push(name);
  }
  return companyNames;
}

module.exports.prices =()=> {
  let prices = [];
  for (let i = 0; i < 30; i ++) {
    let price = faker.commerce.price();
    prices.push(price);
  }
  return prices;
}

module.exports.volume =()=> {
  let volumes = [];
  for (let i = 0; i < 30; i ++) {
    let volume = faker.random.number({min:0, max:100});
    volumes.push(volume);
  }
  return volumes;
}

module.exports.date = ()=> {
  let dates = [];
  for (let i = 0; i < 30; i ++) {
    dates.push(i);
  }
  return dates;
}
