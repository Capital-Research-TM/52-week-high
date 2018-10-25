const query = require('./query.js');
const faker = require('faker');


module.exports.createCompanyNames = () => {

  let companyNames = [];
  let i = 0;
  while (i < 100) {
    let name = faker.company.companyName();
    companyNames.push(name);
    i ++;
  }
  for (var k = 0; k < companyNames.length; k ++) {
    query.postNames(companyNames[k], (err, results)=> {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
    });
  }

  return companyNames;
}
