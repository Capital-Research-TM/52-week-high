const mysql = require('mysql');
const query = require('./query.js');
var connection = mysql.createConnection({
  user: 'root',
  database: 'stock'
});

connection.connect((err)=> {
  if (err) {
    console.error('error connecting:' + err.stack);
    return;
  } else {
    query.seedDB();
    console.log('connected to sql!');
  }
})




module.exports = connection;
