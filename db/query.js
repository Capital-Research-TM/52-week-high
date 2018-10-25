const connection = require('./connection.js');
const seed = require('./dbSeed.js');


module.exports.seedDB = () => {
  ()=> {
    let queryStr = `DROP DATABASE IF EXISTS stock`;
    connection.query(queryStr, (err, results)=> {
      if (err) {
        console.log(err);
      } else {
      console.log('success in dropping database!')
      }
    });
  }

  ()=> {
    let queryStr = `CREATE DATABASE stock`;
    connection.query(queryStr, (err, results)=> {
      if (err) {
        console.log(err);
      } else {
      console.log('success in creating database!')
      }
    });
  }

  ()=> {
    let queryStr = `USE stock`;
    connection.query(queryStr, (err, results)=> {
      if (err) {
        console.log(err);
      } else {
      console.log('success in using database!')
      }
    });
  }

    ()=> {
      let queryStr = `CREATE TABLE company (
        id int AUTO_INCREMENT PRIMARY KEY,
        company VARCHAR(50)
      )`;
      connection.query(queryStr, (err, results)=> {
        if (err) {
          console.log(err);
        } else {
        console.log('success in creating table Company!')
        }
      });
    }

    ()=> {
      let queryStr = `CREATE TABLE stockPrice (
        price int, volume int,
        date int,
        company_id int,
        FOREIGN KEY (company_id)
          REFERENCES company(id)
      )`;
      connection.query(queryStr, (err, results)=> {
        if (err) {
          console.log(err);
        } else {
        console.log('success in creating table stockPrice!')
        }
      });
    }
    //call the companyNames function from dbSeed
    seed.createCompanyNames();


}
//called by createCompanyNames in dbSeed
module.exports.postNames = (params, cb) => {
  console.log(params);
  queryString = `INSERT INTO company(company) VALUE('${params}')`;
  connection.query(queryString, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
}
// module.exports.postNames = (params, cb) => {
//   console.log(params);
//   queryString = `INSERT INTO company(company) VALUE('${params}')`;
//   connection.query(queryString, (err, results) => {
//     if (err) {
//       cb(err, null);
//     } else {
//       cb(null, results);
//     }
//   });
// }
